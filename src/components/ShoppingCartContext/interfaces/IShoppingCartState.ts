import { ShoppingCartItem } from "../types/ShoppingCartItem";

export interface IShoppingCartState {
  items: Record<string, ShoppingCartItem>;
  totalCount: number;
}
