import React from 'react';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import {Link} from "react-router-dom";

import './FilteredOut.css'

const FilteredOut = () => {
    return(
        <button 
            
            className="btnFilter">
            <Link to="/filter"  />
            <MapOutlinedIcon />
            Filtrar
        </button>
        
    );
}

export default FilteredOut;