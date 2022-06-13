import React from 'react';
import {ButtonProps} from "../../types/portfolioTypes";
import './button.scss';

const Button = ({label, href}: ButtonProps) => {
    const action = () => {
        if (href) {
            window.location.href = href;
        }
    }
    return (
        <div className={'button'}>
            <button
                className={"text-white font-bold py-2 px-4 rounded btn-form"}
                onClick={action}
            >
                {label}
            </button>
        </div>
    );
}

export default Button;
