import './../styles/LetterBlood.css';
import { LettersBloodProps } from '../types/LettersBlood.interface';

export const LettersBlood: React.FC<LettersBloodProps> = ({letters}) => {
  return (
      <>
        <h1 className="titleDark">{ letters}</h1>
      </>
  );
}