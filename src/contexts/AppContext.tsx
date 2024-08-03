/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from "react";
import { LoginTabProps } from "../pages/Login";

interface ContextProps {
  tab: LoginTabProps;
  setTab: React.Dispatch<React.SetStateAction<LoginTabProps>>;
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

  const values = {
    tab,
    setTab,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}
