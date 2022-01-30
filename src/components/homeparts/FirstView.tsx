import React from "react";
import logo from "../../assets/images/mael-logo-pins.png";

function FirstView() {
    return (
        <div className={"p-10 flex flex-col justify-center items-center text-center"}>
            <img className={'mt-5'} src={logo} alt="logo en forme de pins de mael chariault"/>
            <h1>Maël Chariault</h1>
            <h2>Développeur web Full Satck</h2>
        </div>
    );
}

export default FirstView;
