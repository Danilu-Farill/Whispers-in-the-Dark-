import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../styles/ViewStories.css';
import { useParams, Link } from "react-router-dom";
import { usePrincipalConnection } from "../routes/principal.router";
import { StoryCardProps } from "../types/Menu";

export const ViewStories = () => {
    const { title } = useParams<{ title: string }>();
    const { pricipalStories } = usePrincipalConnection();  // Función para obtener historias
    const [story, setStory] = useState<StoryCardProps | null>(null);  // Estado para la historia seleccionada

    useEffect(() => {
        window.history.pushState(null, '', window.location.href);
        window.history.replaceState(null, '', window.location.href);
        document.body.style.backgroundColor = '#1A1C17';
        const fetchStory = async () => {
            const data = await pricipalStories();  // Obtener todas las historias
            if (data) {
              const foundStory = data.find((s: StoryCardProps) => s.title === title);  // Encontrar la historia por título
              setStory(foundStory || null);  // Establecer la historia encontrada
            }
          };
          fetchStory();

        return() => {
            document.body.style.backgroundColor = "";
        }
    }, [title]);
    if (!story) {
        return <p>Cargando...</p>;  // Mostrar un mensaje de carga
      }
    return(
        <>
        <div className="container-viewStories">
            <div className="container-viewStories-header">
                <Header/>
            </div>
            <div className="icon-close">
                <Link to={'/category'} id="icon-close-text"> <FontAwesomeIcon icon={faXmark} size='3x'/> </Link>
            </div>
            <div className="container-viewStories-screen">
            <div className="story-details">
            <h2 className="story-details-title">{story.title}</h2>
            <p className="story-details-description">{story.description}</p>
            <img src={story.imageUrl} alt={story.title} className="story-details-imagen"/>
      </div>
            </div>
        </div>
        </>
    )
}