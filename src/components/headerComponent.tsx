'use client';
import {FC} from "react";
import {scrollToAnchor} from "../helpers/scroll.helpers";

export const HeaderComponent: FC = () => {
  return (
    <div className={"w-full h-28 xl:px-36 2xl:px-44 fixed flex justify-end items-center"}>
      <div className={"w-1/2 flex justify-start items-center"}>
        <img src="/assets/Logo_VKS.svg" alt=""/>
      </div>
      <div className={"flex justify-end items-center w-1/2 opacity-100"}>
        <div
          className={"cursor-pointer font-normal xl:text-base 2xl:text-xl text-main_dark mx-2.5"}
          onClick={() => scrollToAnchor('#propose')}
        >
          Our propose
        </div>
        <div
          className={"cursor-pointer font-normal xl:text-base 2xl:text-xl text-main_dark mx-2.5"}
          onClick={() => scrollToAnchor('#choose')}
        >
          Choose us
        </div>
        <div
          className={"cursor-pointer font-normal xl:text-base 2xl:text-xl text-main_dark mx-2.5"}
          onClick={() => scrollToAnchor('#about')}
        >
          About us
        </div>
        <div
          className={"cursor-pointer font-normal xl:text-base 2xl:text-xl text-main_dark mx-2.5"}
          onClick={() => scrollToAnchor('#contact')}
        >
          Contact us
        </div>
      </div>
    </div>
  )
}
