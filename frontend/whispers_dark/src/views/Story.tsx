import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import avatar from '../assets/face.png';
import '../styles/Story.css';
import { Link } from "react-router-dom";

export const Story = () => {
  const text = "¿Qué historia quieres leer hoy?";
  const [letters, setLetters] = useState<JSX.Element[]>([]);
  const [inputValue, setInputValue] = useState("");
  useEffect (() => {
    window.history.pushState(null, "", window.location.href);
    window.history.replaceState(null, "", window.location.href);
    const letterElements = text.split("").map((letter, index) => {
      const isSpace = letter === " ";
      return(
        <span key={index} className="letter">
          {isSpace ? '\u00A0' : letter}
        </span>
      );
    });
    setLetters(letterElements);
  }, []);
  return(
    <>
      <div>
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
          <input type="text" name="story" id="inputStory" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        </div>
        <div className="container-story-button">
          <button type="button" className="buttonStory">CONTAR HISTORIA</button>
        </div>
      </div>
    </>
  );
};

// agregar categoria