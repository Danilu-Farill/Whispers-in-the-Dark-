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

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<div className='body-home'><Home/></div>}/>
        <Route path='/register' element={<div className='body-register'><Register/> </div>}/>
        <Route path='/login' element={<div className='body-register'><Login/> </div>}/>
        <Route path='/principal' element={<Principal/>}/>
        <Route path='/category' element={<div className='body-register'><Categories/> </div>}/>
        <Route path='/search' element={<div className='body-register'><Search/> </div>}/>
        <Route path='/story' element={<div className='body-register'><Story/> </div>}/>
        <Route path='/view/:title' element={<div className='body-story'><ViewStories/> </div>}/>
      </Routes>
    </Router>
  );
};

export default App;
