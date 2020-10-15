import React, {useContext} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext);

    return (  
        <form className="col-12">
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria o ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option value="">-- Selecciona Categoria --</option>
                        {categorias.map(categoria =>(
                            <option 
                                key={categoria.strDrink}
                                value={categoria.strDrink}
                            >{categoria.strDrink}</option>
                        ))}
                        
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar bebidas"
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Formulario;