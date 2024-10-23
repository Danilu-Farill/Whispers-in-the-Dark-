import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Header } from "../components/Header";
import '../styles/Search.css';
import { TitleHeader } from "../components/Title";
import { Link } from "react-router-dom";
import { useSearchConnection } from "../routes/Search.router";
import { IStory } from "../types/Register.interface";

export const Search = () => {
    const [ title, useTitle] = useState('');
    const { searchStory} = useSearchConnection();
    const [stories, setStories] = useState<IStory[]>([]); // Aquí se guardarán las historias
    useEffect(() => {
        window.history.pushState(null, "", window.location.href);
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
            }
          }, []);
        //   const handleSearch = () => {
        //     // Simulación de búsqueda (puedes cambiar esto para obtener los datos reales)
        //     const foundStories = ["Vampires at Night, vampiros de la noche", "The Haunted Forest", "Ghostly Apparitions", "Vampires at Night", "The Haunted Forest", "Ghostly Apparitions", "Vampires at Night", "The Haunted Forest", "Ghostly Apparitions", "Vampires at Night", "The Haunted Forest", "Ghostly Apparitions", "estamos muertos"];
        //     setStories(foundStories); // Aquí actualizas el estado con las historias encontradas
        // };
        // // const handleSearchNavigator = async () => {
        // //     console.log("datos enviados:", title);
        // //     await setStories({title}); // Aquí actualizas el estado con las historias encontradas
        // // };
        const handleSearchNavigator = async () => {
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
                // onClick={handleSearch}
                />
                {/* <input type="button" value="Buscar" id="searchButton" /> */}
            </div>
            <div className="container-stories">
                {stories.map((story, index) => (
                    <div key={index} className="story-card">
                        <h3>{story.title}</h3>
                        {/* <p>{story.description}</p>
                        <img src={story.imageUrl} alt={story.title} className="story-card-image"/>                     */}
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