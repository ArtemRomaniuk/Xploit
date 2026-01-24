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

const App = () => {
  const fetchMe = useUser((s) => s.fetchMe);
  const isMobile = useMediaQuery("(max-width: 48em)"); // 768px

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
              <Route path="catalog" element={<div>catalog</div>} />

              <Route element={<MobilePageLayout />}>
                <Route path="cart" element={<div>cart</div>} />
                <Route
                  path="placing-order"
                  element={<div>placing order</div>}
                />
                <Route path="auth" element={<div>auth</div>} />
                <Route path="quests" element={<div>quests</div>} />
                <Route path="*" element={<div>404</div>} />
              </Route>
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
