import React from 'react';
import './doubleArrow.scss'

const DoubleArrow = () => {
    return (
        <div className={'arrowBox text-center mb-3'}>
            <a href={"#parcours"}>
                {' '}
                <i
                    className="fas fa-angle-double-down arrow"
                    id={'arrowIcon'}
                />{' '}
            </a>
        </div>
    )
}

export default DoubleArrow;
