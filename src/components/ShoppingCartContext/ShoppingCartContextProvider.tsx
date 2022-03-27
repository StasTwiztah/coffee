import { useState } from "react";
import { createContext, FC, useReducer } from "react";
import { IItemCard } from "../../interfaces/IItemCard";
import { IShoppingCartContext } from "./interfaces/IShoppingCartContext";
import { shoppingCartContextReducer } from "./reducer/shoppingCartContextReducer";

const initialState = {
  items: {},
  append: () => undefined,
  // remove: () => undefined,
  // add: () => undefined,
  // subtract: () => undefined,
  // setCount: () => undefined,
  totalCount: 0,
};

export const ShoppingCartContext =
  createContext<IShoppingCartContext>(initialState);

export const ShoppingCartContextProvider: FC = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <ShoppingCartContext.Provider
      value={{
        items: state.items,
        append: (item: IItemCard) => setState({ ...state }),
        totalCount: Object.keys(state.items).length,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
