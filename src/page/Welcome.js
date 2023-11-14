import React from "react";
import { motion as m } from "framer-motion";
const Welcome = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 2.75, ease: "easeOut" }}
      class="text-zinc-600 flex justify-center p-6 text-8xl text-center"
    >
      <h1 class="font-semibold italic font-DynaPuff_Condensed-SemiBold text-9xl text-blue-600">
        WELCOME TO MY PORTFOLIO
      </h1>
    </m.div>
  );
};
export default Welcome;
