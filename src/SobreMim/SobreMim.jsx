import React, { useState } from "react";
import "./SobreMim.css";

const SobreMim = () => {
  const eventos = {
    2022: "Comecei meus estudos em programação.",
    2023: "Aprendi React e Node.js.",
    2024: "Trabalhei em projetos pessoais e acadêmicos.",
    2025: "Me aprofundei em TypeScript e Figma.",
  };

  const [anoAtivo, setAnoAtivo] = useState(2022);

  return (
    <section id="sobremim" className="sobremim-container">
      <h2 className="sobremim-title">Sobre mim</h2>
      <div className="timeline">
        {Object.keys(eventos).map((ano) => (
          <button
            key={ano}
            className={`timeline-btn ${anoAtivo === parseInt(ano) ? "ativo" : ""}`}
            onClick={() => setAnoAtivo(parseInt(ano))}
          >
            {ano}
          </button>
        ))}
      </div>

      <div className="timeline-content">
        <p>{eventos[anoAtivo]}</p>
      </div>
    </section>
  );
};

export default SobreMim;
