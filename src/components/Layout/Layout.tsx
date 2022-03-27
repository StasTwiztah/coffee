import { Link, Outlet } from "react-router-dom";
import { css } from "../../styles/EmotionCSS";
import { useStyles } from "../../styles/useStyles";

const layoutStyles = () => ({
  root: css`
    display: flex;
    flex-direction: row;
  `,
  nav: css`
    width: 100px;
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
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.page}>
          <Outlet />
        </div>
        <footer className={styles.footer}>footer</footer>
      </main>
    </div>
  );
};
