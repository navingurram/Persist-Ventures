import React from "react";
import { Carousel } from "flowbite-react";
import muscleplan from '../../assets/muscleplan.jpg'
import performance from '../../assets/performance.jpg'
import vegeterian from '../../assets/vegeterian.jpg'
import keto from '../../assets/keto.jpg'
import personal from '../../assets/personal.jpg'
import weight from '../../assets/weight.jpg'
import { motion } from "framer-motion"
import {leftSideVariants, rightSideVariants } from '../../Dummy Data/Motion/Motion.js'

const Dietplans = () => {
  return (
    <div id="dietplan"
     className="bg-zinc-900">
      <motion.div
      variants={leftSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "0px 0px -200px 0px", once: true }} className="text-center leading-10">
        <h2 className="text-4xl font-semibold text-orange-500 pb-6">
          Our Diet Plans That Make You Healthy
        </h2>
      </motion.div>
      <motion.div 
      variants={rightSideVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ margin: "0px 0px -200px 0px", once: true }} className="w-full rounded-none">
      <div className="h-56 sm:h-64 xl:h-[500px] 2xl:h-[500px]">
      <Carousel pauseOnHover className="transition-all duration-1000">
        <img src={personal} alt="..." />
        <img src={vegeterian} alt="..." />
        <img src={weight} alt="..." />
        <img src={performance} alt="..." />
        <img src={muscleplan} alt="..." />
        <img src={keto} alt="..." />
      </Carousel>
    </div>
      </motion.div>
    </div>
  );
};

export default Dietplans;
