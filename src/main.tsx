import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartContextProvider from "./contexts/CartContext.tsx";
import { ToastContainer } from "react-toastify";
import AppContextProvider from "./contexts/AppContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <CartContextProvider>
          <ToastContainer />
          <App />
        </CartContextProvider>
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
