import './../styles/ButtonHome.css';
import { ButtonHomeProps } from '../types/ButtonHome';

export const ButtonHome: React.FC<ButtonHomeProps> = ({ children, onCreate }) => {
  return (
    <>
      <div className='container-buttonHome'>
        <button className='buttonHome-button' onClick={onCreate} type='submit'>
          <span className='buttonHome-text'>{children}</span>
        </button>
      </div>
    </>
  );
};