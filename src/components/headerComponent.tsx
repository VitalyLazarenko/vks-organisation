'use client';
import {FC, MutableRefObject, useEffect, useRef} from "react";
import {scrollToAnchor} from "../helpers/scroll.helpers";

interface IHeaderProps {
  isShowFullHeader: boolean
}

export const HeaderComponent: FC<IHeaderProps> = ({isShowFullHeader}) => {
  const logoRef: MutableRefObject<HTMLImageElement | null> = useRef(null)
  const navigatorRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

  useEffect(() => {
    if (navigatorRef && navigatorRef.current && logoRef && logoRef.current) {
      if (isShowFullHeader) {
        logoRef.current.classList.remove('xl:left-36');
        logoRef.current.classList.remove('2xl:left-44');
        logoRef.current.classList.add('left-1/2');
        logoRef.current.classList.add('-translate-x-1/2');
        navigatorRef.current.classList.remove('opacity-100');
        navigatorRef.current.classList.add('opacity-0');
      } else {
        logoRef.current.classList.remove('left-1/2');
        logoRef.current.classList.remove('-translate-x-1/2');
        logoRef.current.classList.add('xl:left-36');
        logoRef.current.classList.add('2xl:left-44');
        navigatorRef.current.classList.remove('opacity-0');
        navigatorRef.current.classList.add('opacity-100');
      }
    }
  }, [isShowFullHeader, logoRef, navigatorRef])

  return (
    <div className={"w-full h-28 xl:px-36 2xl:px-44 fixed flex justify-end items-center"}>
      <img ref={logoRef} className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transitionClass"} src="/assets/Logo_VKS.svg" alt=""/>
      <div ref={navigatorRef} className={"flex justify-end items-center w-1/2 opacity-0 transitionClass"}>
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
