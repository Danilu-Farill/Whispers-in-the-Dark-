import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Header } from "../components/Header";
import '../styles/Search.css';
import { TitleHeader } from "../components/Title";
import { Link, useNavigate } from "react-router-dom";
import { useSearchConnection } from "../routes/Search.router";
import { IStory } from "../types/Register.interface";
import StoryCard from "../components/StoryCard";

export const Search = () => {
  const navigate = useNavigate();
  const [ title, useTitle] = useState('');
  const { searchStory} = useSearchConnection();
  const [stories, setStories] = useState<IStory[]>([]); // Aquí se guardarán las historias
  useEffect(() => {
    window.history.pushState(   null, "", window.location.href);
    window.history.replaceState(null, "", window.location.href);
    document.body.style.backgroundColor ="#1A2F4C";
    // const handleSearch = () => {
    //     // Simulación de búsqueda (puedes cambiar esto para obtener los datos reales)
    //     const searchResults = ["Vampires at Night, vampiros de la noche", "The Haunted Forest", "Ghostly Apparitions", "Vampires at Night", "The Haunted Forest", "Ghostly Apparitions", "Vampires at Night", "The Haunted Forest", "Ghostly Apparitions", "Vampires at Night", "The Haunted Forest", "Ghostly Apparitions", "estamos muertos"];
    //     setStories(searchResults); // Aquí actualizas el estado con las historias encontradas
    // };
    // handleSearch(); // Llama a la función al cargar la página
    return() => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  //   const handleSearch = () => {
  //     // Simulación de búsqueda (puedes cambiar esto para obtener los datos reales)
  //     const foundStories = ["Vampires at Night, vampiros de la noche", "The Haunted Forest", "Ghostly Apparitions", "Vampires at Night", "The Haunted Forest", "Ghostly Apparitions", "Vampires at Night", "The Haunted Forest", "Ghostly Apparitions", "Vampires at Night", "The Haunted Forest", "Ghostly Apparitions", "estamos muertos"];
  //     setStories(foundStories); // Aquí actualizas el estado con las historias encontradas
  // };
  const handleSearchNavigator = async() => {
    const foundStories = await searchStory(title); // Buscar historias basadas en el título
    setStories(foundStories); // Actualizar el estado con las historias encontradas
  };
  return(
    <>
      <div className="container-Search-principal">
        <div>
          <Header/>
        </div>
        <div>
          <TitleHeader/>
        </div>
        <div className="container-search">
          <input type="text" name="search" id="search" onChange={(e) => useTitle(e.target.value)} placeholder="Buscar por título" />
          <input type="button" value="Buscar" id="searchButton"
            title={title}
            onClick={handleSearchNavigator}
          />
        </div>
        <div className="container-stories">
          {stories.map((story, index) =>(
            <div className="story-card">
              <StoryCard
                key={index}
                title={story.title}
                onClick={() => navigate(`/view/${story.title}`)}
              />
            </div>
          ))}
        </div>
        <div className="container-search-iconArrowLeft">
          <Link to='/category'> <FontAwesomeIcon icon={faArrowLeft} className="iconArrowLeft"/> </Link>
        </div>
      </div>
    </>
  );
};