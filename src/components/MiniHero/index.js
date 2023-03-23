import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import heroBackground from "../../assets/hero-background.jpg";

function MiniHero(props) {
return (
    <div className="minihero text-center" style={{ backgroundImage: `url(${heroBackground})` }}>
    {props.children}
</div>
);
}

export default MiniHero;