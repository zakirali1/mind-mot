import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import heroBackground from "../../assets/hero-background.jpg";


function Hero(props) {
return (
    <div className="hero text-center" style={{ backgroundImage: `url(${heroBackground})` }}>
    {props.children}
</div>
);
}

export default Hero;
//INSERT NAME HERE;
