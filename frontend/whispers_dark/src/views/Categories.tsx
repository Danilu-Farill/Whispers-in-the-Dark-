import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
// import { CategoryStructure } from './../components/CategoryStructure';
import './../styles/Pricipal.css';
import'../styles/Categories.css';
import '../styles/CategoryStructure.css';
import StoryCard from '../components/StoryCard';
import { useNavigate } from 'react-router-dom';
import { StoryCardProps } from '../types/Menu';
import { usePrincipalConnection } from '../routes/principal.router';
import { Order } from '../components/order';
import { Filter } from '../components/Filter';
import { TitleHeader } from '../components/Title';

export const Categories = () => {
  const navigate = useNavigate();
  const { pricipalStories} = usePrincipalConnection();
  const [story, setStory] = useState<StoryCardProps[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(()=> {
    const fetchStories = async() =>{
      //ejemplo:
      const stor: StoryCardProps[] = [ { title: "cabra" }, { title: "perro" }, { title: "gato" }, { title: "ave" }, { title: "boa" }, { title: "raton" }, { title: "flor" }, { title: "rosa" }, { title: "violeta" },]
      const data = await pricipalStories();
      if(data) {
        setStory([...stor, ...data]);
      } else{
        setStory(stor);
      }
    };
    fetchStories();
  }, []);

  const sortStories = (order: string) =>{
    let sortedStories = [...story];
    if(order === "asc"){
      sortedStories.sort((a, b) => a.title.localeCompare(b.title));
    }else if(order === "desc"){
      sortedStories.sort((a, b) => b.title.localeCompare(a.title));
    }
    setStory(sortedStories);
  };
  // useEffect(()=> {
  //   const fetchStories = async() =>{
  //     const data = await pricipalStories();
  //     if(data) {
  //       setStory(data);
  //     }
  //   };
  //   fetchStories();
  // }, []);
  return(
    <>
      <div className='container-categories'>
        <div className='container-categories-header'>
          <Header/>
        </div>
        <div className='container-categories-structure'>
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
                <Order
                  selectedOrder={selectedOrder}
                  setSelectedOrder={(order) =>{
                    sortStories(order);
                    setSelectedOrder(order);
                  }}
                />              </div>
              <div className='container-categories-iconsOrder2 iconFilter'>
                <Filter/>
              </div>
              <div className='container-categories-iconsOrder3 iconSearch'>
                <span>Buscar</span>
                <Link to='/search' replace><FontAwesomeIcon icon={faSearch} id='iconSearch'/></Link>
              </div>
            </div>
          </div>
        </div>
        <div className='container-categories-viewAll'>
          {story.map((stories, index) =>(
            <StoryCard
              key={index}
              title={stories.title}
              onClick={() => navigate(`/view/${stories.title}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
