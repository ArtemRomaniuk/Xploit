import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import { useEffect } from "react";
import { useUser } from "./hooks/useUser";
import { useMobileSidebar } from "./hooks/useMobileSidebar";
import RootModal from "./HOC/RootModal";
import { useModal } from "./hooks/useModal";

import MainLayout from "./pages/MainLayout";
import Catalog from "./pages/MainLayout/Catalog";
import Quests from "./pages/MainLayout/Quests";

import MinimalLayout from "./pages/MinimalLayout";
import NotFound from "./pages/MinimalLayout/NotFound";
import PlacingOrder from "./pages/MinimalLayout/PlacingOrder";

const App = () => {
  const fetchMe = useUser((s) => s.fetchMe);
  const isOpenMobileSidebar = useMobileSidebar((s) => s.isOpen);
  const isOpenModal = useModal((s) => s.isOpen);

  useEffect(() => {
    fetchMe();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpenModal ? "hidden" : "";
  }, [isOpenModal]);

  return (
    <StrictMode>
      <BrowserRouter>
        <RootModal />

        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Catalog />} />
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
