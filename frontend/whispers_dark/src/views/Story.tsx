import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import avatar from '../assets/face.png';
import '../styles/Story.css';
import { Link } from "react-router-dom";
import { Modal } from "../components/Modal.component";
import kiki from '../assets/kiki.png';
import { useGeminiConnection } from "../services/Story";

export const Story = () => {
  const [newStory, setNewStory] = useState("");
  const { newStoryApi } = useGeminiConnection();
  const text = "¿Qué historia quieres leer hoy?";
  const [letters, setLetters] = useState<JSX.Element[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const token = localStorage.getItem("token");
  useEffect (() => {
    window.history.pushState(null, "", window.location.href);
    window.history.replaceState(null, "", window.location.href);
    const letterElements = text.split("").map((letter, index) => {
      const isSpace = letter === " ";
      return(
        <span key={index} className="letter">
          {isSpace ? '\u00A0' : letter} {/* Renderizamos &nbsp; para el espacio */}
        </span>
      );
    });
    setLetters(letterElements); // Guardamos los spans como elementos JSX
  }, []);

  const handleOpenModal = async() => {
    // const data = await newStoryApi(token);
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return(
    <>
      <div className="container-story">
        <div>
          <Header/>
        </div>
        <div className="icon-close">
          <Link to={'/category'} id="icon-close-text"> <FontAwesomeIcon icon={faXmark} size='3x'/> </Link>
        </div>
        <div className="container-story-avatar">
          <img src={avatar} alt="Avatar" className="avatar-face" />
        </div>
        <div className="container-story-text">
          <p className="story-button-init titleDark"> {letters} </p>
        </div>
        <div className="container-story-input">
          <label htmlFor="inputStory">Escribe la categoria de la historia aquí:</label>
          <input type="text" name="story" id="inputStory" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Zombies, Brujas, Hombres lobo"/>
        </div>
        <div className="container-story-button">
          <button type="button" className="buttonStory" onClick={handleOpenModal}>CONTAR HISTORIA</button>
          {modalIsOpen && (
            <Modal>
              <h1>Titulo</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <img src={kiki} alt=""  width="300px" height="300px"/>
              <button onClick={handleClose} className="modalQuiz-button">Cerrar</button>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

// agregar categoria