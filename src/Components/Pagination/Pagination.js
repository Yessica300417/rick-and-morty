import React from 'react';

const Pagination = ({prev, next, onPrev, onNext}) => {

    const handlePrev = () => {
        onPrev();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav>
            <ul>
                { prev ? (                
                <li>
                    <button onClick={handlePrev}>Atrás</button>
                </li>
                ) : null }

                { next ? (
                <li>
                    <button onClick={handleNext}>Siguiente</button>
                </li>
                ) : null }

            </ul>
        </nav>

    );
}

export default Pagination;