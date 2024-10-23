import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ButtonHome } from "../components/ButtonHome";
// import { Link } from "react-router-dom";
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
      window.
      document.body.style.backgroundColor ="#1A2F4C";
      const letterElements = text.split("").map((letter, index) => {
        const isSpace = letter === " ";
        return(
            <span key={index} className="letter">
              {isSpace ? '\u00A0' : letter} 
            </span>
        )
      });
          setLetters(letterElements);
          return() => {
              document.body.style.backgroundColor = "";
          }
        }, []);
        const hadleLogin = async () => {
          console.log( "datos comparados:", email, password);
          await loginUser({ email, password }); 
        }
  return(
    <>
        <div className="container-login">
            <div className="container-login-header">
              <Header/>
            </div>
            <div className="container-register-text">
              <p className="login-button-init titleDark"> {letters} </p>
            </div>
            <div >
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
                {/* <ButtonHome><Link to='/principal' className="loginLink"> ACCEDER </Link></ButtonHome> */}
            </div>
        </div>
    </>
  )
}


/*

import { useEffect, useState } from "react"
import { Header } from "../components/Header";
import { ButtonHome } from "../components/ButtonHome";
import './../styles/Register.css';
import './../styles/LetterBlood.css'
import { Form } from "../components/Form";
import { Link } from "react-router-dom";


export const Register = () => {
    const text = "Regístrate para ver contenido exclusivo";
    const [letters, setLetters] = useState<JSX.Element[]>([]);
    useEffect(() => {
        document.body.style.backgroundColor ="#1A2F4C";
        const letterElements = text.split("").map((letter, index) => {
            const isSpace = letter === " ";
            return(
                <span key={index} className="letter">
                    {isSpace ? '\u00A0' : letter} 
                    </span>
                  )
              });
              setLetters(letterElements); // Guardamos los spans como elementos JSX
              return() => {
                  document.body.style.backgroundColor = "";
              }
            }, []);
        return(
          <>
              <div className="container-register">
                  <div className="container-register-header">
                    <Header/>
                  </div>
                  <div className="container-register-text">
                    <p className="register-button-init titleDark"> {letters} </p>
                  </div>
                  <div className="container-register-form">
                      <Form/>
                  </div>
                  <div className="container-register-button">
                      <ButtonHome><Link to='/principal' className="buttonHomeLink"> CREAR CUENTA </Link></ButtonHome>
                      <p className="register-button-opc"> ¿Ya tienes una cuenta?<Link to='/login' className="register-button-a">Inicia sesión</Link></p>
                  </div>
                </div>
      
          </>
        )
      }

*/