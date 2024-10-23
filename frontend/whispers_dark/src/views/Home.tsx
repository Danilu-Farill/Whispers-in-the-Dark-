import { useEffect } from "react";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import fondo from './../assets/fondo_inicio.jpeg'
// import scream from '../assets/audio/scream.mp3';
// import backgroundMusic from '../assets/audio/background-music.mp3';
import './../styles/home.css'
import { BackgroundAudio } from "../components/Audio";
// import { BackgroundAudio } from "../components/Audio";

export const Home = () => {
  // const navigator = useNavigate()
  useEffect(() => {
    document.body.style.backgroundColor = '#010020';
    // const audio = new Audio(backgroundMusic);
    // audio.loop = true; // Hace que la música se repita
    // audio.volume = 0.5; // Controla el volumen (de 0 a 1)
    // audio.play();
    return () => {
      document.body.style.backgroundColor = ''; // Restaurar el color original
      // audio.pause(); // Pausar la música cuando el componente se desmonte
      // audio.currentTime = 0; // Reiniciar la música si es necesario
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
            <BackgroundAudio/>
          </div>
          {/* <div>
            <BackgroundAudio/>
          </div> */}
        </>
    )
}