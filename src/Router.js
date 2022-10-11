import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Play from "./pages/play/Play";
import Record from "./pages/record/Record";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Record />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
