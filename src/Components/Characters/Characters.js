import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StopIcon from '@material-ui/icons/Stop';
import './Characters.css'

const Characters = ({characters =[], text}) => {

    if (characters.length === 0) 
        return <p>No se encontro personaje con "{text}"</p>

    return (
        <div className="containerCharacters">
            <div className="characters">
              {
                characters.map((item, index) => (
                    <div key={index} className="colCards">
                            <img className="imgCharacter" src={item.image} alt=""/>
                            <div className="cardBody">
                                <p className="specie">
                                 <StopIcon />
                                 Especie: {item.species}</p>
                                <h2 className="name">{item.name}</h2>
                                <p className="status">Estatus: {item.status}</p>
                                <p className="type">Tipo: {item.type}</p>
                                <p className="gender">Género: {item.gender}</p>
                            </div>
                            <FavoriteBorderIcon />
                    </div>
                ))
             }

            </div>
        </div>
    );
}

export default Characters;