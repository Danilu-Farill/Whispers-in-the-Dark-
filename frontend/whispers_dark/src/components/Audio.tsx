// import { useState, useEffect } from "react";
// import backgroundMusic from '../assets/audio/background-music.mp3';

// export const BackgroundAudio = () => {
//   const [audio, setAudio] = useState<HTMLAudioElement | null>(null); // Definir el estado como HTMLAudioElement | null
//   const [isMuted, setIsMuted] = useState(false);

//   useEffect(() => {
//     // Crea la instancia de Audio al montar el componente
//     const bgAudio = new Audio(backgroundMusic);
//     bgAudio.loop = true;
//     bgAudio.volume = 0.5;

//     // Intenta reproducir cuando el componente se monta
//     const playAudio = () => {
//       if (!isMuted) {
//         bgAudio.play().catch((error) => {
//           console.error("El navegador bloqueó la reproducción automática", error);
//         });
//       }
//     };

//     // Almacena la instancia de audio en el estado para acceder luego
//     setAudio(bgAudio);

//     // Reproduce el audio
//     playAudio();

//     // Limpiar el audio al desmontar el componente
//     return () => {
//       bgAudio.pause();
//       bgAudio.currentTime = 0;
//     };
//   }, [isMuted]);  // Se vuelve a ejecutar si cambia el mute

//   const toggleMute = () => {
//     if (audio) {
//       setIsMuted(!isMuted);
//       audio.muted = !isMuted;
//     }
//   };

//   return (
//     <>
//       <div className="container-home">
//         <div className="audio-controls">
//           <button onClick={toggleMute} className="mute-button">
//             {isMuted ? "Activar sonido" : "Silenciar"}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };


import { useState, useEffect } from "react";
import backgroundMusic from '../assets/audio/background-music.mp3';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import '../styles/Audio.css';

export const BackgroundAudio = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const bgAudio = new Audio(backgroundMusic);
    bgAudio.loop = true;
    bgAudio.volume = 0.5;

    // Reproduce el audio cuando el usuario entra en la página
    const playAudio = () => {
      if (!isMuted && document.visibilityState === 'visible') {
        bgAudio.play().catch((error) => {
          console.error("El navegador bloqueó la reproducción automática", error);
        });
      }
    };
    // Detecta cambios en la visibilidad de la página
    document.addEventListener('visibilitychange', playAudio);
    // Almacena la instancia de audio en el estado
    setAudio(bgAudio);
    // Limpiar el audio al desmontar el componente
    return () => {
      bgAudio.pause();
      bgAudio.currentTime = 0;
      document.removeEventListener('visibilitychange', playAudio);
    };
  }, [isMuted]);
  const toggleMute = () => {
    if (audio) {
      setIsMuted(!isMuted);
      audio.muted = !isMuted;
    }
  };
  return (
    <>
        <div className="container-home -audio">
        <div className="audio-controls">
            <button onClick={toggleMute} className="mute-button">
            {/* {isMuted ? "Activar sonido" : "Silenciar"} */}
            {isMuted ?
            <FontAwesomeIcon icon={faVolumeMute} size="2x" color="#0541AF" />:
            <FontAwesomeIcon icon={faVolumeHigh} size="2x" color="#0541AF" />}
            </button>
        </div>
        </div>
    </>
  );
};