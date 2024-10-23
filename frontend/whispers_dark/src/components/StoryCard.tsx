import React from 'react';
import { StoryCardProps } from '../types/Menu';

const StoryCard: React.FC<StoryCardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className='container-categories-cards' onClick={onClick}>
      <h2>{title}</h2>
      {/* <p>{description}</p> */}
      {/* <img src={imageUrl} alt={title} /> */}
    </div>
  );
};

export default StoryCard;