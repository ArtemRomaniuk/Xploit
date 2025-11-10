import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router";

import MainLayout from "./pages/MainLayout";
import Catalog from "./pages/MainLayout/Catalog";
import Quests from "./pages/MainLayout/Quests";

import MinimalLayout from "./pages/MinimalLayout";
import NotFound from "./pages/MinimalLayout/NotFound";
import PlacingOrder from "./pages/MinimalLayout/PlacingOrder";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
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
  </StrictMode>,
);
