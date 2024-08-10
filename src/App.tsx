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
import JobSearch2024 from "./routes/JobSearch2024";
import DistortionCamera from "./routes/DistortionCamera";

export default function App() {
    return (
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Root />}>
                  <Route index element={<Home />}/>
                  <Route path="resume" element={<Resume />}/>
                  <Route path="projects" element={null}>
                      <Route index element={<MissingPage />}/>
                      <Route path="automagical" element={<Automagical />}/>
                      <Route path="scoober-splat" element={<ScooberSplat />}/>
                      <Route path="distortion-camera" element={<DistortionCamera />}/>
                  </Route>
                  <Route path="blog" element={null}>
                      <Route index element={<MissingPage />}/>
                      <Route path="job-search-2024" element={<JobSearch2024 />}/>
                  </Route>
                  <Route path="contact" element={<Contact />}/>
                  <Route path="*" element={<MissingPage />}/>
              </Route>
          </Routes>
        </BrowserRouter>
    );
}