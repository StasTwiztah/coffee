import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

export const GlobalProviders: FC = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
