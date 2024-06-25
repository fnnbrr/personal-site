import React from 'react';
import './Root.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import MissingPage from "./routes/MissingPage";
import Resume from "./routes/Resume";
import Automagical from "./routes/Automagical";
import ScooberSplat from "./routes/ScooberSplat";
import Contact from "./routes/Contact";

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Root />}>
                  <Route index element={<Home />}/>
                  <Route path="resume" element={<Resume />}/>
                  <Route path="games" element={null}>
                      <Route index element={<Home />}/>
                      <Route path="gunarmed" element={<MissingPage />}/>
                      <Route path="automagical" element={<Automagical />}/>
                      <Route path="scoober-splat" element={<ScooberSplat />}/>
                  </Route>
                  <Route path="tools" element={<Home />}/>
                  <Route path="contact" element={<Contact />}/>
                  <Route path="*" element={<MissingPage />}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}