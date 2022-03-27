import { IItemCard } from "../../../interfaces/IItemCard";

type Append = {
  name: "APPEND";
  item: IItemCard;
};

type Remove = {
  name: "REMOVE";
  id: string;
};

type Add = {
  name: "ADD";
  id: string;
};

type Subtract = {
  name: "SUBTRACT";
  id: string;
};

type SetCount = {
  name: "SET_COUNT";
  id: string;
  count: number;
};

export type Action = Append | Remove | Add | Subtract | SetCount;
