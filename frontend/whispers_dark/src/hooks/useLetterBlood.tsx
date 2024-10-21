// import { useEffect } from "react";
// // import { LettersBloodProps } from "../types/LettersBlood.interface";
// import { LettersBlood } from "../components/LettersBlood";

// export const useLettersBlood: React.FC = () => {
//   const text = "Whispers in the Dark";
//   useEffect(() => {
//     const letterElements = text.split("").map((letter, index) => (
//     <span key={index} className="letter">{letter}</span>
//   ));
//   }, [])
//   return (
//       <>
//         <h1 className="titleDark"> <LettersBlood letters={text} /> </h1>
//       </>
//   );
// }



// /*
// export const LettersBlood = () => {
//     const [letters, setLetters] = useState<JSX.Element[]>([]);
//     useEffect(() => {
//         const text = "WHISPERS IN THE DARK";
//         const letterElements = text.split("").map((letter, index) => (
//           <span key={index} className="letter">{letter}</span>
//         ));
//         setLetters(letterElements); // Guardamos los spans como elementos JSX
//       }, []);
    
//       return (
//         <>
//           {/* Aquí renderizas directamente las letras como JSX *}
//           <h1 className="titleDark">{ letters }</h1>
//         </>
//       );
//     }
// */