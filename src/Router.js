import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/nav/Nav";
import Play from "./pages/play/Play";
import Record from "./pages/record/Record";

function Router() {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState([]);
  console.log(url);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav file={file} />} />
        <Route
          path="/record"
          element={<Record setUrl={setUrl} setFile={setFile} />}
        />
        <Route path="/play" element={<Play url={url} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
