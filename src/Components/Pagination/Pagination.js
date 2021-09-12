import React from 'react';
// import {Button} from '@material-ui/core'
import KeyboardArrowLeftOutlinedIcon from '@material-ui/icons/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import './Pagination.css'

const Pagination = ({prev, next, onPrev, onNext}) => {

    const handlePrev = () => {
        onPrev();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav className="btns">
            <ul className="btnsPrevNext">
                { prev ? (                
                    <button className="btnPrev" onClick={handlePrev}>
                        <KeyboardArrowLeftOutlinedIcon />
                        Atrás
                    </button>
                ) : null }
                
                { next ? (
                    <button className="btnNext" onClick={handleNext}>
                        Siguiente
                        <KeyboardArrowRightOutlinedIcon />
                    </button>
                ) : null }

            </ul>
        </nav>

    );
}

export default Pagination;