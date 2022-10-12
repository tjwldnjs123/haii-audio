import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/nav/Nav";
import Play from "./pages/play/Play";
import Record from "./pages/record/Record";

function Router() {
  const [file, setFile] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav file={file} />} />
        <Route path="/record" element={<Record setFile={setFile} />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
