import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { useContext } from "react";
import { ShoppingCartContext } from "../ShoppingCartContext/ShoppingCartContextProvider";

export const ShoppingCartButton = () => {
  const { totalCount } = useContext(ShoppingCartContext);

  return (
    <IconButton size="large">
      <Badge badgeContent={totalCount} color="error">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};
