import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ButtonHome } from "../components/ButtonHome";
import { Form } from "../components/Form";
import { useLoginConnection } from "../routes/Login.router";
import avatar from '../assets/face.png';
import './../styles/Login.css';

export const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const { loginUser } = useLoginConnection();
  const text = "INICIAR SESIÓN";
  const [letters, setLetters] = useState<JSX.Element[]>([]);
  useEffect(() => {
    document.body.style.backgroundColor ="#1A2F4C";
    const letterElements = text.split("").map((letter, index) => {
      const isSpace = letter === " ";
      return(
        <span key={index} className="letter">
          {isSpace ? '\u00A0' : letter}
        </span>
      );
    });
    setLetters(letterElements);
    return() => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  const hadleLogin = async() => {
    console.log( "datos comparados:", email, password);
    await loginUser({ email, password });
  };
  return(
    <>
      <div className="container-login">
        <div className="container-login-header">
          <Header/>
        </div>
        <div className="container-login-text">
          <p className="login-button-init titleDark"> {letters} </p>
        </div>
        <div className="container-login-avatar">
          <img src={avatar} alt="Avatar" className="avatar-faceLogin" />
        </div>
        <div className="container-login-form">
          <Form
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            onCreate={hadleLogin}
          />
        </div>
        <div className="container-login-button">
          <ButtonHome onCreate={hadleLogin}> ACCEDER </ButtonHome>
        </div>
      </div>
    </>
  );
};

