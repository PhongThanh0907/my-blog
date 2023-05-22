"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Test = (props: Props) => {
  return (
    <div>
      <motion.div
        initial={{
          x: 500,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: -382 }}
        className="fixed top-0 left-0 h-96 w-96 bg-white"
      ></motion.div>
      <motion.div
        initial={{
          x: 100,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 370 }}
        className="fixed top-0 right-0 h-96 w-96 bg-white"
      ></motion.div>
    </div>
  );
};

export default Test;
