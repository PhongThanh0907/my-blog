"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Test = (props: Props) => {
  return (
    <div className="overflow-hidden z-50">
      <motion.div
        initial={{
          y: 0,
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 0, y: -290, x: 150 }}
        className="fixed z-10"
        style={{
          top: "calc(50vh - 60px)",
          left: "calc(50vw - 100px)",
        }}
      >
        <div
          className="h-12 w-56"
          style={{
            transform: "translate(-50%, -50%) skew(-30deg)",
            background: "linear-gradient(to right, #000000, #434343)",
          }}
        />
      </motion.div>

      <motion.div
        initial={{
          x: 50,
          opacity: 1,
        }}
        transition={{ duration: 1, delay: 0.5 }}
        whileInView={{ opacity: 0, x: -400 }}
        className="w-50vw h-100vh fixed"
      >
        <div
          className="w-[80vw] h-[100vh]"
          style={{
            transform: "translate(-45%) skew(-30deg)",
            background: "linear-gradient(to right, #414345 ,#232526 )",
          }}
        />
      </motion.div>

      <motion.div
        initial={{
          y: 20,
          x: 180,
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 0, y: 410, x: -50 }}
        className="fixed z-10"
        style={{
          top: "calc(50vh - 60px)",
          left: "calc(50vw - 100px)",
        }}
      >
        <div
          className="h-12 w-56 bg-white"
          style={{
            transform: "translate(-50%, -50%) skew(-30deg)",
            background: "linear-gradient(to right, #000000, #434343)",
          }}
        />
      </motion.div>

      <motion.div
        initial={{
          x: -150,
          opacity: 1,
        }}
        transition={{ duration: 1, delay: 0.5 }}
        whileInView={{ opacity: 0, x: 400 }}
        className="w-50vw h-100vh fixed right-0"
      >
        <div
          className="w-[80vw] h-[100vh] bg-red-500"
          style={{
            transform: "translate(45%) skew(-30deg)",
            background: "linear-gradient(to right, #414345 ,#232526 )",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Test;
