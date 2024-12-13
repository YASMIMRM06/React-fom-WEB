
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Home from './componentes/Home';
import Historia from './componentes/Historia';
import FaleConosco from './componentes/FaleConosco';
import Galeria from './componentes/Galeria';  // Importando a Galeria
import NotFound from './componentes/NotFound'; // Página de erro
import "./css/styles.css"

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/historia" element={<Historia />} />
                <Route path="/faleconosco" element={<FaleConosco />} />
                <Route path="/galeria" element={<Galeria />} /> {/* Rota da Galeria */}
                <Route path="*" element={<NotFound />} /> {/* Página não encontrada */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

