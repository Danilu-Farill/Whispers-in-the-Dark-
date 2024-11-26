import React from 'react';
import {  StoryCardPropsSearch } from '../types/Menu';

const StoryCard: React.FC<StoryCardPropsSearch> = ({ title, onClick }) => {
  return (
    <div className='container-categories-cards' onClick={onClick}>
      <h2>{title}</h2>
    </div>
  );
};

export default StoryCard;