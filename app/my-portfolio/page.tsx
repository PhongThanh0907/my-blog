"use client";

import React from "react";
import { motion } from "framer-motion";

import Header from "./Header";
import Banner from "./Banner";
import OverView from "./OverView";
import FirstLoading from "./FirstLoading";
import WorkExperience from "./WorkExperience";
import Technologies from "./Technologies";
import Project from "./Project";
import Contact from "./Contact";
import ToasterProvider from "../providers/ToasterProvider";

type Props = {};

const MyPortfolioPage = (props: Props) => {
  return (
    <main className="min-h-screen bg-black">
      <>
        <FirstLoading />
        <motion.div
          initial={{
            opacity: 0,
          }}
          transition={{ delay: 1.5 }}
          whileInView={{ opacity: 1 }}
        >
          <ToasterProvider />
          <Header />
          <Banner />
          <OverView />
          <WorkExperience />
          <Technologies />
          <Project />
          <Contact />
        </motion.div>
      </>
    </main>
  );
};

export default MyPortfolioPage;
