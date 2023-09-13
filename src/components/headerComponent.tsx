'use client';
import {FC} from "react";

export const HeaderComponent: FC = () => {

  const scrollToAnchor = (anchor: string) => {
    const section = document.querySelector(anchor);
    if (section) {
      window.scrollTo({
        // @ts-ignore
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={"w-screen h-28 fixed flex justify-end items-center"}>
      <div className={"absolute left-32 top-1/2 -translate-x-1/2 -translate-y-1/2"}>
        <img src="/assets/Logo_VKS.svg" alt=""/>
      </div>
      <div className={"flex pr-32"}>
        <div
          className={"cursor-pointer mx-3.5"}
          onClick={() => scrollToAnchor('#propose')}
        >Our propose
        </div>
        <div
          className={"cursor-pointer mx-3.5"}
          onClick={() => scrollToAnchor('#choose')}
        >Choose us
        </div>
        <div
          className={"cursor-pointer mx-3.5"}
          onClick={() => scrollToAnchor('#achievements')}
        >Our Achievements
        </div>
        <div
          className={"cursor-pointer mx-3.5"}
          onClick={() => scrollToAnchor('#about')}
        >About us
        </div>
        <div
          className={"cursor-pointer mx-3.5"}
          onClick={() => scrollToAnchor('#contact')}
        >Contact us
        </div>
      </div>
    </div>
  )
}
