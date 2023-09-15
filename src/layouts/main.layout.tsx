'use client';
import {scrollToAnchor} from "../helpers/scroll.helpers";

export const MainLayout = () => {
  return (
    <div className={"h-screen w-full bg-bg_main bg-cover bg-center xl:px-36 2xl:px-44 flex justify-center items-center"}>
      <div className="h-full w-full flex">
        <div className="w-1/2 h-full flex justify-center items-center">
          <h1 className={"font-black uppercase text-6xl strokeText"}>
            Enhancing the Future through Technology
          </h1>
        </div>
        <div className="w-1/2 h-full flex items-end justify-end">
          <div className={"flex justify-end items-center pb-7"}>
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
      </div>
    </div>
  )
}
