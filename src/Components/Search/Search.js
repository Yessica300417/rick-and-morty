import React from 'react';
import './Search.css'

const Search = ({text, setText}) => {

    const handleInputChange = ({target}) => {
        setText(target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(text)
    };

    return(
        <section className="searchCharacter">
            <form className="formSearch" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="buscar" 
                    placeholder="Buscar personaje"
                    value={text} onChange={handleInputChange}/>
                {/* <button type="submit">Buscar</button> */}
            </form>
        </section>
    );
}

export default Search;