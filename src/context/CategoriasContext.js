import React, { createContext, useState } from 'react';

// Crear el Context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {

    // crear el state del context
    const [hola, guardarHola] = useState('hola desde state');

    return (
        <CategoriasContext.Provider
            value={{
                // Aqui va a estar disponible hola para todos los componentes
                hola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;