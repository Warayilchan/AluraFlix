import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Componentes/Header';
import Banner from './Componentes/Banner';
import Main from './Componentes/Main';
import Footer from './Componentes/Footer';
import NovosVideos from './Componentes/NovosVideos'; 

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<><Banner /><Main /></>} />
          <Route path="/novo-video" element={<NovosVideos />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
