import React from 'react';
import './Root.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Root from "./routes/Root";

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Root />}>
                  
              </Route>
          </Routes>
      </BrowserRouter>
  );
}