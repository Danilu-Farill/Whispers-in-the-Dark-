// En tu componente React
import axios from 'axios';

// Genera una imagen para la historia
 export const generarImagen = async () => {
  const respuesta = await axios.post('/api/generar-imagen', {
    titulo: 'La casa embrujada',
    descripcion: 'Una casa abandonada en el bosque',
  });

  const imagenUrl = respuesta.data.imagenUrl;
  // Muestra la imagen en tu componente
  return <img src={imagenUrl} alt="La casa embrujada" />;
};