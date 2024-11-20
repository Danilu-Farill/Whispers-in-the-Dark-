import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { CategoryStructure } from './../components/CategoryStructure';
import './../styles/Pricipal.css';
import'../styles/Categories.css';
import StoryCard from '../components/StoryCard';
import { useNavigate } from 'react-router-dom';
import { StoryCardProps } from '../types/Menu';
import { usePrincipalConnection } from '../routes/principal.router';

export const Categories = () => {
  const navigate = useNavigate();
  const { pricipalStories} = usePrincipalConnection();
  const [story, setStory] = useState<StoryCardProps[]>([]);
  useEffect(()=> {
    const fetchStories = async() =>{
      const data = await pricipalStories();
      if(data) {
        setStory(data);
      }
    };
    fetchStories();
  }, []);
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
              onClick={() => navigate(`/view/${stories.title}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
