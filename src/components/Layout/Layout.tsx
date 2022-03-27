import { Link, Outlet } from "react-router-dom";
import { css } from "../../styles/EmotionCSS";
import { useStyles } from "../../styles/useStyles";
import { ShoppingCartButton } from "./ShoppingCartButton";

const layoutStyles = () => ({
  root: css`
    display: flex;
    flex-direction: column;
  `,
  header: css`
    display: flex;
    flex-direction: row;
  `,
  nav: css`
    display: flex;
    flex-direction: row;
    flex: 1;
  `,
  main: css`
    height: 100vh;
    display: flex;
    flex-direction: column;
  `,
  page: css`
    flex: 1;
  `,
  footer: css``,
});

export const Layout = () => {
  const styles = useStyles(layoutStyles);

  return (
    <div className={styles.root}>
      <header className={styles.nav}>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/terms">Terms</Link>
        </nav>
        <div>
          <ShoppingCartButton />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.page}>
          <Outlet />
        </div>
        <footer className={styles.footer}>footer</footer>
      </main>
    </div>
  );
};
