import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { IItemCard } from "../interfaces/IItemCard";
import { css } from "../styles/EmotionCSS";
import { useStyles } from "../styles/useStyles";
import { ShoppingCartContext } from "./ShoppingCartContext/ShoppingCartContextProvider";

const itemCardStyles = () => ({
  card: css`
    max-width: 300px;
    max-height: 450px;
  `,
});

export const ItemCard = ({ name, price, imageUrl, ...props }: IItemCard) => {
  const styles = useStyles(itemCardStyles);
  const { append } = useContext(ShoppingCartContext);

  const addInShoppingCartHandler = () => {
    append({ ...props, name, price, imageUrl });
  };

  return (
    <Card {...props} className={styles.card}>
      <CardMedia component="img" image={imageUrl}></CardMedia>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{price} руб.</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">Подробно</Button>
        <Button variant="contained" onClick={() => addInShoppingCartHandler()}>
          В корзину
        </Button>
      </CardActions>
    </Card>
  );
};
