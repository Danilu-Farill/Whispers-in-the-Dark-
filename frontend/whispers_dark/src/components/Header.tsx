import image from './../assets/blood.png';
import './../styles/Header.css';

export const Header = () =>{
  return(
    <>
      <header className="headerImage">
        <img src={image} alt="sangre-escurriendo" className='bloodHeader'/>
      </header>
    </>
  );
};

