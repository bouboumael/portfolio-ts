import React from "react";
import LogoBall from "../logoBall/LogoBall";
import DoubleArrow from "../doubleArrow/DoubleArrow";

function FirstView() {

    return (
        <div className={"flex flex-col justify-around items-center text-center firstview"}>
            <LogoBall />
            <DoubleArrow />
        </div>
    );
}

export default FirstView;
