import { IItemCard } from "../../../interfaces/IItemCard";

export interface IShoppingCartContext {
  items: Record<string, IItemCard & { count: number }>;
  append: (item: IItemCard) => void;
  // remove: (id: string) => void;
  // add: (id: string) => void;
  // subtract: (id: string) => void;
  // setCount: (id: string, count: number) => void;
  totalCount: number;
}
