import React from 'react';

const Characters = ({characters =[]}) => {
    return (
        <div className="containerCharacters">
            {
                characters.map((item, index) => (
                    <div key={index} className="col">
                        <div className="card">
                            <img src={item.image} alt=""/>
                            <div className="card-body">
                                <p>Especie: {item.species}</p>
                                <h4>Nombre: {item.name}</h4>
                                <p>Estatus: {item.status}</p>
                                <p>Tipo: {item.type}</p>
                                <p>Género: {item.gender}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Characters;