import { useEffect, useState } from "react";
import '../styles/Title.css';

export const TitleHeader = () => {
    const text = "Whispers in the Dark";
    const [letters, setLetters] = useState<JSX.Element[]>([]);
    useEffect(() => {
      document.body.style.backgroundColor ="#1A2F4C";
      const letterElements = text.split("").map((letter, index) => {
        const isSpace = letter === " ";
        return(
            <span key={index} className="letterComponent">
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
        <div className="container-login">
            <div className="container-register-text">
              <p className="login-button-init titleDarkComponent"> {letters} </p>
            </div>
        </div>
     </>
  )
}