import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { motion as m } from "framer-motion";

const Contact = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.25 }}
    >
      <div>
        <p class="text-center text-2xl pb-20">
          <b>
            <i>Contact me via social media</i>
          </b>
        </p>
      </div>
      <div class="ml-6 flex flex-row flex-wrap space-x-6 justify-center pb-20">
        <p class="flex flex-wrap flex-col justify-center items-center space-x-6">
          <a
            href="https://sr-rs.facebook.com/"
            target="_blank"
            alt="facebook"
            style={{ textDecoration: "none" }}
            class="items-center"
            rel="noreferrer"
          >
            <FaFacebook
              size="70px"
              class="fill-blue-800 transition ease-in-out delay-450 selection:hover:-translate-y-3 hover:scale-110"
            />
          </a>
          Facebook
        </p>
        <p class="flex flex-wrap flex-col justify-center items-center space-x-6">
          <a
            href="https://www.linkedin.com/in/srdjan-ilic-112b90238/"
            target="_blank"
            style={{ textDecoration: "none" }}
            class="items-center"
            rel="noreferrer"
          >
            <FaLinkedinIn
              size="70px"
              class="fill-blue-800 transition ease-in-out delay-450 selection:hover:-translate-y-3 hover:scale-110"
            />
          </a>
          Connect with me on Linkedin
        </p>
        <p class="flex flex-wrap flex-col justify-center items-center space-x-6">
          <a
            href="mailto:srdjanilic10@gmail.com"
            target="_blank"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
          >
            <MdEmail
              size="70px"
              class="fill-blue-800 transition ease-in-out delay-450 selection:hover:-translate-y-3 hover:scale-110"
            />
          </a>
          Send me an email
        </p>
        <p class="flex flex-wrap flex-col justify-center items-center space-x-6">
          <a
            href="https://github.com/srdjan10/"
            target="_blank"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
          >
            <BsGithub
              size="70px"
              class="fill-blue-800 transition ease-in-out delay-450 selection:hover:-translate-y-3 hover:scale-110"
            />
          </a>
          GitHub - Look my projects
        </p>
      </div>
    </m.div>
  );
};
export default Contact;
