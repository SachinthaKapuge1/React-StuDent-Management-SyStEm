import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Showcase from "./Components/Showcase";
import Add from "./Components/Add";
import Update from "./Components/Update";
import Layout from "./Components/Layout";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Showcase />} />
          <Route path="add" element={<Add />} />
          <Route path="update/:id" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
