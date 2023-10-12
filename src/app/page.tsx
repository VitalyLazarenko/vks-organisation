'use client';
import {HeaderComponent} from "../components/headerComponent";
import {ProposeLayout} from "../layouts/propose.layout";
import {ChooseLayout} from "../layouts/choose.layout";
import {MainLayout} from "../layouts/main.layout";
import {AchievementsLayout} from "../layouts/achievements.layout";
import {AboutLayout} from "../layouts/about.layout";
import {ContactLayout} from "../layouts/contact.layout";
import {isBrowser, isMobile, isTablet} from 'react-device-detect';
import {useEffect, useState} from "react";

export default function Home() {
  const [isPCDevice, setIsPCDevice] = useState(false)
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  const [isTabletDevice, setIsTabletDevice] = useState(false)
  const [isRotatedDevice, setIsRotatedDevice] = useState(true)

  const handleWindowSizeChange = (event: any) => {
    if (window.innerHeight > window.innerWidth) {
      setIsRotatedDevice(true)
    } else {
      setIsRotatedDevice(false)
    }
  }

  useEffect(() => {
    if (window.innerHeight > window.innerWidth) {
      setIsRotatedDevice(true)
    } else {
      setIsRotatedDevice(false)
    }
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  useEffect(() => {
    setIsTabletDevice(isTablet)
    setIsMobileDevice(isMobile)
    setIsPCDevice(isBrowser)
  }, [isMobile, isTablet, isBrowser])

  return (
    <main>
      {
        isMobileDevice && !isTabletDevice?
          <div className={"w-screen h-screen bg-main_light text-white  text-center flex flex-col justify-center items-center"}>
            <img
              className={"mb-6"}
              src="/assets/choose/Full_Cycle_new.svg"
              alt="cycle"
            />
            Coming soon... <br/>
            Currently, you can use the PC version of the site or the tablet version.
          </div> : null
      }
      {
        isTabletDevice && isRotatedDevice ?
        <div className={"w-screen h-screen bg-main_light text-white  text-center flex flex-col justify-center items-center"}>
          <img
            className={"mb-6"}
            src="/assets/choose/Full_Cycle_new.svg"
            alt="cycle"
          />
          Coming soon... <br/>
          Currently, you can use the PC version of the site or the tablet version.
        </div> : null
      }
      {!isMobileDevice && !isTabletDevice && !isRotatedDevice && isPCDevice || !isPCDevice && isTabletDevice && !isRotatedDevice ? <div>
        <HeaderComponent/>
        <MainLayout/>
        <ProposeLayout/>
        <ChooseLayout/>
        <AchievementsLayout/>
        <AboutLayout/>
        <ContactLayout/>
      </div> : null}
    </main>
  )
}
