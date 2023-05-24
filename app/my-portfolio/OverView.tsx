"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import TextLight from "../components/TextLight";
import HeroBG from "../../public/hero-bg.jpg";

const OverViewMemo = () => {
  return (
    <div id="overview" className="py-10">
      <div className="width-80 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-gray-400 text-md lg:text-lg">INTRODUCTION</h4>
            <TextLight title="Overview" />
          </motion.div>

          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-gray-400 text-md tracking-widest mt-8 ">
              I&apos;m a skilled software developer with experience in
              TypeScript and JavaScript, and expertise in frameworks like React,
              NodeJS and NextJS . I&apos;m a quick learner and collaborate
              closely with clients to create efficient, scalable, and
              user-friendly solutions that solve real-world problems. Let&apos;s
              work together to bring your ideas to life!
            </p>
            <div className="pt-4 flex flex-col space-y-4">
              <p className="text-gray-400 tracking-widest">
                <span className="underline decoration text-stone-100 font-semibold">
                  Short-term Goal:
                </span>{" "}
                Improving as well as learning many skills at programming. Become
                Fullstack Developer as soon as possible.
              </p>
              <p className="text-gray-400 tracking-widest">
                <span className="underline decoration-neonblue/50 text-stone-100 font-semibold">
                  Long-term Goal:
                </span>{" "}
                Become a Project Manager with professional skills.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{
            y: -200,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center"
        >
          <div className="hero-img h-80 w-[90%]">
            <Image
              src={HeroBG}
              alt="hero"
              className="w-full h-full object-cover rounded-lg border-4 border-gray-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const OverView = React.memo(OverViewMemo);

export default OverView;
