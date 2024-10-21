import { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownZA, faBars, faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Title } from './Title';
import '../styles/CategoryStructure.css';

export const CategoryStructure = () => {
    useEffect(()=> {
        document.body.style.backgroundColor ='#1A2F4C';
              return() => {
                document.body.style.backgroundColor = "";
              }
            }, []);
    return(
        <>
            <div className='container-categories'>
                <div className='container-categories-text'>
                    <Title/>
                </div >
                <div className='container-categories-iconMenu'>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                <div className='container-categories-iconsOrder'>
                    <div className='container-categories-iconsOrder1 iconArrow'>
                        <span className='iconArrowText'> Ordenar </span><FontAwesomeIcon icon={faArrowDownZA}/> 
                    </div>
                    <div className='container-categories-iconsOrder2 iconFilter'>
                        <span className='iconFilterText'>Filtar</span><FontAwesomeIcon icon={faList}/> 
                    </div>
                    <div className='container-categories-iconsOrder3 iconSearch'>
                        <Link to='/search'><FontAwesomeIcon icon={faSearch} id='iconSearch'/></Link>    
                </div>
                </div>
            </div>
        </>
    )
}