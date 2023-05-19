import React from "react";

import Reveal from "./FramerMotion/Reveal";
import TextCharacter from "./FramerMotion/TextCharacter";
import Link from "next/link";

const Welcome = () => {
  return (
    <div className="text-stone-100 fixed inset-0 flex-center flex-col gap-5 z-10">
      <div className="uppercase text-2xl font-semibold tracking-wider">
        <TextCharacter text="Welcome to my blog" />
      </div>
      <Reveal width="w-36 h-16 flex items-center justify-center">
        <Link href="my-portfolio">
          <div
            className="h-10 flex items-center w-32 hover:bg-gray-600/40 duration-300 active:bg-gray-600/70"
            style={{
              boxShadow:
                "rgb(34 141 188 / 12%) 0px 2px 4px 4px, rgb(80 174 225 / 32%) 0px 0px 8px 2px",
            }}
          >
            <h1 className="text-lg ml-3">Next</h1>
            <div className="arrow-right ml-9">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </Link>
      </Reveal>
    </div>
  );
};

export default Welcome;
