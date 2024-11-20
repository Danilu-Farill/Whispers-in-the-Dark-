import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ButtonHome } from "../components/ButtonHome";
import './../styles/Register.css';
import './../styles/LetterBlood.css';
import { Form } from "../components/Form";
import { Link } from "react-router-dom";
import { useRegisterConnection } from "../routes/Register.router";

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { registerUser} = useRegisterConnection();
  // const text = "Regístrate para ver contenido exclusivo";
  const text = "REGÍSTRATE PARA VER CONTENIDO";
  const [letters, setLetters] = useState<JSX.Element[]>([]);
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.history.replaceState(null, "", window.location.href);
    document.body.style.backgroundColor ="#1A2F4C";
    const letterElements = text.split("").map((letter, index) => {
      const isSpace = letter === " ";
      return(
        <span key={index} className="letter">
          {isSpace ? '\u00A0' : letter} {/* Renderizamos &nbsp; para el espacio */}
        </span>
      );
    });
    setLetters(letterElements); // Guardamos los spans como elementos JSX
    return() => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  const hadleCreate = async() => {
    console.log("datos enviados:", email, password);
    await registerUser({email, password});
  };
  return(
    <>
      <div className="container-register">
        <div className="container-register-header">
          <Header/>
        </div>
        <div className="container-register-text">
          <p className="register-button-init titleDark"> {letters} </p>
          {/* <p className="register-button-init"> Regístrate para ver contenido exclusivo </p> */}
        </div>
        <div className="container-register-form">
          <Form
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            onCreate={hadleCreate}
          />
        </div>
        <div className="container-register-button">
          <ButtonHome onCreate={hadleCreate} > CREAR CUENTA </ButtonHome>
          <p className="register-button-opc"> ¿Ya tienes una cuenta?<Link to='/login' className="register-button-a">Inicia sesión</Link></p>
        </div>
      </div>
    </>
  );
};