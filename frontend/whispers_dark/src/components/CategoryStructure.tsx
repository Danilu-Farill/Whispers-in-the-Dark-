import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { TitleHeader } from './Title';
import { MenuItem, IFilter, IOrder } from '../types/Menu';
import '../styles/CategoryStructure.css';

// const applyFilterAndOrder = () => {
//     const filteredData = data.filter((item) => {
//         if (selectedFilter === 'title') {
//             return item.title.includes(selectedFilter);
//         } else if (selectedFilter === 'category') {
//             return item.category.includes(selectedFilter);
//         } else {
//             return true;
//         }
//     });

//     const orderedData = filteredData.sort((a, b) => {
//         if (selectedOrder === 'asc') {
//             return a.title.localeCompare(b.title);
//         } else if (selectedOrder === 'desc') {
//             return b.title.localeCompare(a.title);
//         } else {
//             return 0;
//         }
//     });
// }

export const CategoryStructure = () => {
    const navigate = useNavigate();

    // const [data, setData] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [selectedOrder, setSelectOrder] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const menuItems: MenuItem[] = [
    { label: 'Historia Nueva', href: '/story' },
    { label: 'Cerrar Sesión', href: '/' },
    ];
    const filters: IFilter[] = [
        { label: 'titulo', valor: 'title' },
        { label: 'categoria', valor: 'category' },
    ];
    const orders: IOrder[] = [
        { label: 'Ascendente', valor: 'asc' },
        { label: 'Descendente', valor: 'desc' },
    ];
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFilter(e.target.value);
    };

    const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectOrder(e.target.value);
    };

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };
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
                    <TitleHeader/>
                </div >
                <div className='container-categories-iconMenu'>
                    <FontAwesomeIcon icon={faBars} onClick={handleToggleMenu}/>
                    {isOpen && (
                        <ul>
                            {menuItems.map((item, index) => (
                                <li className='categories-menu-list' key={index}>
                                <a className='categories-menu-text' onClick={() => navigate(item.href, { replace: true })}>{item.label}</a>
                                </li>
                            ))}
                            </ul>
                        )}
                </div>
                <div className='container-categories-iconsOrder'>
                    <div className='container-categories-iconsOrder1 iconArrow'>
                            <span className='iconArrowText'> Ordenar </span>
                            <select value={selectedOrder} onChange={handleOrderChange}>
                                <option value="" className='categories-option'>Selecciona</option>
                                {orders.map((order, index) => (
                                    <option key={index} value={order.valor}>
                                    {order.label}
                                    </option>
                                ))}
                            </select>
                    </div>
                    <div className='container-categories-iconsOrder2 iconFilter'>
                            <span className='iconFilterText'> Filtar </span>
                            <select value={selectedFilter} onChange={handleFilterChange}>
                            <option value="" className='categories-option'>Selecciona</option>
                            {filters.map((filt, indice) => (
                                <option key={indice} value={filt.valor}>
                                {filt.label}
                                </option>
                            ))}
                            </select>
                    </div>
                    <div className='container-categories-iconsOrder3 iconSearch'>
                        <Link to='/search' replace><FontAwesomeIcon icon={faSearch} id='iconSearch'/></Link>    
                    </div>
                </div>
            </div>
        </>
    )
}