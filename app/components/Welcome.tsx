import React from "react";
import Reveal from "./FramerMotion/Reveal";
import TextCharacter from "./FramerMotion/TextCharacter";

type Props = {};

const Welcome = (props: Props) => {
  return (
    <div className="text-stone-100 fixed inset-0 flex justify-center items-center flex-col gap-5 z-10">
      <div className="uppercase text-2xl font-semibold tracking-wider">
        <TextCharacter text="Welcome to my blog" />
      </div>
      <Reveal width="w-fit">
        <div
          className="cursor-pointer relative border pl-4 py-2 pr-20 rounded border-gray-600"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
          }}
        >
          <span className="text-lg">Next</span>
          <div className="arrow-right ml-12">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Welcome;
