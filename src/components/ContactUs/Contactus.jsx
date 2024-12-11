import React from "react";
import { motion } from "framer-motion";
import {
  leftSideVariants,
  rightSideVariants,
  centerVariants,
} from "../../Dummy Data/Motion/Motion.js";

const ContactUs = () => {
  return (
    <div id="contact" className="px-5 py-2 md:px-5 md:py-2 bg-zinc-900">
      <div
        viewport={{ margin: "0px 0px -200px 0px", once: true }}
        className="text-center leading-10"
      >
        <motion.div
          variants={centerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px 0px -200px 0px", once: true }}
          className="flex items-center justify-center gap-2"
        >
          <p className="text-orange-500 text-4xl font-bold capitalize">
            Contact us
          </p>
        </motion.div>
      </div>
      <div>
        <div
          id="aboutus"
          className="max-w-7xl md:py-10 py-4 flex mx-auto flex-col sm:flex-row"
        >
          <motion.div
            variants={leftSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px 0px -200px 0px", once: true }}
            className="basis-[60%] p-2 md:p-0 md:pr-10"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label className="mt-5 mb-2 text-white">First Name</label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="First Name"
                    className="block w-full rounded-md px-3.5 py-2 bg-zinc-900 border-slate-300 outline-none border-[1px] text-zinc-100 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="mt-5 mb-2 text-white">Last Name</label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Last Name"
                    className="block w-full rounded-md  px-3.5 py-2 bg-zinc-900 text-zinc-200 outline-none border-[1px] border-slate-300  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-5">
              <div>
                <label className="mt-5 mb-2 text-white">Email</label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    className="block w-full rounded-md px-3.5 py-2 border-slate-300 outline-none border-[1px] bg-zinc-900 text-zinc-200 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="mt-5 mb-2 text-white">Phone</label>
                <div className="mt-2.5">
                  <input
                    type="number"
                    name="Mono"
                    placeholder="Phone Number"
                    className="block w-full rounded-md  px-3.5 py-2 bg-zinc-900 text-zinc-200 outline-none border-[1px] border-slate-300  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mt-5 mb-2 text-white">Message</label>
              <textarea
                placeholder="Leave us a Message"
                name="message"
                className="border-[1px] bg-zinc-900 text-zinc-200 outline-none p-2 rounded-md border-slate-300 h-48"
              />
            </div>
            <div className="text-center">
              <button className="btn-primary bg-orange-500 text-white mt-5 p-2 rounded-md">
                Submit
              </button>
            </div>
          </motion.div>
          <motion.div
            variants={rightSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px 0px -200px 0px", once: true }}
            className="basis-[40%]"
          >
            <iframe
              title="Maps"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=New%20York&zoom=10&maptype=roadmap"
              className="rounded-xl w-[250px] mt-5 md:w-[500px] md:h-[400px]"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
