import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faBook,
  faChalkboardTeacher,
  faUniversity
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  
  return (
    <div className="w-64 bg-[#1F2A44] text-white flex flex-col">
      {/* Título do Sidebar */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center">Dom Casmurro</h1>
      </div>

      {/* Navegação */}
      <nav className="flex-1 p-4">
        {/* Grupo 1 - Home */}
        <div className="mb-8">
          <h2 className="text-sm font-bold uppercase mb-4">Navegação</h2>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="flex items-center text-sm hover:text-gray-300">
                <FontAwesomeIcon icon={faHome} className="mr-3" /> Home
              </Link>
            </li>
          </ul>
        </div>

        {/* Grupo 2 - Personagens */}
        <div className="mb-8">
          <h2 className="text-sm font-bold uppercase mb-4">Personagens</h2>
          <ul className="space-y-4">
            <li>
              <Link to="/bentinho" className="flex items-center text-sm hover:text-gray-300">
                <FontAwesomeIcon icon={faUser} className="mr-3" /> Bentinho
              </Link>
            </li>
            <li>
              <Link to="/capitu" className="flex items-center text-sm hover:text-gray-300">
                <FontAwesomeIcon icon={faUser} className="mr-3" /> Capitu
              </Link>
            </li>
            <li>
              <Link to="/escobar" className="flex items-center text-sm hover:text-gray-300">
                <FontAwesomeIcon icon={faUser} className="mr-3" /> Escobar
              </Link>
            </li>
          </ul>
        </div>

        {/* Grupo 3 - Informações do Livro */}
        <div className="mb-8">
          <h2 className="text-sm font-bold uppercase mb-4">Informações</h2>
          <ul className="space-y-4">
            <li>
              <Link to="/livro" className="flex items-center text-sm hover:text-gray-300">
                <FontAwesomeIcon icon={faBook} className="mr-3" /> Livro e Autor
              </Link>
            </li>
            <li>
              <Link to="/disciplina" className="flex items-center text-sm hover:text-gray-300">
                <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3" /> Disciplina e Professora
              </Link>
            </li>
          </ul>
        </div>

        {/* Grupo 4 - Instituição */}
        <div>
          <h2 className="text-sm font-bold uppercase mb-4">Instituição</h2>
          <ul className="space-y-4">
            <li>
              <Link to="/utfpr" className="flex items-center text-sm hover:text-gray-300">
                <FontAwesomeIcon icon={faUniversity} className="mr-3" /> UTFPR e Alunas
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
