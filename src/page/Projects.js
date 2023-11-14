import React from "react";
import market from "../picture/Online_market.jpg";
import shelf from "../picture/svetpolicaweb.png";
import { motion as m } from "framer-motion";

const Projects = () => {
  return (
    <m.div
      animate={{ y: 50 }}
      transition={{ ease: "easeOut", duration: 2 }}
      class="ml-6 flex flex-row flex-wrap space-x-6 justify-center"
    >
      <div class="object-none object-left-top w-96 h-96">
        <img
          class="rounded-md hover:scale-125 transition duration-1000 ease-in-out"
          src={market}
          alt="..."
        />
        <div class="text-center font-DynaPuff_Condensed-SemiBold">
          <p>Online market</p>
        </div>
      </div>
      <div class="w-96 h-96">
        <img
          class="rounded-md hover:scale-125 transition duration-1000 ease-in-out"
          src={shelf}
          alt="..."
        />
        <div class="text-center font-DynaPuff_Condensed-SemiBold">
          <p>Svet polica </p>
        </div>
      </div>
    </m.div>
  );
};
export default Projects;
