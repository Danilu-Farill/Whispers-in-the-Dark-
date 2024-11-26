// import { useEffect } from "react";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import fondo from './../assets/fondo_inicio.jpeg';
import './../styles/Home.css';

export const Home = () => {
  return (
    <>
      <div className="container-home">
        <div className="container-home-header">
          <Header/>
        </div>
        <div className="container-home-img">
          <img src={fondo} alt="Monstruo de hill" className="img-hill"/>
          <button type="button" className="button-Home"><Link to="/register" replace className="homeLink"> <p>INICIO</p> </Link></button>
        </div>
      </div>
    </>
  );
};