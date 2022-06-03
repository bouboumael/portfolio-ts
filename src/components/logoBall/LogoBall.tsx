import gsap from "gsap";
import React, {useLayoutEffect, useRef, useState} from "react";
import logo from "../../assets/images/mael-logo-pins.png"


const LogoBall = () => {

    const [size, setSize] = useState<number>();
    let image = new Image()
    image.src = logo;

    const boxVar = {
        from: {
            x: -500,
        },
        to: {
            rotation: 360,
            x: size,
            duration: 2
        },
    }

    const boxRef = useRef(null);
    useLayoutEffect(() => {
        image.onload = () => {
            if (document.body.clientWidth > 768) {
                setSize((document.body.clientWidth - image.width) / 2)
            } else {
                setSize(0)
            }

            gsap.fromTo(boxRef.current,boxVar.from, boxVar.to);
        }
    });

    return <img src={logo} alt={"Mael logo"} className={`mt-60 md:mt-0 mael-logo`} ref={boxRef}/>
}

export default LogoBall;
