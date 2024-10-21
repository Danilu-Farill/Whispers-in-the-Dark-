import { useEffect } from 'react';
import { Header } from '../components/Header';
import faceMonster from '../assets/Subtract.png'
import { Link } from 'react-router-dom';
import './../styles/pricipal.css';
import { Title } from '../components/Title';

export const Principal = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#131313';
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);
    return(
        <>
        <div className='container-principal'>
            <div className='container-principal-header'>
                <Header/>
            </div>
            <div>
                <Title/>
            </div>
            <div className='container-principal-text'>
                <img src={faceMonster} alt="face monster" className='faceMonster'/>
            </div>
            <div className='container-principal-textAll'>
                <p className='principal-textAll'> <Link to='/category' className='viewLink'>Ver todo...</Link></p>
            </div>
            <div></div>
        </div>
        </>
    )
}


// import { useState, useEffect } from 'react';

// export const principalPage = () => {
//     const [letters, setLetters] = useState<JSX.Element[]>([]);

//     useEffect(() => {
//     const text = "WHISPERS IN THE DARK";
//     const letterElements = text.split("").map((letter, index) => (
//       <span key={index} className="letter">{letter}</span>
//     ));
//     setLetters(letterElements); // Guardamos los spans como elementos JSX
//   }, []);
//     return(
//         <>
//       <div>
//         <Header/>
//       </div>
//       {/* Aquí renderizas directamente las letras como JSX */}
//       <h1 className="titleDark">{ letters }</h1>
//       {/* <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div> */}
//     </>
//     )
// }