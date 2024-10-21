import { useEffect, useState } from "react"
import { Header } from "../components/Header";
import avatar from '../assets/face.png';
import '../styles/Story.css';

export const Story = () => {
    const text = "¿Qué historia quieres escuchar hoy?";
    const [letters, setLetters] = useState<JSX.Element[]>([]);
    useEffect (() => {
        document.body.style.backgroundColor = '#1A1C17';
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
            <Header/>
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
        </>
    )
}