import React from 'react';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import {Link} from 'react-router-dom';

import './FilteredOut.css'

const FilteredOut = () => {
    return(
            <Link to="/filter"
                className="btnFilter">
                <MapOutlinedIcon />
                 Filtrar
            </Link>        
    );
}

export default FilteredOut;