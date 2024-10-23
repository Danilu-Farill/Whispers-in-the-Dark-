import React from 'react';
import { StoryCardProps } from '../types/Menu';

const StoryCard: React.FC<StoryCardProps> = ({ title, onClick }) => {

  return (
    <div className='container-categories-cards' onClick={onClick}>
      <h2>{title}</h2>
    </div>
  );
};

export default StoryCard;