import { useEffect, useLayoutEffect, useState } from "react";
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Login from "./pages/Login";
import ProfilePage from "./pages/ProfilePage";
import LikedProductsPage from "./pages/LikedProductsPage";
import CartPage from "./pages/CartPage";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  function ScrollToTop() {
    const location = useLocation();
    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
    return null;
  }

  return (
    <>
      {" "}
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/likedproducts" element={<LikedProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
