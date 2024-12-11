import React from "react";
import {motion} from 'framer-motion'
import {leftSideVariants, rightSideVariants } from '../../Dummy Data/Motion/Motion.js'

const FAQs = () => {
  return (
    <>
      <section id="faqs" class="py-24 bg-zinc-900">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
          variants={leftSideVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px 0px -200px 0px", once: true }} class="mb-16">
            <h2 class="text-4xl font-manrope text-center font-bold text-orange-500 leading-[3.25rem]">
              Frequently asked questions
            </h2>
          </motion.div>
          <motion.div
          variants={rightSideVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px 0px -200px 0px", once: true }} class="accordion-group" data-accordion="default-accordion">
            <div
              class="accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4 active"
              id="basic-heading-one-with-icon"
            >
              <button
                class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-orange-500 w-full transition duration-500 hover:text-orange-600 accordion-active:font-medium accordion-active:text-indigo-600"
                aria-controls="basic-collapse-one-with-icon"
              >
                <h5>How can I reset my password?</h5>
                <svg
                  class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600 origin-center"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id="basic-collapse-one-with-icon"
                class="accordion-content w-full overflow-hidden pr-4 max-h-[250px]"
                aria-labelledby="basic-heading-one"
              >
                <p class="text-base text-zinc-200 font-normal leading-6">
                  To create an account, find the 'Sign up' or 'Create account'
                  button, fill out the registration form with your personal
                  information, and click 'Create account' or 'Sign up.' Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
            </div>
            <div
              class="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
              id="basic-heading-two-with-icon"
            >
              <button
                class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-orange-500 w-full transition duration-500 hover:text-orange-600-600 accordion-active:font-medium accordion-active:text-indigo-600"
                aria-controls="basic-collapse-two-with-icon"
              >
                <h5>How do I update my billing information?</h5>
                <svg
                  class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id="basic-collapse-two-with-icon"
                class="accordion-content w-full overflow-hidden pr-4"
                aria-labelledby="basic-heading-two"
              >
                <p class="text-base text-zinc-200 font-normal leading-6">
                  To create an account, find the 'Sign up' or 'Create account'
                  button, fill out the registration form with your personal
                  information, and click 'Create account' or 'Sign up.' Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
            </div>
            <div
              class="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
              id="basic-heading-three-with-icon"
            >
              <button
                class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-orange-500 w-full transition duration-500 hover:text-orange-600 accordion-active:font-medium accordion-active:text-indigo-600"
                aria-controls="basic-collapse-three-with-icon"
              >
                <h5>How can I contact customer support?</h5>
                <svg
                  class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id="basic-collapse-three-with-icon"
                class="accordion-content w-full overflow-hidden pr-4"
                aria-labelledby="basic-heading-three"
              >
                <p class="text-base text-zinc-200 font-normal leading-6">
                  To create an account, find the 'Sign up' or 'Create account'
                  button, fill out the registration form with your personal
                  information, and click 'Create account' or 'Sign up.' Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
            </div>
            <div
              class="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
              id="basic-heading-three-with-icon"
            >
              <button
                class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-orange-500 w-full transition duration-500 hover:text-orange-600 accordion-active:font-medium accordion-active:text-indigo-600"
                aria-controls="basic-collapse-three-with-icon"
              >
                <h5>How do I delete my account?</h5>
                <svg
                  class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id="basic-collapse-three-with-icon"
                class="accordion-content w-full overflow-hidden pr-4"
                aria-labelledby="basic-heading-three"
              >
                <p class="text-base text-zinc-200 font-normal leading-6">
                  To create an account, find the 'Sign up' or 'Create account'
                  button, fill out the registration form with your personal
                  information, and click 'Create account' or 'Sign up.' Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
