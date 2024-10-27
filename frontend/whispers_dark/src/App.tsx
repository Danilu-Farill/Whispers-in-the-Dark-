import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa 'Routes' en lugar de 'Switch'
// import './App.css';
>>>>>>> dataBase
import { Home } from './views/Home';
import { Register } from './views/Register';
import { Login } from './views/Login';
import { Principal } from './views/Principal';
import { Categories } from './views/Categories';
import { Search } from './views/Search';
import { Story } from './views/Story';
import { ViewStories } from './views/ViewStories';

const App: React.FC = () => {
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
