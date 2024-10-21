import './../styles/Form.css';

export const Form = () => {
    return(
        <>
            <form action="register" className='register-form'>
                <label htmlFor="email">CORREO ELECTRÓNICO</label>
                <input type="text" placeholder='Ingresa tu email' name='email' id='email'/> 
                <label htmlFor="password">CONTRASEÑA</label>
                <input type="text" placeholder='Ingresa tu contraseña' name='password' id='password'/> 
                {/* <input type="submit" name="enviar" value="enviar datos"/> */}
                {/* submit recarga lapágina ver que me va mejor */}
            </form>
        </>
    )
}