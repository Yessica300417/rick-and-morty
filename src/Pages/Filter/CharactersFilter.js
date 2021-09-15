import React, {useState, useEffect} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilteredCharacterView from '../../Components/FilteredCharacterView/FilteredCharacterView'
import './CharactersFilter.css'
import {Link} from 'react-router-dom'

const CharacterFilter = () => {

    const [characterFilter, setCharacterFilter] = useState([]);

    const getInformation = async () => {
        const data = await fetch('https://rickandmortyapi.com/api/character?species=Human&status=Dead&gender=Male')
        const users = await data.json()
        console.log(users)
        setCharacterFilter()
    }

    useEffect(() => {
        getInformation()
    }, []);

    return(
        <div className="filterOrder">
            <ul>
                <li className="btnSpecie">Especie <ExpandMoreIcon />
                    <ul>
                        <li className="filterRobot">Humano</li>
                    </ul>
                </li>
            </ul>

            <ul>
                <li className="handleInputChange">Estatus <ExpandMoreIcon />
                    <ul>
                        <li>Muerto</li>
                    </ul>
                </li>
            </ul>

            <ul>
                <li>Tipo <ExpandMoreIcon />
                    <ul>
                        <li>-</li>
                    </ul>
                </li>
            </ul>

            <ul>
                <li>Género <ExpandMoreIcon />
                    <ul>
                        <li>Masculino</li>
                    </ul>
                </li>
            </ul>
            <Link to="/viewFilter"
              className="btnSearchFilter">
                Buscar
                <SearchIcon />
                <FilteredCharacterView characterfilter={characterFilter}/>
            </Link>

        </div>       
    );
}

export default CharacterFilter;