import { useEffect, useState } from "react"
import { Header } from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import avatar from '../assets/face.png';
import '../styles/Story.css';
import { Link } from "react-router-dom";

export const Story = () => {
    const text = "¿Qué historia quieres escuchar hoy?";
    const [letters, setLetters] = useState<JSX.Element[]>([]);
    useEffect (() => {
        document.body.style.backgroundColor = '#1A1C17';
        window.history.pushState(null, "", window.location.href);
        window.history.replaceState(null, "", window.location.href);
        const letterElements = text.split("").map((letter, index) => {
            const isSpace = letter === " ";
            return(
                <span key={index} className="letterStory">
                  {isSpace ? '\u00A0' : letter} 
                </span>
            )
          });
              setLetters(letterElements);
              return() => {
                  document.body.style.backgroundColor = "";
              }
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
            <div>
                <img src={avatar} alt="Avatar" className="avatar-face" />
            </div>
            <div className="container-register-text">
                <p className="login-button-init titleDarkStory"> {letters} </p>
            </div>
            <div>
                <input type="text" name="story" id="inputStory" />
            </div>
            <div>
                <button type="button" className="buttonStory">CONTAR HISTORIA</button>
            </div>
        </div>
        </>
    )
}