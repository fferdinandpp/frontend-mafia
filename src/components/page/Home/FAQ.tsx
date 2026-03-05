"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { faqList } from "@/data/dummy/faq";
import { amarante, harabaraMaisDemo, quantify } from "@/utils/font";
import Image from "next/image";

export default function FAQ() {
  const [isQuestionOpened, setIsQuestionOpened] = useState<number>(-1);
  const [isMoreQuestionOPened, setIsMoreQuestionOpened] =
    useState<boolean>(false);

  const handleQuestionClick = (index: number) => {
    setIsQuestionOpened((prev) => (prev === index ? -1 : index));
  };
  return (
    <div className="max-w-[1200px] mx-auto my-10 relative">
      <Image
        alt="MAFIASTORE"
        src="/images/other/purple-shape.webp"
        width={250}
        height={250}
        className="absolute  -right-12 -top-70  z-0"
      />
      <Image
        alt="MAFIASTORE"
        src="/images/other/ballfull.webp"
        width={250}
        height={250}
        className="absolute  -left-24 -top-36  z-20"
      />
      <div className="absolute bg-[#7b01fe] blur-3xl w-[200px] h-[200px] rounded-full -left-24 -top-14 z-0" />

      <p
        className={`text-[#0048FF] -rotate-90 absolute -left-18 top-55 ${amarante.className} text-6xl`}
      >
        {" "}
        {"<<<<<<<"}{" "}
      </p>

      <p
        className={`text-[#0048FF] rotate-90 absolute -right-18 top-55 ${amarante.className} text-6xl`}
      >
        {" "}
        {"<<<<<<<"}{" "}
      </p>
      <div className="bg-[url('/images/background/bgFaq.webp')] relative bg-cover bg-center w-full border border-[#0144FE] rounded-[80px] max-w-[1000px] mx-auto my-8 py-10 z-10">
        <div className=" mx-auto text-white">
          <p
            className={`text-2xl xl:text-4xl text-center text-white [text-shadow:0px_2.186px_43.43px_rgba(255,255,255,0.15),_0px_2.186px_36.477px_rgba(203,218,230,0.40)] ${quantify.className}`}
          >
            FREQUENTLY ASKED QUESTION (FAQ)
          </p>
          {faqList.slice(0, 3).map((faq, index) => (
            <div
              key={index}
              className={`xl:ml-10 lg:ml-10 ml-0 mt-4 ${harabaraMaisDemo.className}`}
            >
              <div
                className="flex space-x-5 items-center cursor-pointer"
                onClick={() => handleQuestionClick(index)}
              >
                <AnimatePresence mode="wait">
                  {isQuestionOpened === index ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaX
                        className=" bg-[#1E1E1E]  p-2 rounded-full"
                        size={30}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaPlus
                        className=" bg-[#1E1E1E]  p-2 rounded-full"
                        size={30}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="pt-5 w-full">
                  <h3 className="xl:text-lg lg:text-lg text-base font-bold cursor-pointer block border-b border-white/16 pb-5 ">
                    {faq.question}
                  </h3>
                </div>
              </div>
              <AnimatePresence>
                {isQuestionOpened === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-14 text-sm text-gray-300 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
          {isMoreQuestionOPened && (
            <AnimatePresence>
              {faqList.slice(3, 11).map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`mt-4 xl:ml-10 lg:ml-10 ml-0 ${harabaraMaisDemo.className}`}
                >
                  <div className="flex space-x-5 items-center">
                    <AnimatePresence mode="wait">
                      {isQuestionOpened === index ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaX
                            className=" bg-[#1E1E1E] p-2 rounded-full"
                            size={30}
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="open"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaPlus
                            className=" bg-[#1E1E1E] p-2 rounded-full"
                            size={30}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="pt-5 w-full">
                      <h3
                        className="xl:text-lg lg:text-lg text-base font-bold cursor-pointer block border-b border-white/16 pb-5 "
                        onClick={() => handleQuestionClick(index)}
                      >
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <AnimatePresence>
                    {isQuestionOpened === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-14 text-sm text-gray-300 overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          )}

          <div
            className="cursor-pointer mt-2 xl:ml-10 lg:ml-10 ml-0"
            onClick={() => setIsMoreQuestionOpened((prev) => !prev)}
          >
            {isMoreQuestionOPened ? <p>See Less</p> : <p>See More</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
