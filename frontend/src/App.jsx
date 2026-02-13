import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { useEffect } from "react";
import { useUser } from "./hooks/useUser";
import RootModal from "./HOC/RootModal";
import { useMediaQuery } from "./hooks/useMediaQuery";

import MainLayout from "./pages/MainLayout";
import Catalog from "./pages/MainLayout/Catalog";
import Quests from "./pages/MainLayout/Quests";

import MinimalLayout from "./pages/MinimalLayout";
import NotFound from "./pages/MinimalLayout/NotFound";
import PlacingOrder from "./pages/MinimalLayout/PlacingOrder";

import MobileLayout from "./pages/MobileLayout/MobileLayout";
import MobilePageLayout from "./pages/MobileLayout/MobilePageLayout/MobilePageLayout";
import MobileCatalog from "./pages/MobileLayout/Catalog";
import AuthModal from "./HOC/AuthModal";
import CartModal from "./HOC/CartModal";

const App = () => {
  const fetchMe = useUser((s) => s.fetchMe);
  const isMobile = useMediaQuery("(max-width: 48rem)"); // 768px
  const isLoggedIn = useUser((s) => s.isLoggedIn);

  useEffect(() => {
    fetchMe();
  }, []);

  return (
    <StrictMode>
      <BrowserRouter>
        <RootModal />

        <Routes>
          {!isMobile ? (
            <>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Navigate to="catalog" replace />} />
                <Route path="catalog" element={<Catalog />} />
                <Route path="quests" element={<Quests />} />
              </Route>

              <Route element={<MinimalLayout />}>
                <Route path="placing-order" element={<PlacingOrder />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </>
          ) : (
            <Route element={<MobileLayout />}>
              <Route path="/" element={<Navigate to="catalog" replace />} />
              <Route path="catalog" element={<MobileCatalog />} />

              <Route element={<MobilePageLayout />}>
                <Route path="cart" element={<CartModal mobile />} />
                <Route path="placing-order" element={<PlacingOrder mobile />} />
                <Route
                  path="auth"
                  element={
                    !isLoggedIn ? (
                      <AuthModal mobile />
                    ) : (
                      <Navigate to="/catalog" replace />
                    )
                  }
                />
                <Route path="quests" element={<Quests />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
