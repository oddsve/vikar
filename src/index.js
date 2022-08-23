import ReactDOM from "react-dom/client";
import App from "./App";
import React  from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Absence from "./absence/index";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
<Routes>
      <Route path="/" element={<App />}>
        <Route path="absence" element={<Absence />} />
        <Route path="reports" element={<Absence />} />
      </Route>
</Routes>  </BrowserRouter>
);