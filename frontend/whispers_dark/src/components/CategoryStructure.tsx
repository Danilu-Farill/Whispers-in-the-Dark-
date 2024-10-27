import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { TitleHeader } from './Title';
import { MenuItem, IFilter, IOrder } from '../types/Menu';
import '../styles/CategoryStructure.css';

export const CategoryStructure = () => {
    const navigate = useNavigate();
<<<<<<< HEAD

=======
    // const [data, setData] = useState([]);
>>>>>>> dataBase
    const [selectedFilter, setSelectedFilter] = useState('');
    const [selectedOrder, setSelectOrder] = useState('');//crea un estado en React llamado selectedOrder y una función para actualizarlo llamada setSelectOrder
    //El valor inicial de selectedOrder es un string vacío ('')
    const [isOpen, setIsOpen] = useState(false);
    const menuItems: MenuItem[] = [
    { label: 'Historia Nueva', href: '/story' },
    { label: 'Cerrar Sesión', href: '/' },
    ];
    const filters: IFilter[] = [
        { label: 'titulo', valor: 'title' },
        { label: 'categoria', valor: 'category' },
        { label: 'Zombies', valor: 'zombie' },
        { label: 'Vampiros', valor: 'vampire' },
        { label: 'Hombres lobo', valor: 'wolfMan' },
    ];
    const orders: IOrder[] = [
        { label: 'Ascendente', value: 'asc' },
        { label: 'Descendente', value: 'desc' },
    ];
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFilter(e.target.value);
    };
<<<<<<< HEAD
    const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
=======
    //Se llama cuando el usuario selecciona un nuevo valor en el menú desplegable
    const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {//El parámetro e es un objeto que contiene información sobre el evento que ocurrió
        //React.ChangeEvent<HTMLSelectElement> es un tipo que indica que el evento es un cambio en un elemento select
>>>>>>> dataBase
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
                            <select value={selectedOrder} onChange={handleOrderChange}>{/*El atributo value se establece en el valor actual de selectedOrder */}
                                {/*Este elemento option es una opción dentro del menú desplegable
                                El atributo value es el valor que se enviará cuando se seleccione esta opción.
                                la función map para transformar el arreglo orders en un nuevo arreglo de elementos option.
                                orders es un arreglo de objetos con propiedades label y value.
                                index es el índice actual en el arreglo
                                El atributo key es un identificador único para cada opción. En este caso, se utiliza el índice index. En React, cuando se renderiza un arreglo de elementos, es importante proporcionar un identificador único para cada elemento
                                Cómo cambiar el color de la opción seleccionada?
                                Puedes agregar una clase CSS adicional a la opción seleccionada utilizando el atributo className.
                                Por ejemplo: <option className={selectedOrder === order.value ? 'selected' : ''} value={order.value}> {order.label} </option>
                                Luego, define la clase CSS .selected para cambiar el color.
                                */}
                                <option value="" className='categories-option'>Selecciona</option>
                                {orders.map((order, index) => (
                                    <option key={index} value={order.value}>
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