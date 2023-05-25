"use client";

import React from "react";
import { motion } from "framer-motion";

const FirstLoading = () => {
  return (
    <div className="overflow-hidden z-50 hidden lg:inline">
      <motion.div
        initial={{
          y: -30,
          x: -90,
          height: 48,
          width: 224,
          opacity: 1,
          skewX: -30,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{
          opacity: 1,
          y: -300,
          x: 60,
          height: 0,
          width: 224,
          skewX: -30,
        }}
        className="fixed z-10"
        style={{
          top: "calc(50vh - 60px)",
          left: "calc(50vw - 100px)",
          background: "linear-gradient(to right, #000000, #434343)",
        }}
      ></motion.div>

      <motion.div
        initial={{
          x: -320,
          opacity: 1,
          height: 1000,
          width: 1000,
          skewX: -30,
        }}
        transition={{ duration: 1, delay: 0.5 }}
        whileInView={{
          opacity: 0,
          x: -200,
          height: 1000,
          width: 0,
          skewX: -30,
        }}
        className="fixed"
        style={{
          background: "linear-gradient(to right, #414345 ,#232526 )",
        }}
      ></motion.div>

      <motion.div
        initial={{
          y: 30,
          x: 90,
          opacity: 1,
          height: 48,
          width: 224,
          skewX: -30,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{
          opacity: 0,
          y: 380,
          x: -100,
          height: 0,
          width: 224,
          skewX: -30,
        }}
        className="fixed z-10"
        style={{
          top: "calc(50vh - 60px)",
          left: "calc(50vw - 100px)",
          background: "linear-gradient(to right, #434343, #000000)",
        }}
      ></motion.div>

      <motion.div
        initial={{
          x: 140,
          opacity: 1,
          height: 1000,
          width: 1000,
          skewX: -30,
        }}
        transition={{ duration: 1, delay: 0.5 }}
        whileInView={{
          opacity: 0,
          x: 60,
          height: 1000,
          width: 10,
          skewX: -30,
        }}
        className="fixed right-0"
        style={{
          background: "linear-gradient(to right,#393939c3, #414345)",
        }}
      ></motion.div>
    </div>
  );
};

export default FirstLoading;
