import React from "react";
import '../page/Contact.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

const Contact =()=>{

    return(
        <><div className="positioncont">
        <p><b><i>Contact me via social media</i></b></p>
        </div>
        <div className="position">
        <p className="posp"><a href="https://sr-rs.facebook.com/" target='_blank' alt="facebook" style={{ textDecoration: 'none' }}><FaFacebook size='70px'/></a>Like me on Facebook</p>
        <p className="posp"><a href="https://www.linkedin.com/" target='_blank' style={{ textDecoration: 'none' }}><FaLinkedinIn size='70px'/></a>Connect with me on Linkedin</p>
        <p className="posp"><a href="mailto:srdjanilic10@gmail.com" target='_blank' style={{ textDecoration: 'none' }}><MdEmail size='70px'/></a>Send me an email</p>
        <p className="posp"><a href="https://github.com/srdjan10/" target='_blank' style={{ textDecoration: 'none' }}><BsGithub size='70px'/></a>GitHub - Look my projects</p>
        </div></>
    )

}
export default Contact;