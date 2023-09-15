"use client"
import {useEffect, useRef, useState} from "react";
import {FullWidthContainer} from "../components/fullScreenContainer";
import {HeaderComponent} from "../components/headerComponent";
import {ProposeLayout} from "../layouts/propose.layout";
import {ChooseLayout} from "../layouts/choose.layout";
import {MainLayout} from "../layouts/main.layout";
import {AchievementsLayout} from "../layouts/achievements.layout";
import {AboutLayout} from "../layouts/about.layout";
import {ContactLayout} from "../layouts/contact.layout";

export default function Home() {
  const mainScreenRef = useRef(null);
  const [isShowHeader, setIsShowHeader] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is now visible on the screen
            setIsShowHeader(true)
          } else {
            // Element is no longer visible on the screen
            setIsShowHeader(false)
          }
        });
      },
      {
        root: null, // Set the root element (default is viewport)
        rootMargin: '0px', // Adjust the root margin as needed
        threshold: 0.5, // Specify the intersection threshold (e.g., 0.5 for 50% visibility)
      });

    if (mainScreenRef.current) {
      observer.observe(mainScreenRef.current);
      setIsShowHeader(false)
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (mainScreenRef.current) {
        observer.unobserve(mainScreenRef.current);
      }
    };
  }, []);

  return (
    <main>
      <HeaderComponent isShowFullHeader={isShowHeader}/>
      <div id={"main"} ref={mainScreenRef}>
        <MainLayout/>
      </div>
      <div id={"propose"}>
        <ProposeLayout/>
      </div>
      <div id={"choose"}>
        <ChooseLayout/>
      </div>
      <div id={"achievements"}>
        <AchievementsLayout/>
      </div>
      <div id={"about"}>
        <AboutLayout/>
      </div>
      <div id={"contact"}>
        <ContactLayout/>
      </div>
    </main>
  )
}
