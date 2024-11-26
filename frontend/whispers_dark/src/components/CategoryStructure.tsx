import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { TitleHeader } from './Title';
import '../styles/CategoryStructure.css';
import { Order } from './order';
import { Filter } from './Filter';

export const CategoryStructure = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return(
    <>
      <div className='container-categories'>
        <div className='container-categories-text'>
          <TitleHeader/>
        </div >
        <div className='container-categories-iconMenu'>
          <FontAwesomeIcon icon={faBars} onClick={handleToggleMenu} className='categories-icon'/>
          {isOpen && (
            <div className="menu-dropdown">
              <ul>
                <li> <Link to="/story" replace> <span>Historia Nueva</span> </Link></li>
                <li><Link to="/login">Cerrar Sesión</Link></li>
              </ul>
            </div>
          )}
        </div>
        <div className='container-categories-iconsOrder'>
          <div className='container-categories-iconsOrder1 iconArrow'>
            {/* <Order /> */}
          </div>
          <div className='container-categories-iconsOrder2 iconFilter'>
            <Filter/>
          </div>
          <div className='container-categories-iconsOrder3 iconSearch'>
            <span>Buscar</span>
            <Link to='/search' replace><FontAwesomeIcon icon={faSearch} id='iconSearch'/></Link>
          </div>
        </div>
      </div>
    </>
  );
};