"use client";

import React from "react";
import { motion } from "framer-motion";

import Header from "./Header";
import Banner from "./Banner";
import OverView from "./OverView";
import Test from "./Test";
import WorkExperience from "./WorkExperience";
import Technologies from "./Technologies";

type Props = {};

const MyPortfolioPage = (props: Props) => {
  return (
    <main className="min-h-screen bg-black">
      <>
        <motion.div
          initial={{
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 0 }}
        >
          <Test />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          transition={{ delay: 1 }}
          whileInView={{ opacity: 1 }}
        >
          <Header />
          <Banner />
          <OverView />
          <WorkExperience />
          <Technologies />
        </motion.div>
      </>
    </main>
  );
};

export default MyPortfolioPage;
