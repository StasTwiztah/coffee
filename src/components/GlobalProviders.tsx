import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartContextProvider } from "./ShoppingCartContext/ShoppingCartContextProvider";

export const GlobalProviders: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <ShoppingCartContextProvider>{children}</ShoppingCartContextProvider>{" "}
    </BrowserRouter>
  );
};
