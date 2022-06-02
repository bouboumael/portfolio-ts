import React, {useEffect, useRef, useState} from "react";
import logo from "../../assets/images/mael-logo-pins.png";

const LogoBall = (props: any) => {
    const {width, height, color, speed, delay} = props;
    const [size, setSize] = useState({width: 0, height: 0});
    useEffect(() => {
        const resize = () => {
            setSize({width: document.body.clientWidth, height: document.documentElement.clientHeight});
        }
        resize();
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        }
    },[])
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas?.getContext('2d')
        //Our first draw
        context ? context.fillStyle = 'white' : null;
        context?.fillRect(0, 0, size.width, size.height)
    }, [])

    return (
        <div className="logo-ball">
            <canvas id="canvas" ref={canvasRef} {...props} width={size.width} height={size.height}/>
        </div>
    );
}

export default LogoBall;
