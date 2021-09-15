import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StopIcon from '@material-ui/icons/Stop';

const FilteredCharacterView = ({characterFilter= []}) => { 

    return(
        <div className="containerFilter">
            <div className="charactersFilter">
                {
                    characterFilter.map((item, index) => (
                        <div key={index} className="cards">
                          <img className="imgFilter" src={item.image} alt=""/>
                            <div className="cardFilter">
                                <p className="species">
                                <StopIcon />
                                Especie: {item.species}
                                </p>
                                <h2 className="nameFilter">{item.name}</h2>
                                <p className="statusFilter">Estatus: {item.status}</p>
                                <p className="typeFilter">Tipo: {item.type}</p>
                                <p className="genderFilter">Género: {item.gender}</p>
                            </div>
                            <FavoriteBorderIcon />
                         </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FilteredCharacterView;