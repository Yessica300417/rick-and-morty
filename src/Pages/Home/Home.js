import React, { useEffect,useState } from 'react';
import Characters from '../../Components/Characters/Characters'
import Pagination from '../../Components/Pagination/Pagination'
import FilteredOut from '../../Components/FilteredOut/FilteredOut'
import Search from '../../Components/Search/Search'
import './Home.css'

const Home = () => {

    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});
    const [text, setText] = useState('');

    const initialUrl= "https://rickandmortyapi.com/api/character"

    const fetchCharacters = (url) => {        
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results);
                setInfo(data.info);
            })
            .catch(error => console.log(error))
    };

    const onPrev = () => {
        fetchCharacters(info.prev);
    }

    const onNext = () => {
        fetchCharacters(info.next);
    }

    useEffect(() => {
        fetchCharacters(initialUrl);
    }, [])

    const leakedCharacters = characters.filter(character => character.name.
        toLowerCase().includes(text.toLocaleLowerCase()))

    return (
    <div className="container">
        <Search text={text} setText={setText}/>
        <FilteredOut />
        <h2 className="tittle">Personajes</h2>
        <Pagination 
            prev={info.prev} 
            next={info.next} 
            onPrev={onPrev} 
            onNext={onNext}
        />
        <Characters text={text} characters={leakedCharacters} />
    </div>
    );
}

export default Home;