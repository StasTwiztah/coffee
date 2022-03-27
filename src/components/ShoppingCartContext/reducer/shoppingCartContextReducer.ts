import { Reducer } from "react";
import { never } from "../../../functions/never";
import { IShoppingCartState } from "../interfaces/IShoppingCartState";
import { Action } from "./Action";

export const shoppingCartContextReducer: Reducer<IShoppingCartState, Action> = (
  state,
  action
) => {
  switch (action.name) {
    case "APPEND": {
      const existingItem = state.items[action.item.id];

      if (existingItem) {
        state.items[action.item.id] = {
          ...existingItem,
          count: existingItem.count + 1,
        };
      } else {
        state.items[action.item.id] = {
          ...action.item,
          count: 1,
        };
      }

      break;
    }

    case "ADD": {
      const existingItem = state.items[action.id];

      if (existingItem) {
        state.items[action.id] = {
          ...existingItem,
          count: existingItem.count + 1,
        };
      }

      break;
    }
    case "SUBTRACT":
      const existingItem = state.items[action.id];

      if (existingItem) {
        if (existingItem.count > 1) {
          state.items[action.id] = {
            ...existingItem,
            count: existingItem.count - 1,
          };
        } else {
          delete state.items[action.id];
        }
      }

      break;
    case "SET_COUNT": {
      const existingItem = state.items[action.id];

      if (existingItem) {
        state.items[action.id] = {
          ...existingItem,
          count: action.count,
        };
      }
      break;
    }
    case "REMOVE": {
      const existingItem = state.items[action.id];

      if (existingItem) {
        delete state.items[action.id];
      }

      break;
    }
    default:
      never(action);
  }

  return { ...state, totalCount: Object.keys(state.items).length };
};
