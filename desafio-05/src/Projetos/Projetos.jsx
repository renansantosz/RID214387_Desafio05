import React from "react";
import "./Projetos.css";

// Importando imagens da pasta assets
import Desafio01 from "../assets/Desafio01.png";
import Desafio02 from "../assets/Desafio02.png";
import BoardDeTarefas from "../assets/BoardDeTarefas.png";
import Portfolio from "../assets/Portfolio.png";

const projetos = [
  {
    id: 1,
    titulo: "Landing Page",
    descricao: "Um desafio inicial de front-end ",
    imagem: Desafio01,
    link: "https://desafio-01-renan-santos-de-araujo.netlify.app/",
  },
  {
    id: 2,
    titulo: "Paginação Responsiva",
    descricao: "Outro desafio para consolidar meus conhecimentos em React.",
    imagem: Desafio02,
    link: "https://desafio-02-renan-santos-de-araujo.netlify.app/",
  },
  {
    id: 3,
    titulo: "Board de Tarefas",
    descricao: "Aplicação para organizar tarefas de forma simples e prática.",
    imagem: BoardDeTarefas,
    link: "https://rid-214387-desafio03-iydi56zmw-renan-santos-projects-a7a7c835.vercel.app/",
  },
  {
    id: 4,
    titulo: "Meu Portfólio",
    descricao: "Este próprio portfólio desenvolvido em React + Vite.",
    imagem: Portfolio,
    link: "#",
  },
];

const Projetos = () => {
  return (
    <section id="projetos" className="projetos-container">
      <h2 className="projetos-title">Projetos</h2>
      <div className="projetos-grid">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="projetos-card">
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className="projetos-image"
            />
            <div className="projetos-content">
              <h3 className="projetos-cardTitle">{projeto.titulo}</h3>
              <p className="projetos-description">{projeto.descricao}</p>
              <button
                className="projetos-button"
                onClick={() => window.open(projeto.link, "_blank")}
              >
                Ver mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
