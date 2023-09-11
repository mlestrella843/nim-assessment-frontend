import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import ConfirmationPage from "./components/ConfirmationPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/order-confirmation/:id" element={<ConfirmationPage />} />
    </Routes>
  );
}

export default AppRoutes;
