import './../styles/ButtonHome.css';
import { ButtonHomeProps } from '../types/ButtonHome';

export const ButtonHome: React.FC<ButtonHomeProps> = ({ children }) => {
    return (
        <>
          <div className='container-buttonHome'>
            <button className='container-buttonHome-button'> 
              <span className='container-buttonHome-text'>{children}</span> 
              </button>
          </div>
        </>
    )
}