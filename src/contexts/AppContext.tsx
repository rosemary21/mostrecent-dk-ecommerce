/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from "react";
import { LoginTabProps } from "../pages/Login";
import useLocalStorage from "../hooks/useLocalStorage";

interface ContextProps {
  tab: LoginTabProps;
  setTab: React.Dispatch<React.SetStateAction<LoginTabProps>>;
  activeCheckoutAccordion: string;
  setActiveCheckoutAccordion: React.Dispatch<React.SetStateAction<string>>;
  isAccordion: boolean;
  setIsAccordion: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext({} as ContextProps);

export function useAppContext() {
  return useContext(Context);
}

export default function AppContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [tab, setTab] = useState<LoginTabProps>("login");
  const [activeCheckoutAccordion, setActiveCheckoutAccordion] =
    useLocalStorage<string>("activeCheckoutAccordion", "1");
  const [isAccordion, setIsAccordion] = useLocalStorage<boolean>(
    "isAccordion",
    false
  );

  const values = {
    tab,
    setTab,
    activeCheckoutAccordion,
    setActiveCheckoutAccordion,
    isAccordion,
    setIsAccordion,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}
