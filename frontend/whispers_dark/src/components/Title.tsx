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
        <div className="container-title">
            <div className="container-title-text">
              <p className="title-text-page titleDarkComponent"> {letters} </p>
            </div>
        </div>
     </>
  )
}