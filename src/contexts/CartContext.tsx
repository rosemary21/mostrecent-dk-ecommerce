/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { AnimationControls, useAnimationControls } from "framer-motion";
import { getLocalData } from "../utils/localData";
import { LoginResponseProps, ProductDescription } from "../types/Response";
import { ActiveCheckoutAccordion } from "../pages/Checkout";

export interface CartProps {
  id: number;
  count: number;
}

interface DeliveryFormValues {
  state: string;
  zipCode: string;
  address: string;
  city: string;
  lga: string;
}

interface ContextProps {
  addToCart: (id: number) => void;
  removeItemFromCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cartCount: () => number;
  cartControls: AnimationControls;
  handleAnimateCart: () => void;
  fashionItems: ProductDescription[];
  artItems: ProductDescription[];
  allBrandItems: () => void;
  cart: CartProps[];
  setCart: React.Dispatch<React.SetStateAction<CartProps[]>>;
  formValues: DeliveryFormValues;
  setFormValues: React.Dispatch<React.SetStateAction<DeliveryFormValues>>;
  activeCheckoutAccordion: ActiveCheckoutAccordion;
  setActiveCheckoutAccordion: React.Dispatch<
    React.SetStateAction<ActiveCheckoutAccordion>
  >;
  user: LoginResponseProps | null;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext({} as ContextProps);

export function useCartContext() {
  return useContext(Context);
}

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useLocalStorage<CartProps[]>("cart", []);
  const [user, setUser] = useState<LoginResponseProps | null>(null);
  const cartControls = useAnimationControls();

  const [fashionItems, setFashionItems] = useState<ProductDescription[]>([]);
  const [artItems, setArtItems] = useState<ProductDescription[]>([]);
  const [formValues, setFormValues] = useLocalStorage<DeliveryFormValues>(
    "delivery-details",
    {
      state: "",
      zipCode: "",
      address: "",
      city: "",
      lga: "",
    }
  );
  const [activeCheckoutAccordion, setActiveCheckoutAccordion] =
    useLocalStorage<ActiveCheckoutAccordion>(
      "activeCheckoutAccordion",
      "Sign In"
    );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartCount = () => {
    return cart.reduce((qty, item) => qty + item.count, 0);
  };

  const handleAnimateCart = () => {
    cartControls.start({
      backgroundColor: [
        "#1e293b",
        "#1f2937",
        "#18181b",
        "#b91c1c",
        "#9a3412",
        "#3f6212",
        "#065f46",
        "#155e75",
        "#5754FF",
      ],
      scale: [1.22, 1.3, 1.1, 1],
      shadow: ["2px 2px 2px #5754FF", "4px 7px 7px #5754FF"],
    });
  };

  const addToCart = (id: number) => {
    setCart((currItems) => {
      if (currItems?.find((item) => item.id === id) == null) {
        return [...currItems, { id, count: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((currItems) => {
      if (currItems?.find((item) => item.id === id)?.count == 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemFromCart = (id: number) => {
    setCart((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const allBrandItems = () => {
    const fashionItems = getLocalData<ProductDescription[] | undefined>(
      "fashion-products"
    );
    const artItems = getLocalData<ProductDescription[] | undefined>(
      "artCraft-products"
    );

    if (!fashionItems) return;
    if (!artItems) return;

    setFashionItems(fashionItems);
    setArtItems(artItems);
  };

  useEffect(() => {
    const userData = getLocalData<LoginResponseProps>("user-details");
    if (!userData) return;
    setUser(userData);
  }, [isLoggedIn]);

  const values = {
    cartCount,
    addToCart,
    removeItemFromCart,
    clearCart,
    cartControls,
    handleAnimateCart,
    removeFromCart,
    fashionItems,
    artItems,
    cart,
    setCart,
    allBrandItems,
    formValues,
    setFormValues,
    activeCheckoutAccordion,
    setActiveCheckoutAccordion,
    user,
    setIsLoggedIn,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
}
