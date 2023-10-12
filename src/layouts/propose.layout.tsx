'use client';
import {FullWidthContainer} from "../components/fullScreenContainer";
import {useEffect, useRef, useState} from "react";
import useStore from "../store/store";

const proposeItems = {
  line1: [
    {
      title: "Full cycle Development website",
      image: "",
      description: "",
    },
    {
      title: "Front end",
      image: "",
      description: "",
    },
    {
      title: "Back end",
      image: "",
      description: "",
    },
    {
      title: "3D Design / Modelling",
      image: "",
      description: "",
    },
  ],
  line2: [
    {
      title: "Ui / Ux",
      image: "",
      description: "",
    },
    {
      title: "Web Design",
      image: "",
      description: "",
    },
    {
      title: "Graphic Design",
      image: "",
      description: "",
    },
    {
      title: "Create Brand Book",
      image: "",
      description: "",
    },
    {
      title: "Create Landing pages",
      image: "",
      description: "",
    },
  ]
}

export const ProposeLayout = () => {
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
        // Show
      } else {
        // Hidden
      }
    }
  }, [isShow, container])

  return (
    <FullWidthContainer styles={""}>
      <div id={"propose"} ref={container} className={"h-screen w-full bg-img_propose bg-cover bg-left-top lg:px-20 xl:px-36 2xl:px-44 flex justify-center items-center"}>
        <div className={"w-full h-screen lg:pb-10 lg:pt-24 xl:pb-10 xl:pt-20 2xl:pt-24 2xl:pb-12 flex flex-col"}>
          <div className={"flex justify-end mt-3"}>
            <div className={"w-5/12 h-min flex justify-center items-center"}>
              <img
                className="w-auto lg:max-h-[330px] xl:max-h-[320px] 2xl:max-h-[400px] -rotate-12"
                src="/assets/propose/iPhone_12_Graphite_Pro.webp"
                alt="iphone"
              />
            </div>
            <div className={"w-7/12 flex flex-col justify-start items-start"}>
              <h2 className={"font-black uppercase lg:text-3xl xl:text-3xl 2xl:text-4xl strokeText"}>What we propose</h2>

              <p className={"lg:text-base xl:text-base 2xl:text-xl text-main_dark font-normal lg:mt-10 xl:mt-10 2xl:mt-16 lg:my-8 xl:my-8 2xl:my-8"}>
                Meet our dynamic team of friends, experts in cutting-edge web development. With our Project Manager,
                Web Designer, Developer, and 3D Designer, we deliver tailored websites that precisely match our client&apos;s needs.
                <br/>
                <br/>
                But here&apos;s the twist – we go beyond the ordinary. We weave 3D technology into the mix, using it to
                magnify the distinctive features of every client&apos;s website. We&apos;re a crew that thrives on creativity,
                camaraderie, and a modern outlook, constantly embracing new challenges. Join us on an exploration of
                the digital universe!
              </p>
            </div>
          </div>
          <div
            className={"w-full h-full flex flex-col justify-evenly items-center"}
          >
            <div className={"line-1 w-full h-auto flex justify-evenly items-center"}>
              {proposeItems.line1.map(el => (
                <div key={el.title} className={"buttonFrameWrapper"}>
                  <div className={"buttonFrameWrapper-diagonal"}>
                    <div className={"buttonFrameContainer"}>
                      <div className={"buttonFrameContainer-diagonal capitalize lg:py-3 lg:px-4 lg:text-sm xl:text-lg xl:py-3 xl:px-6 2xl:text-lg 2xl:py-3 2xl:px-6 text-main_dark font-light"}>
                        {el.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={"line-2 w-full h-auto flex justify-around items-center"}>
              {proposeItems.line2.map(el => (
                <div key={el.title} className={"buttonFrameWrapper"}>
                  <div className={"buttonFrameWrapper-diagonal"}>
                    <div className={"buttonFrameContainer"}>
                      <div className={"buttonFrameContainer-diagonal capitalize lg:py-3 lg:px-4 lg:text-sm xl:text-lg xl:py-3 xl:px-6 2xl:text-lg 2xl:py-3 2xl:px-6 text-main_dark font-light"}>
                        {el.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FullWidthContainer>
  )
}
