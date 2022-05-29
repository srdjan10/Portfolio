import React from "react"
import '../component/Footer.css'
import downloadFileName from 'C:/Users/Srdjan/portfolio/src/cv/Srdjan_Ilic_CV.pdf'
import downloadFileNameENG from 'C:/Users/Srdjan/portfolio/src/cv/Srdjan_Ilic_CV_ENG.pdf'

const Footer =()=>{

const currentYear = new Date().getFullYear()

return(
        <footer className="foot">
        <a href="mailto:srdjanilic10@gmail.com" target="_blank">
          Need any help, you contact me!
        </a>
        <span> / </span>
        <a
          href="https://github.com/srdjan10/" target="_blank"
        >
          View Source on Github
        </a>
        <span> / </span>
        <a href={downloadFileName} download="Srdjan_Ilic_CV_SRB" target='_blank'
        >
          Download CV (SRB)
        </a>
        <span> / </span>
        <a href={downloadFileNameENG} download="Srdjan_Ilic_CV_ENG" target='_blank'
        >
          Download CV (ENG)
        </a>
        <p>
        &copy; {currentYear} <strong>Portfolio</strong> - Srdjan Ilic Cacak
        </p>
        </footer>
    )

}
export default Footer