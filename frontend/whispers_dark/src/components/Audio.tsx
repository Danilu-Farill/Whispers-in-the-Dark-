// import { useState, useEffect } from "react";
// import backgroundMusic from '../assets/audio/background-music.mp3';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faVolumeMute, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
// import '../styles/Audio.css';

// export const BackgroundAudio = () => {
//   const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
//   const [isMuted, setIsMuted] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     const bgAudio = new Audio(backgroundMusic);
//     bgAudio.loop = true;
//     bgAudio.volume = 0.5;
//     bgAudio.play();
//     // Reproduce el audio cuando el usuario entra en la página
//     const playAudio = () => {
//       if (!isMuted && document.visibilityState === 'visible') {
//         bgAudio.play().catch((error) => {
//           console.error("El navegador bloqueó la reproducción automática", error);
//         });
//       }
//     };
//     // Detecta cambios en la visibilidad de la página
//     document.addEventListener('visibilitychange', playAudio);
//     // Almacena la instancia de audio en el estado
//     setAudio(bgAudio);
//     return () => {
//       bgAudio.pause();
//       bgAudio.currentTime = 0;
//     };
//   }, []);

//   const playAudio = () => {
//     if (audio) {
//       audio.play().catch((error) => {
//         console.error("El navegador bloqueó la reproducción automática", error);
//       });
//       setIsPlaying(true);
//     }
//   };

//   const toggleMute = () => {
//     if (audio) {
//       setIsMuted(!isMuted);
//       audio.muted = !isMuted;
//     }
//   };

//   return (
//     <>
//       <div className="container-home -audio">
//         <div className="audio-controls">
//           <button onClick={playAudio} className="play-button">
//             {isPlaying ?
//               <FontAwesomeIcon icon={faVolumeHigh} size="2x" color="#0541AF" /> :
//               <FontAwesomeIcon icon={faPlay} size="2x" color="#0541AF" />}
//           </button>
//           <button onClick={toggleMute} className="mute-button">
//             {isMuted ?
//               <FontAwesomeIcon icon={faVolumeMute} size="2x" color="#0541AF" /> :
//               <FontAwesomeIcon icon={faVolumeHigh} size="2x" color="#0541AF" />}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };