import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PrincipalPage from './pages/Principal';
import BentinhoPage from './pages/Bentinho';
import CapituPage from './pages/Capitu';
import EscobarPage from './pages/Escobar';
import DisciplinaPage from './pages/DisciplinaProf';
import UTFPRPage from './pages/UTFPR';
import LivroPage from './pages/LivroAutor';

const App = () => {
  return (
    <Router>
      <div className="lg:flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-50">
          <Routes>
            <Route path="/" element={<PrincipalPage />} />
            <Route path="/bentinho" element={<BentinhoPage />} />
            <Route path="/capitu" element={<CapituPage />} />
            <Route path="/escobar" element={<EscobarPage />} />
            <Route path="/disciplina" element={<DisciplinaPage />} />
            <Route path="/utfpr" element={<UTFPRPage />} />
            <Route path="/livro" element={<LivroPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;