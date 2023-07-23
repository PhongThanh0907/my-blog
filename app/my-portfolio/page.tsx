"use client";

import React from "react";

import Header from "./Header";
import Banner from "./Banner";
import OverView from "./OverView";
import WorkExperience from "./WorkExperience";
import Technologies from "./Technologies";
import Project from "./Project";
import Contact from "./Contact";
import ToasterProvider from "../providers/ToasterProvider";
import ParticlesContainer from "../components/particles/ParticlesContainer";

const MyPortfolioPage = () => {
  return (
    <main className="min-h-screen bg-black relative">
      <>
        <ParticlesContainer />
        <ToasterProvider />
        <Header />
        <Banner />
        <OverView />
        <WorkExperience />
        <Technologies />
        <Project />
        <Contact />
      </>
    </main>
  );
};

export default MyPortfolioPage;
