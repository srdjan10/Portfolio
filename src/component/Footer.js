import React from "react";
import { motion as m } from "framer-motion";

import downloadFileName from "C:/Users/Srdjan/portfolio/src/cv/Srdjan_Ilic_CV.pdf";
import downloadFileNameENG from "C:/Users/Srdjan/portfolio/src/cv/Srdjan_Ilic_CV_ENG.pdf";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <m.footer
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 2.75, ease: "easeOut" }}
      class="relative inset-x-0 bottom-0 h-10 text-center text-sm"
    >
      <button class="transition ease-in-out delay-150 selection:hover:-translate-y-3 hover:scale-110 duration-300 ...">
        <a
          href="mailto:srdjanilic10@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Need any help, you contact me!
        </a>
      </button>
      <span> / </span>
      <button class="transition ease-in-out delay-150 selection:hover:-translate-y-3 hover:scale-110 duration-300 ...">
        <a href="https://github.com/srdjan10/" target="_blank" rel="noreferrer">
          View Source on Github
        </a>
      </button>
      <span> / </span>
      <button class="transition ease-in-out delay-150 selection:hover:-translate-y-3 hover:scale-110 duration-300 ...">
        <a
          href={downloadFileName}
          download="Srdjan_Ilic_CV_SRB"
          target="_blank"
          rel="noreferrer"
        >
          Download CV (SRB)
        </a>
      </button>

      <span> / </span>
      <button class="transition ease-in-out delay-150 selection:hover:-translate-y-3 hover:scale-110 duration-300 ...">
        <a
          href={downloadFileNameENG}
          download="Srdjan_Ilic_CV_ENG"
          target="_blank"
          rel="noreferrer"
        >
          Download CV (ENG)
        </a>
      </button>

      <p class="flex justify-center">
        &copy; {currentYear} <strong>Portfolio</strong> - Srdjan Ilic Cacak
      </p>
    </m.footer>
  );
};
export default Footer;
