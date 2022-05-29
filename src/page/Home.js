import React from "react";
import './Home.css';
import srdjan from '../picture/srdjanilic.jpg'


const Home =()=>{

    return(
        <div className="homefont">
        <h3>-Hello, I am Srdjan Ilic-</h3>
        <h4>-Junior Frontend Developer-</h4> 
         <section>
        <img className="pictureportfolio" src={srdjan} witdh='300' height='300' alt="Srdjan Ilic"></img>
        </section>
        </div>


    )

}

export default Home;