import { Button } from "@mui/material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { css } from "../styles/EmotionCSS";
import { useStyles } from "../styles/useStyles";

type ItemCardProps = {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
};

const itemCardStyles = () => ({
  card: css`
    max-width: 300px;
    max-height: 450px;
  `,
});

export const ItemCard = ({
  name,
  price,
  imageUrl,
  ...props
}: ItemCardProps) => {
  const styles = useStyles(itemCardStyles);

  return (
    <Card {...props} className={styles.card}>
      <CardMedia component="img" image={imageUrl}></CardMedia>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{price} руб.</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">Подробно</Button>
        <Button variant="contained">В корзину</Button>
      </CardActions>
    </Card>
  );
};
