import React from "react";
import '../page/Projects.css';
import market from '../picture/Online_market.jpg'
/* import happy from '../picture/happyShop.png' */

const Projects =()=>{

    return(
        <div className="projects">
            <div>
                    <img className="card" src={market} alt="..."/>
                <div>
                    <p>Online market</p>
                </div>
            </div>
            {/* <div>
                    <img className="card" src={happy} alt="..."/>
                <div>
                    <p>Happy Shop </p>
                </div>
            </div> */}
        </div>
    )

}
export default Projects;