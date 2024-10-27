import { useEffect } from "react";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import fondo from './../assets/fondo_inicio.jpeg'
import './../styles/Home.css'

export const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#010020';
    return () => {
      document.body.style.backgroundColor = ''; // Restaurar el color original
    };
  }, []); // Este useEffect se ejecuta solo una vez, al montar el componente
    return (
        <>
          <div className="container-home">
            <div className="container-home-header">
              <Header/>
            </div>
            <div className="container-home-img">
                  <img src={fondo} alt="Monstruo de hill" className="img-hill"/>
            </div>
            <div className="container-home-button">
                {/* <ButtonHome> <Link to="/register" className="homeLink"> INICIO </Link></ButtonHome> */}
                <button type="button" className="buttonHomeInit"><Link to="/register" replace className="homeLink"> INICIO </Link></button>
            </div>
          </div>
        </>
    )
}