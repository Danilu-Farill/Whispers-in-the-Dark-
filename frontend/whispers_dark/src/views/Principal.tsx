import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import faceMonster from '../assets/Subtract.png'
import { Link } from 'react-router-dom';
<<<<<<< HEAD
// import './../styles/pricipal.css';
=======
import './../styles/Pricipal.css';
>>>>>>> dataBase
import { TitleHeader } from '../components/Title';
import backgroundMusic from '../assets/audio/background-music.mp3';

export const Principal = () => {
    const [story, setStory] = useState<string[]>([]);
    useEffect(() => {
        window.history.pushState(null, "", window.location.href);
        window.history.replaceState(null, "", window.location.href);
        document.body.style.backgroundColor = '#131313';
        const audio = new Audio(backgroundMusic);
        audio.loop = true; 
        audio.volume = 0.5;
        audio.play();
        const handleStory = () =>{
            const storyResult: string[] = ["Bogeyman", "Brujas", "Demonios", "Duendes", "Fantasmas", "Hombres lobo", "Kikimora", "Mutantes", "Slenderman", "Vampiros", "Yōkai" ,"Zombies"];
            setStory(storyResult)
        };
        handleStory();
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);
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
                <img src={faceMonster} alt="face monster" className='faceMonster'/>{/* ARREGLAR LA IMAGEN PARA TAMAÑO TABLET(768) Y LAPTOP(1024)*/}
            </div>
            <div className='container-principal-textAll'>
                <p className='principal-textAll'> <Link to='/category' className='viewLink'>Ver todo...</Link></p>
            </div>
            <div className='container-principal-story'>
                {story.map((stories, index) =>(
                    <div key={index} className='container-stories-cards'>
                        {stories}
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}