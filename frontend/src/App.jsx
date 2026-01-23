import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { useEffect } from "react";
import { useUser } from "./hooks/useUser";
import RootModal from "./HOC/RootModal";

import MainLayout from "./pages/MainLayout";
import Catalog from "./pages/MainLayout/Catalog";
import Quests from "./pages/MainLayout/Quests";

import MinimalLayout from "./pages/MinimalLayout";
import NotFound from "./pages/MinimalLayout/NotFound";
import PlacingOrder from "./pages/MinimalLayout/PlacingOrder";

const App = () => {
  const fetchMe = useUser((s) => s.fetchMe);

  useEffect(() => {
    fetchMe();
  }, []);

  return (
    <StrictMode>
      <BrowserRouter>
        <RootModal />

        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="catalog" replace />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="quests" element={<Quests />} />
          </Route>

          <Route element={<MinimalLayout />}>
            <Route path="placing-order" element={<PlacingOrder />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
