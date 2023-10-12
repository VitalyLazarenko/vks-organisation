'use client';
import {scrollToAnchor} from "../helpers/scroll.helpers";
import React, {MutableRefObject, useEffect, useRef, useState} from "react";
import {FullWidthContainer} from "../components/fullScreenContainer";
import useStore from "../store/store";

export const MainLayout = () => {
  const container = useRef(null)
  const navigator: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const [isShow, setIsShow] = useState(false)
  const toggleHeader = useStore((state) => state.toggleHeader)
  const toggleChangeHeaderColor = useStore((state) => state.toggleChangeHeaderColor)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is now visible on the screen
            setIsShow(true)
          } else {
            // Element is no longer visible on the screen
            setIsShow(false)
          }
        });
      },
      {
        root: null, // Set the root element (default is viewport)
        rootMargin: '0px', // Adjust the root margin as needed
        threshold: 0.5, // Specify the intersection threshold (e.g., 0.5 for 50% visibility)
      });

    if (container.current) {
      observer.observe(container.current);
      setIsShow(false)
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (container.current) {
        observer.unobserve(container.current);
      }
    };
  }, []);
  useEffect(() => {
    if (navigator && navigator.current) {
      if (isShow) {
        toggleHeader(true)
        toggleChangeHeaderColor(false)
        navigator.current.classList.remove('opacity-0');
        navigator.current.classList.add('opacity-100');
      } else {
        toggleHeader(false)
        toggleChangeHeaderColor(false)
        navigator.current.classList.remove('opacity-100');
        navigator.current.classList.add('opacity-0');
      }
    }
  }, [isShow, navigator])

  return (
    <FullWidthContainer styles={""}>
      <div
        id={"main"}
        ref={container}
        className={"h-screen w-full bg-img_main bg-cover bg-bottom lg:px-20 xl:px-36 2xl:px-44 flex justify-center items-center"}>
        <div className="h-full w-full flex">
          <div className="w-1/2 h-full flex justify-center items-center">
            <h1 className={"uppercase lg:text-4xl xl:text-5xl 2xl:text-6xl strokeText"}>
              Enhancing the Future through Technology
            </h1>
          </div>
          <div className="w-1/2 h-full flex items-end justify-end">
            <div ref={navigator} className={"flex justify-end items-center pb-7 opacity-0 transitionClass"}>
              <div
                className={"cursor-pointer font-normal xl:text-base 2xl:text-xl text-main_dark mx-2.5 transitionClass hover:scale-105"}
                onClick={() => scrollToAnchor('#propose')}
              >
                Our propose
              </div>
              <div
                className={"cursor-pointer font-normal xl:text-base 2xl:text-xl text-main_dark mx-2.5 transitionClass hover:scale-105"}
                onClick={() => scrollToAnchor('#choose')}
              >
                Choose us
              </div>
              <div
                className={"cursor-pointer font-normal xl:text-base 2xl:text-xl text-main_dark mx-2.5 transitionClass hover:scale-105"}
                onClick={() => scrollToAnchor('#about')}
              >
                About us
              </div>
              <div
                className={"cursor-pointer font-normal xl:text-base 2xl:text-xl text-main_dark mx-2.5 transitionClass hover:scale-105"}
                onClick={() => scrollToAnchor('#contact')}
              >
                Contact us
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullWidthContainer>
  )
}
