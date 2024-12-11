import React from "react";
import Data from "../../Dummy Data/Data.js";
import { motion } from "framer-motion"
import {leftSideVariants, rightSideVariants } from '../../Dummy Data/Motion/Motion.js'

const Features = () => {
  return (
    <div id="features" className="bg-zinc-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
        variants={leftSideVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ margin: "0px 0px -200px 0px", once: true }}
                     className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-4xl font-semibold text-orange-500">
            Discover Our App's Key Features
          </h2>
          <p className="mt-6 text-lg/8 text-gray-400">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </motion.div>
        <motion.div variants={rightSideVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ margin: "0px 0px -200px 0px", once: true }}
                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-14">
          {Data.map((item) => {
            return (
              <div className="card rounded-xl transition-all duration-700">
                <div>
                  <img src={item.image} alt="card" className="w-full h-48 rounded-lg" />
                  <h4 className="p-2 font-bold text-slate-300 text-center pt-2 text-sm">{item.heading}</h4>
                  <p className="text-center text-gray-600 text-[12px] pt-4 pb-8">{item.description}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
