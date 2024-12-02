import React from 'react';
import {  StoryCardPropsSearch } from '../types/Menu';
import '../styles/Search.css';

const StoryCard: React.FC<StoryCardPropsSearch> = ({ title, onClick }) => {
  return (
    <div className='container-cards-search' onClick={onClick}>
      <h2>{title}</h2>
    </div>
  );
};

export default StoryCard;