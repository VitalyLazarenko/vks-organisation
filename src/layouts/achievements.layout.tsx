'use client';
import {FullWidthContainer} from "../components/fullScreenContainer";
import {useEffect, useRef, useState} from "react";
import useStore from "../store/store";

export const AchievementsLayout = () => {
  const container = useRef(null)
  const [isShow, setIsShow] = useState(false)
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
    if (container && container.current) {
      if (isShow) {
        //Show
      } else {
        //Hidden
      }
    }
  }, [isShow, container])

  return (
    <FullWidthContainer styles={""}>
      <div ref={container} className={"h-screen w-full bg-img_achievements bg-cover bg-top lg:px-20 xl:px-36 2xl:px-44 flex justify-center items-center"}>
        <div className={"w-full h-full flex flex-col items-center"}>
          <h2 className={"lg:mt-24 xl:mt-24 2xl:mt-28 font-black uppercase lg:text-3xl xl:text-3xl 2xl:text-4xl strokeText"}>
            Our Achievements
          </h2>
          <div className={"w-full h-full flex justify-between"}>
            <div className={"lg:w-[25%] xl:w-[25%] 2xl:w-[30%] h-full lg:pt-20 xl:pt-20 2xl:pt-24 flex flex-col justify-start items-start relative"}>
              <img src="/assets/achievements/10_new.svg" alt="10"/>
            </div>
            <div className={"lg:w-[25%] xl:w-[25%] 2xl:w-[30%] h-full flex justify-center items-center"}>
              <img src="/assets/achievements/15_new.svg" alt="15"/>
            </div>
            <div className={"lg:w-[25%] xl:w-[25%] 2xl:w-[30%] h-full lg:pb-20 xl:pb-20 2xl:pb-24 flex justify-end items-end"}>
                <img src="/assets/achievements/50_new.svg" alt="50"/>
            </div>
          </div>
        </div>
      </div>
    </FullWidthContainer>
  )
}
