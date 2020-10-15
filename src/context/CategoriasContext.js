import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

// Crear el Context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {

    // crear el state del context
    const [categorias, guardarCategorias] = useState([]);

    // ejecutar el llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            // const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin&c=Ordinary_Drink';
            const categorias = await axios.get(url)
            guardarCategorias(categorias.data.drinks)
        }
        obtenerCategorias();
    }, []);
    return (
        <CategoriasContext.Provider
            value={{
                // Aqui va a estar disponible categoria para todos los componentes
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;