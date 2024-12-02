import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import faceMonster from '../assets/Subtract.png';
import { Link } from 'react-router-dom';
import './../styles/Pricipal.css';
import { TitleHeader } from '../components/Title';
import backgroundMusic from '../assets/audio/background-music.mp3';
import { usePrincipalConnection } from '../services/principal.router';
import { Modal } from '../components/Modal.component';

export const Principal = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [storiesCategory, setStoryCategory] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { categoriesApi, storiesCategoryApi } = usePrincipalConnection();
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.history.replaceState(null, "", window.location.href);
    const audio = new Audio(backgroundMusic);
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();
    const handleCategory = async() =>{
      const storyCategory: string[] = ["Bogeyman", "Brujas", "Demonios", "Duendes", "Fantasmas", "Hombres lobo", "Kikimora", "Mutantes", "Slenderman", "Vampiros", "Yōkai" ,"Zombies"];
      const data = await categoriesApi();
      if(data) {
        setCategories(data);
      } else {
        setCategories(storyCategory);
      }
    };
    handleCategory();
  }, []);

  const handleOpenModal = async(category:string) => {
    try {
      const data = await storiesCategoryApi(category);
      if (data) {
        setStoryCategory(data.category);
        setIsOpen(true);
      }
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    setStoryCategory([]);
  };
  return(
    <>
      <div className='container-principal'>
        <div className='container-principal-header'>
          <Header/>
        </div>
        <div className='container-principal-title'>
          <TitleHeader/>
        </div>
        <div className='container-principal-text'>
          <img src={faceMonster} alt="face monster" className='faceMonster'/>
        </div>
        <div className='container-principal-textAll'>
          <p className='principal-textAll'> <Link to='/category' className='viewLink'>Ver todo...</Link></p>
        </div>
        <div className='container-principal-story'>
          {categories.map((category, index) =>(
            <div key={index} className='container-stories-cards' onClick={() => handleOpenModal(category)}>
              {category}
            </div>
          ))}
          {isOpen && (
            <Modal>
              {storiesCategory.length > 0 ? (
                <ul>
                  {storiesCategory.map((category, index) => (
                    <li key={index} className='pricipal-titleli'> <h2>{category.title}</h2> </li>
                  ))}
                </ul>
              ):(
                <p>No hay historias disponibles para esta categoría.</p>
              )}
              <button onClick={handleCloseModal} className="modalQuiz-button">Cerrar</button>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};