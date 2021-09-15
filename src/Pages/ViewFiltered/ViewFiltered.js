import React from 'react';
import Pagination from '../../Components/Pagination/Pagination';
import FilteredCharacterView from '../../Components/FilteredCharacterView/FilteredCharacterView'

const ViewFiltered = ({characterFilter, setCharacterFilter}) => {

    return (
        <div>
            <h2>Personajes</h2>
            <FilteredCharacterView characterFilter= {characterFilter} setCharacterFilter= {setCharacterFilter}/>
            {/* <Pagination 
                prev={info.prev} 
                next={info.next} 
                onPrev={onPrev} 
                onNext={onNext}
            /> */}

        </div>
    );
}

export default ViewFiltered;