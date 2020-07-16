import React from 'react';
import "./Home.css";
import banner from "./img/banner.jpg";

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src={banner}
            alt=""
            />
        </div>
    )
}

export default Home
