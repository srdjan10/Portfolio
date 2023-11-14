import React from "react";
import srdjan from "../picture/srdjanilic.jpg";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 2.75, ease: "backOut" }}
    >
      <span class="text-center">
        <h3 class="font-DynaPuff_Condensed-SemiBold text-5xl">
          -Hello, I am Srdjan Ilic-
        </h3>
        <h4 class="font-DynaPuff_Condensed-SemiBold text-3xl">
          -Junior Frontend Developer-
        </h4>
      </span>
      <span class="flex justify-center items-center p-6">
        <img
          class="rounded-full w-96 h-72 blur-sm hover:blur-none cursor-pointer transition-all duration-300"
          src={srdjan}
          alt="Srdjan Ilic"
        ></img>
      </span>
    </m.div>
  );
};

export default Home;
