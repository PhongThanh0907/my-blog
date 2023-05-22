"use client";

import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import Background from "../../public/background.jpg";
import ButtonBanner from "../components/ButtonBanner";
import Reveal from "../components/FramerMotion/Reveal";

const Banner = () => {
  const [text, count] = useTypewriter({
    words: [
      "Welcome to my Portfolio",
      "Hi, I am a Web Developer",
      "My name is Phong",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="text-stone-100 h-[450px] lg:h-[44rem] relative pt-24 overflow-hidden">
      <div className="h-40 lg:h-64 relative font-semibold width-80 pt-16 lg:pt-40 z-10 pl-6">
        <Reveal width="w-full relative h-24 lg:h-20">
          <h1 className="text-3xl lg:text-5xl">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#2cf9fa" />
          </h1>
          <h2 className="absolute bottom-0 text-xs uppercase text-gray-400 tracking-[6px]">
            Software Engineer
          </h2>
        </Reveal>

        <motion.div
          initial={{
            y: 150,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute top-10 lg:top-28 -left-2"
        >
          <div className="rounded-full w-5 h-5 changeColor-circle" />
          <div className="w-1 h-56 lg:h-80 blue-gradient ml-2" />
        </motion.div>
      </div>
      <div className="relative z-10 width-80 mt-6 pl-6">
        <ButtonBanner />
      </div>
      <Image
        className="absolute inset-0 h-[94%] w-full object-cover top-20 lg:top-32 opacity-70"
        src={Background}
        alt="background"
      />
    </div>
  );
};

export default Banner;
