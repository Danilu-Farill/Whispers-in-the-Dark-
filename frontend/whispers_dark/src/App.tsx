import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa 'Routes' en lugar de 'Switch'
import './App.css';
import { Home } from './views/Home';
import { Register } from './views/Register';
import { Login } from './views/Login';
import { Principal } from './views/Principal';
import { Categories } from './views/Categories';
import { Search } from './views/Search';
import { Story } from './views/Story';
import { ViewStories } from './views/ViewStories';
// import { useLettersBlood } from './hooks/useLetterBlood'; //va en la vista que voy a cambiar


const App: React.FC = () => {
  // const lettersBlood = useLettersBlood("hola");
  // console.log("🚀 ~ lettersBlood:", lettersBlood)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/principal' element={<Principal  />}/>
        <Route path='/category' element={<Categories/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path='/view/:title' element={<ViewStories/>}/>
      </Routes>
    </Router>
  );
};

export default App;










// function App() {
//   // const [count, setCount] = useState(0);
//   // const [letters, setLetters] = useState<JSX.Element[]>([]);

//   // useEffect(() => {
//   //   const text = "WHISPERS IN THE DARK";
//   //   const letterElements = text.split("").map((letter, index) => (
//   //     <span key={index} className="letter">{letter}</span>
//   //   ));
//   //   setLetters(letterElements); // Guardamos los spans como elementos JSX
//   // }, []);

//   return (
//     <>
//       <div>
//         <Home/>
//       </div>
//       {/* Aquí renderizas directamente las letras como JSX
//       <h1 className="titleDark">{ letters }</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div> */}
//     </>
//   );
// }

// export default App;


// function App() {
//   const [count, setCount] = useState(0);
//   const [letters, setLetters] = useState<JSX.Element[]>([]);

//   useEffect(() => {
//     const text = "WHISPERS IN THE DARK";
//     const letterElements = text.split("").map((letter, index) => (
//       <span key={index} className="letter">{letter}</span>
//     ));
//     setLetters(letterElements); // Guardamos los spans como elementos JSX
//   }, []);

//   return (
//     <>
//       <div>
//         <Home/>
//         {/* <Header /> */}
//       </div>
//       {/* Aquí renderizas directamente las letras como JSX */}
//       <h1 className="titleDark">{ letters }</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;





/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

*/
