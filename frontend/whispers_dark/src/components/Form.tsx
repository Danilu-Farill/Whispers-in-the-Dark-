import { IRegisterProps } from '../types/Register.interface';
import './../styles/Form.css';

export const Form = ({ email, password, setEmail, setPassword}: IRegisterProps) => {
    return(
        <>
            <form action="register" className='register-form'>
                <label htmlFor="email">CORREO ELECTRÓNICO</label>
                <input type="text" placeholder='Ingresa tu email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/> 
                <label htmlFor="password">CONTRASEÑA</label>
                <input type="password" placeholder='Ingresa tu contraseña' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/> 
            </form>
        </>
    )
}