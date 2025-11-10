import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router";

import MainLayout from "./pages/MainLayout";
import Catalog from "./pages/MainLayout/Catalog";
import Quests from "./pages/MainLayout/Quests";
import PlacingOrder from "./pages/PlacingOrder";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Catalog />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="quests" element={<Quests />} />
        </Route>

        <Route path="placing-order" element={<PlacingOrder />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
