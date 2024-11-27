import { useNavigate } from "react-router-dom";
import { IUser } from "../types/Register.interface";

export const useRegisterConnection = () => {
  const navigate = useNavigate();
  const registerUser = async({email, password}: IUser) => {
    try {
      const response = await fetch(`http://whispers-in-the-dark.onrender.com/home/users/create`, {
        method: "POST",
        // mode: 'cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      });
      if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      navigate("/login");
      // localStorage.setItem("username", data.email);
      return data;
    }
    catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Error inesperado";
      throw new Error(errorMessage);
    }
  };
  return { registerUser };
};















/*

Aquí tienes una versión mejorada con mejores prácticas:
typescriptCopyimport { useNavigate } from "react-router-dom";
import { IUser } from "../types/Register.interface";
import { useState } from "react";

interface RegisterHook {
  registerUser: (userData: IUser) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export const useRegisterConnection = (): RegisterHook => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registerUser = async ({ email, password }: IUser): Promise<void> => {
    // Resetear estado de error antes de nueva solicitud
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/home/users/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Opcional: agregar headers de CORS si es necesario
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ email, password }),
      });

      // Manejo de errores de respuesta
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el registro");
      }

      const data = await response.json();
      // Almacenar información del usuario de manera segura
      localStorage.setItem("user", JSON.stringify({
        email: data.email,
        token: data.token // Asumiendo que el backend devuelve un token
      }));

      // Redirección después del registro exitoso
      navigate("/login");
    } catch (error) {
      // Manejo de errores sin usar console.log
      const errorMessage = error instanceof Error
        ? error.message
        : "Error inesperado durante el registro";

      setError(errorMessage);

      // Opcional: enviar error a un servicio de monitoreo
      // logErrorToMonitoringService(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { registerUser, isLoading, error };
};
Mejoras y mejores prácticas:

Gestión de Estado:

Añadí isLoading y error para manejar estados de la solicitud
Uso de useState para gestionar estos estados
El hook devuelve estos estados para que el componente pueda manejarlos


Variables de Entorno:

Uso de import.meta.env.VITE_API_BASE_URL para la URL base (asumiendo Vite)
Permite configurar fácilmente diferentes URLs para desarrollo/producción


Manejo de Errores:

Método mejorado de captura y propagación de errores
No usa console.log
Permite al componente gestionar los errores


Almacenamiento de Token:

Guarda email y token en localStorage de manera estructurada
Preparado para manejar autenticación con token


CORS:

Añadí header opcional para CORS
Los navegadores modernos manejan CORS por defecto, pero puede ser necesario configurarlo


Tipado:

Interfaz RegisterHook para definir claramente el tipo de retorno
Mejora la legibilidad y la seguridad del tipado


Código Limpio:

Separación clara de responsabilidades
Métodos pequeños y enfocados
Uso de finally para resetear estado de carga



*/