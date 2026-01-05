import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Olá, eu sou Renan Santos</h1>
        <p className="hero-subtitle">
          Desenvolvedor front-end com foco em criar interfaces modernas, 
          responsivas e de fácil manutenção.
        </p>
        <button className="hero-button" onClick={handleOpenModal}>
          Saber Mais
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={handleCloseModal}>✕</button>
            <h2>Entre em contato</h2>
            <form action="mailto:seuemail@exemplo.com" method="POST" encType="text/plain">
              <input type="text" name="name" placeholder="Seu nome" required />
              <input type="email" name="email" placeholder="Seu email" required />
              <textarea name="message" placeholder="Sua mensagem" required></textarea>
              <button type="submit" className="modal-button">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
