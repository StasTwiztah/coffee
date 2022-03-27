import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { AboutPage } from "./pages/AboutPage";
import { Catalog } from "./pages/CatalogPage";
import { FourOhFourPage } from "./pages/FourOhFourPage";
import { IndexPage } from "./pages/IndexPage";
import { OrdersPage } from "./pages/OrdersPage";
import { ProfilePage } from "./pages/ProfilePage";
import { TermsPage } from "./pages/TermsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="terms" element={<TermsPage />} />s
          <Route path="*" element={<FourOhFourPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
