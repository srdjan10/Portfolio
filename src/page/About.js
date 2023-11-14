import React from "react";
import { motion as m } from "framer-motion";
const About = () => {
  return (
    <m.div
      animate={{ scale: [1, 3, 1] }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    >
      <div>
        <h2 class="text-center text-3xl font-DynaPuff_Condensed-Medium">
          About me
        </h2>
        <p class="indent-8 text-justify ml-7 mr-7 text-lg italic">
          An engineer with experience in business organization wants to take the
          next step in his career. Curious and brave to get acquainted with a
          wide range of unknown web programming processes, to learn something
          new, more modern, and in turn solving problems in cooperation with the
          team to gain their trust. I learn fast, a team player, the desire to
          progress is great in every sense.
        </p>
      </div>
      <div>
        <h2 class="text-center text-3xl font-DynaPuff_Condensed-Medium">
          My skills
        </h2>
        <ul class="text-center ml-7 mr-7 text-lg italic">
          <li>
            Working with technologies: HTML, CSS, JavaScript, Tailwind, Github
          </li>
          <li>Framework (React.js)</li>
          <li>Work on the web application: (last 2 months - "Svet polica")</li>
          <li>Portfolio (web application)</li>
          <li>SQL (VFP 9.0), MySQL</li>
          <li>VCS: Git</li>
          <li>Firebase (Backend service)</li>
        </ul>
      </div>
      <div>
        <h2 class="text-center text-3xl font-DynaPuff_Condensed-Medium p-4">
          Work experience
        </h2>
        <ul>
          <li>
            <h5 class="text-center text-3xl font-DynaPuff_Condensed-Medium p-4">
              Computer scientist - 2016-present "Institute of Public Health
              Cacak"
            </h5>
            <br />
            <ul class="text-justify ml-7 mr-7 text-lg italic">
              <li>
                Work on the website of the Institute for setting up and
                redesigning pages (HTML, PHP myAdmin).
              </li>
              <li>Work on Cpanel.</li>
              <li>
                Creation of software for services and centers (software for
                vehicle records, software for records of equipment of the
                Institute of Public Health, software for keeping records of
                infectious diseases at the level of Moravian district, software
                for calculating the lower and upper limits of the test tube).
              </li>
              <li>
                Work with existing databases created by the Institute of Public
                Health of Serbia "Dr. Milan Jovanovic Batut" (MS Access)
              </li>
              <li>
                Creating statistical reports from databases (taking data and
                formatting them according to requests with the help of queries)
              </li>
              <li>
                Part of the team participating in the defense of the laboratory
                accreditation certificate with the Accreditation Body of Serbia
                (ATS) - Data management procedure and management
              </li>
              <li>
                Participated in the implementation of the Public Health Service
                for the Moravian district{" "}
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <h5 class="text-center text-3xl font-DynaPuff_Condensed-Medium p-4">
              Software developer - 2014.-2016. "Perfect Software" Cacak
            </h5>
            <br />
            <ul class="text-justify ml-7 mr-7 text-lg italic">
              <li>Working with Microsoft SQL databases.</li>
              <li>
                Design, construction, design, testing and maintenance of
                software for existing and new users.
              </li>
              <li>
                Consulting and solutions in information systems as well as work
                with Microsoft Visual FoxPro 9.0.
              </li>
              <li>
                Implementation of ideas in software for hotels, car dealerships,
                markets, shops
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li class="pb-20">
            <h5 class="text-center text-3xl font-DynaPuff_Condensed-Medium p-4">
              Computer scientist: 2010.-2013. Health Center "Dr Dragisa Misovic"
              Cacak
            </h5>
            <br />
            <ul class="text-justify ml-7 mr-7 text-lg italic">
              <li>Maintenance of existing software.</li>
              <li>Hardware maintenance.</li>
              <li>
                Maintenance of a computer network within the entire Health
                Center in Cacak.
              </li>
              <li>
                Participated in the implementation of the HIS (Health
                Information System).
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div></div>
    </m.div>
  );
};
export default About;
