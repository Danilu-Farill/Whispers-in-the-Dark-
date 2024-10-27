import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { CategoryStructure } from './../components/CategoryStructure';
import './../styles/Pricipal.css';
import'../styles/Categories.css';
// import { useSearchConnection } from '../routes/Search.router';
import StoryCard from '../components/StoryCard';
import { useNavigate } from 'react-router-dom';
import { StoryCardProps } from '../types/Menu';
import { usePrincipalConnection } from '../routes/principal.router';

// export const Categories = () => {
//     const text = "Whispers in the Dark";
//     const [letters, setLetters] = useState<JSX.Element[]>([]);
//     useEffect(()=> {
//         document.body.style.backgroundColor ='#1A2F4C';
//         const letterElements = text.split("").map((letter, index) => {
//             const isSpace = letter === " ";
//             return(
//                 <span key={index} className="letterBloodCategory">
//                   {isSpace ? '\u00A0' : letter} 
//                 </span>
//             )
//           });
//               setLetters(letterElements);
//               return() => {
//                 document.body.style.backgroundColor = "";
//               }
//             }, []);
//     return(
//         <>
//             <div className='container-categories'>
//                 <Header/>
//             </div>    
//             <div className='container-categories-text'>
//                 <p className='principal-text titleBloodCategory'>{letters}</p>
//                 {/* <img src={faceMonster} alt="face monster" className='faceMonster'/> */}
//             </div >
//             <div className='container-categories-iconMenu'>
//                 <FontAwesomeIcon icon={faBars}/>
//             </div>
//             <div className='container-categories-iconsOrder'>
//                 <div className='container-categories-iconsOrder1 iconArrow'>
//                     <span className='iconArrowText'> Ordenar </span><FontAwesomeIcon icon={faArrowDownZA}/> 
//                 </div>
//                 <div className='container-categories-iconsOrder2 iconFilter'>
//                     <span className='iconFilterText'>Filtar</span><FontAwesomeIcon icon={faList}/> 
//                 </div>
//                 <div className='container-categories-iconsOrder3 iconSearch'>
//                     <FontAwesomeIcon icon={faSearch}/>
//                 </div>
//             </div>
//         </> 
//     )
// }

export const Categories = () => {
  const navigate = useNavigate();
  const { pricipalStories} = usePrincipalConnection();
  const [story, setStory] = useState<StoryCardProps[]>([]);
  useEffect(()=> {
    const fetchStories = async() =>{
        const data = await pricipalStories();
        console.log("🚀 ~ fetchStories ~ data:", data)
        if(data) {
          setStory(data);
        }
      };
      fetchStories();
  }, [])
    return(
        <>
          <div className='container-categories'>         
            <div className='container-categories-header'>
              <Header/>
            </div>    
            <div className='container-categories-structure'>
              <CategoryStructure/>
            </div>
            <div className='container-categories-viewAll'>
              {story.map((stories, index) =>(
                <StoryCard
                key={index}
                title={stories.title}
                // description={stories.description}//AGARRAN CUANDO DESCOMENTO DE STORYCARD
                // imageUrl={stories.imageUrl}
                onClick={() => navigate(`/view/${stories.title}`)}
              />
                ))}
            </div>
          </div>
        </> 
    )
}
    
