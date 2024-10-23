import './../styles/ButtonHome.css';
import { ButtonHomeProps } from '../types/ButtonHome';

export const ButtonHome: React.FC<ButtonHomeProps> = ({ children, onCreate }) => {
    return (
        <>
          <div className='container-buttonHome'>
            <button className='container-buttonHome-button' onClick={onCreate} type='submit'> 
              <span className='container-buttonHome-text'>{children}</span> 
              </button>
          </div>
        </>
    )
}