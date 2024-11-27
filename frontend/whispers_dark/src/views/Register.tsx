import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import './../styles/Register.css';
import './../styles/LetterBlood.css';
import { Link } from "react-router-dom";
import { useRegisterConnection } from "../services/Register.router";

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { registerUser} = useRegisterConnection();
  const text = "REGÍSTRATE";
  const [letters, setLetters] = useState<JSX.Element[]>([]);
  useEffect(() => {
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
  const hadleCreate = async() => {
    console.log("datos enviados:", email, password);
    await registerUser({email, password});
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    hadleCreate();
  };
  return(
    <>
      <div className="container-register">
        <div className="container-register-header">
          <Header/>
        </div>
        <p className="register-button-init titleDark"> {letters} </p>
        <div className="container-register-form">
          <form action="register" className='register-form' onSubmit={handleFormSubmit}>
            <label htmlFor="email">CORREO ELECTRÓNICO</label>
            <input type="text" placeholder='Ingresa tu email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password">CONTRASEÑA</label>
            <input type="password" placeholder='Ingresa tu contraseña' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div className='container-buttonHome'>
              <button className='buttonHome-button' type='submit'>
                <span className='buttonHome-text'>CREAR CUENTA</span>
              </button>
              <p className="register-button-opc"> ¿Ya tienes una cuenta?<Link to='/login' className="register-button-a">Inicia sesión</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

