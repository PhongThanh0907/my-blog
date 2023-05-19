"use client";

import React, { useState } from "react";
import Image from "next/image";

import ButtonMenuBar from "../components/ButtonMenuBar";

import Github from "../../public/github.png";
import Linkedin from "../../public/linkedin.png";
import Link from "next/link";
import { MENU_HEADER } from "../constants";

const Header = () => {
  const [openButtonMenu, setOpenButtonMenu] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className="width-80 flex-between h-20 ">
        <div onClick={() => setOpenButtonMenu(!openButtonMenu)}>
          <ButtonMenuBar open={openButtonMenu} />
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com/PhongThanh0907" target="_blank">
            <Image
              className="h-10 w-10 bg-white rounded-full cursor-pointer hover-item"
              src={Github}
              alt="github"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/phong-ph%E1%BA%A1m-034480248/"
            target="_blank"
          >
            <Image
              className="h-10 w-10 cursor-pointer hover-item"
              src={Linkedin}
              alt="linkedin"
            />
          </Link>
        </div>
      </div>
      {openButtonMenu ? (
        <div className="absolute bg-HeaderMenu rounded-md top-20 flex flex-col pl-8 font-semibold text-xl h-80 w-96 opacity-100 duration-500 text-stone-100">
          {MENU_HEADER.map((item, index) => (
            <div key={index} className="relative w-full py-6">
              <Link
                className="absolute left-[10px] opacity-100 hover-item"
                href={item.id}
                style={{ transition: `all ${item.delay}ms` }}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="absolute top-[75px] z-0 text-stone-100 bg-HeaderMenu flex flex-col pt-6 pl-8 text-xl gap-y-3  h-0 w-96 duration-500 opacity-0">
          {MENU_HEADER.map((item, index) => (
            <div key={index} className="relative w-full py-3.5">
              <Link
                className="text-white absolute left-[70%] opacity-0"
                href={item.id}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
