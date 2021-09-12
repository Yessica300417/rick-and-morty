import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './Characters.css'

const Characters = ({characters =[]}) => {
    return (
        <div className="containerCharacters">
            {
                characters.map((item, index) => (
                    <div key={index} className="colCards">
                        <div className="card">
                            <img className="imgCharacter" src={item.image} alt=""/>
                            <div className="cardBody">
                                <p>Especie: {item.species}</p>
                                <h4>Nombre: {item.name}</h4>
                                <p>Estatus: {item.status}</p>
                                <p>Tipo: {item.type}</p>
                                <p>Género: {item.gender}</p>
                            </div>
                            <FavoriteBorderIcon />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Characters;