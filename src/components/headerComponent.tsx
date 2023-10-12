'use client';
import {FC, MutableRefObject, useEffect, useRef} from "react";
import {scrollToAnchor} from "../helpers/scroll.helpers";
import useStore from "../store/store";

interface IHeaderProps {}

export const HeaderComponent: FC<IHeaderProps> = () => {
  const isShowFullHeader = useStore((state) => state.showHeader)
  const isChangedHeaderColor = useStore((state) => state.isChangedHeaderColor)

  const logoRef: MutableRefObject<HTMLImageElement | null> = useRef(null)
  const navigatorRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

  useEffect(() => {
    if (navigatorRef && navigatorRef.current && logoRef && logoRef.current) {
      if (isShowFullHeader) {
        logoRef.current.classList.remove('lg:left-20');
        logoRef.current.classList.remove('xl:left-36');
        logoRef.current.classList.remove('2xl:left-44');
        logoRef.current.classList.add('left-1/2');
        logoRef.current.classList.add('-translate-x-1/2');
        navigatorRef.current.classList.remove('opacity-100');
        navigatorRef.current.classList.add('opacity-0');
      } else {
        logoRef.current.classList.remove('left-1/2');
        logoRef.current.classList.remove('-translate-x-1/2');
        logoRef.current.classList.add('lg:left-20');
        logoRef.current.classList.add('xl:left-36');
        logoRef.current.classList.add('2xl:left-44');
        navigatorRef.current.classList.remove('opacity-0');
        navigatorRef.current.classList.add('opacity-100');
      }
    }
  }, [isShowFullHeader, logoRef, navigatorRef])

  return (
    <div className={"w-full h-28 lg:px-20 xl:px-36 2xl:px-44 fixed left-0 top-0 flex justify-end items-center z-10"}>
      <img
        ref={logoRef}
        className={"cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transitionClass hover:scale-105"}
        src="/assets/Logo_VKS.svg"
        alt="logo"
        onClick={() => scrollToAnchor('#main')}
      />
      <div ref={navigatorRef} className={"flex justify-end items-center w-1/2 opacity-0 transitionClass"}>
        <div
          className={"cursor-pointer font-normal xl:text-base 2xl:text-xl text-main_dark mx-2.5 transitionClass hover:scale-105"}
          onClick={() => scrollToAnchor('#propose')}
          style={isChangedHeaderColor ? {color: "white"} : {color: "#00605D"}}
        >
          Our propose
        </div>
        <div
          className={"cursor-pointer font-normal xl:text-base 2xl:text-xl text-main_dark mx-2.5 transitionClass hover:scale-105"}
          onClick={() => scrollToAnchor('#choose')}
          style={isChangedHeaderColor ? {color: "white"} : {color: "#00605D"}}
        >
          Choose us
        </div>
        <div
          className={"cursor-pointer font-normal xl:text-base 2xl:text-xl text-main_dark mx-2.5 transitionClass hover:scale-105"}
          onClick={() => scrollToAnchor('#about')}
          style={isChangedHeaderColor ? {color: "white"} : {color: "#00605D"}}
        >
          About us
        </div>
        <div
          className={"cursor-pointer font-normal xl:text-base 2xl:text-xl text-main_dark mx-2.5 transitionClass hover:scale-105"}
          onClick={() => scrollToAnchor('#contact')}
          style={isChangedHeaderColor ? {color: "white"} : {color: "#00605D"}}
        >
          Contact us
        </div>
      </div>
    </div>
  )
}
