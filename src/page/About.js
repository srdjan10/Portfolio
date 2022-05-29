import React from "react";
import './About.css'


const About =()=>{

    return(
      <><div className="aboutcss">
            <h2>About me</h2>
            <p>An engineer with experience in business organization wants to take the next step in his career.
                Curious and brave to get acquainted with a wide range of unknown web programming processes,
                to learn something new, more modern, and in turn solving problems in cooperation with the team to gain their trust.
                I learn fast, a team player, the desire to progress is great in every sense.</p>
        </div>
        <div className="skills">
        <h2>My skills</h2>
           <ul>
               <li>Working with technologies HTML, CSS, JavaScript</li>
               <li>Framework (React.js)</li>
               <li>Work on the web application (last 3 months -Online market)</li>
               <li>Portfolio (web application)</li>
               <li>SQL (VFP 9.0), MySQL</li>
               <li>VCS: Git</li>
               <li>Jira</li>
               <li>Scram</li>
               <li>Firebase (Backend service)</li>
           </ul>
        </div>
        <div className="spp">
        <h2>Work experience</h2>
        <ul>
            <li>Computer scientist - 2016-present "Institute of Public Health Cacak"<br/>
                    <ul>
                    <li>Work on the website of the Institute for setting up and redesigning pages (HTML, PHP myAdmin).</li>
                    <li>Work on Cpanel.</li>
                    <li>Creation of software for services and centers (software for vehicle records, 
                        software for records of equipment of the Institute of Public Health, 
                        software for keeping records of infectious diseases at the level of Moravian district, 
                        software for calculating the lower and upper limits of the test tube).</li>
                    <li>Work with existing databases created by the Institute of Public Health of Serbia "Dr. Milan Jovanovic Batut" (MS Access)</li>
                    <li>Creating statistical reports from databases (taking data and formatting them according to requests with the help of queries)</li>
                    <li>Part of the team participating in the defense of the laboratory accreditation certificate with the Accreditation Body of Serbia (ATS) - Data management procedure and management</li>
                    <li>Participated in the implementation of the Public Health Service for the Moravian district </li>
                    </ul>
                    </li>
            </ul>
            <ul>
                <li>Software developer - 2014.-2016. "Perfect Software" Cacak<br/>
                    <ul>
                    <li>Working with Microsoft SQL databases.</li>
                    <li>Design, construction, design, testing and maintenance of software for existing and new users.</li>
                    <li>Consulting and solutions in information systems as well as work with Microsoft Visual FoxPro 9.0.</li>
                    <li>Implementation of ideas in software for hotels, car dealerships, markets, shops</li>
                    </ul>
                    </li>
            </ul>
            <ul>
                <li>Computer scientist: 2010.-2013. Health Center "Dr Dragisa Misovic" Cacak<br/>
                    <ul>
                    <li>Maintenance of existing software.</li>
                    <li>Hardware maintenance.</li>
                    <li>Maintenance of a computer network within the entire Health Center in Cacak.</li>
                    <li>Participated in the implementation of the HIS (Health Information System).</li>
                    </ul>
                    </li>
            </ul>

           
        </div>
        <div>
        </div>        
        </> 

    )

}
export default About;