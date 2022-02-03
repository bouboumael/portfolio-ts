import React from "react";
import Technology from "../technology/Technology";

const ThirdView = () => {
    return (
        <div className={'thirdView p-20 flex flex-col'}>
            <Technology name={'php'} logo={{src:'logos/php.png', alt: 'logo php'}} starNumber={5} />
        </div>
    )
}

export default ThirdView;
