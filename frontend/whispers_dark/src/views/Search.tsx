import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Header } from "../components/Header";
import '../styles/Search.css';
import { Title } from "../components/Title";
import { Link } from "react-router-dom";

export const Search = () => {
    const [stories, setStories] = useState<string[]>([]); // Aquí se guardarán las historias
    useEffect(() => {
        document.body.style.backgroundColor ="#1A2F4C";
            return() => {
                document.body.style.backgroundColor = "";
            }
          }, []);
          const handleSearch = () => {
            // Simulación de búsqueda (puedes cambiar esto para obtener los datos reales)
            const searchResults = ["Vampires at Night, vampiros de la noche", "The Haunted Forest", "Ghostly Apparitions", "Vampires at Night", "The Haunted Forest", "Ghostly Apparitions", "Vampires at Night", "The Haunted Forest", "Ghostly Apparitions", "Vampires at Night", "The Haunted Forest", "Ghostly Apparitions", "estamos muertos"];
            setStories(searchResults); // Aquí actualizas el estado con las historias encontradas
        };
    return(
        <>
        <div className="container-Search-principal">
            <div>
                <Header/>
            </div>
            <div>
                <Title/>
            </div>
            <div className="container-search">
                <input type="text" name="search" id="search" />
                <input type="button" value="Buscar" id="searchButton" onClick={handleSearch}/>
            </div>
            <div className="container-stories">
                {stories.map((story, index) => (
                    <div key={index} className="story-card">
                        {story}
                    </div>
                ))}
            </div>
            <div className="container-search-iconArrowLeft">
                <Link to='/category'> <FontAwesomeIcon icon={faArrowLeft} className="iconArrowLeft"/> </Link>
            </div>
        </div>
        </>
    )
}