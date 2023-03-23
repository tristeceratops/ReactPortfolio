import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Competence from "./pages/competence";
import Contact from "./pages/contact";
import NoPage from "./pages/NoPage";
import Presentation  from "./pages/presentation";
import Projet  from "./pages/projet";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="competence" element={<Competence />} />
          <Route path="projet" element={<Projet />} />
          <Route path="presentation" element={<Presentation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);