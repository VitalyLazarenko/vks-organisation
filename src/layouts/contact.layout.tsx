'use client';
import {FullWidthContainer} from "../components/fullScreenContainer";
import {FooterComponent} from "../components/footerComponent";
import {useEffect, useRef, useState} from "react";

export const ContactLayout = () => {
  const container = useRef(null)
  const [isShow, setIsShow] = useState(false)


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
      <div id={"contact"} ref={container} className={"h-screen w-full bg-img_contact bg-cover bg-top relative"}>
        <div className={"w-full h-full lg:px-20 xl:px-36 2xl:px-44"}>
          <div className={"lg:w-7/12 xl:w-1/2 2xl:w-5/12 h-full flex flex-col items-center"}>
            <h2 className={"lg:mt-24 xl:mt-24 2xl:mt-24 lg:mb-12 xl:mb-8 2xl:mb-14 font-black uppercase lg:text-3xl xl:text-3xl 2xl:text-4xl strokeText"}>Contact
              us</h2>
            <div className={"darkFrameWrapper w-full min-h-1/2"}>
              <div className={"darkFrameWrapper-diagonal w-full h-full"}>
                <div className={"darkFrameContainer w-full h-full"}>
                  <div
                    className={"darkFrameContainer-diagonal w-full h-full lg:p-8 xl:p-10 2xl:p-12 flex flex-col justify-between items-center"}>
                    <div className={"w-full flex justify-between items-center"}>
                      <input
                        type="text"
                        placeholder={"Your name"}
                        className={"lg:text-sm xl:text-base 2xl:text-base w-5/12 h-8 px-2 bg-transparent text-main_dark border-b border-main_light hover:border-main_dark focus:outline-none focus:w-1/2 transitionClass"}
                      />
                      <input
                        type="text"
                        placeholder={"Your email"}
                        className={"lg:text-sm xl:text-base 2xl:text-base w-5/12 h-8 px-2 bg-transparent text-main_dark border-b border-main_light hover:border-main_dark focus:outline-none focus:w-1/2 transitionClass"}
                      />
                    </div>
                    <div className={"w-full lg:my-4 xl:my-6 2xl:my-8"}>
                <textarea
                  id="body_message"
                  name="body_message"
                  placeholder={"Your message"}
                  rows={5}
                  className={"w-full h-full bg-transparent text-main_dark box-border p-2 border border-main_light focus:outline-none"}
                />
                    </div>
                    <div className={"w-full flex justify-between items-center"}>
                      <div className={"flex justify-start items-center"}>
                        <div className={"lg:mr-2 xl:mr-3 2xl:mr-2 lg:w-5 xl:w-6 2xl:w-6 lg:h-5 xl:h-6 2xl:h-6 border border-main_light flex justify-center items-center"}>
                          <div className={"lg:w-1.5 xl:w-2 2xl:w-2 lg:h-1.5 xl:h-2 2xl:h-2 bg-main_dark rotate-45"}/>
                        </div>
                        <label htmlFor="radio1" className={"lg:text-sm xl:text-base 2xl:text-base text-main_light capitalize font-extralight"}>
                          Design
                        </label>
                      </div>
                      <div className={"flex justify-start items-center"}>
                        <div className={"lg:mr-2 xl:mr-3 2xl:mr-2 lg:w-5 xl:w-6 2xl:w-6 lg:h-5 xl:h-6 2xl:h-6 border border-main_light flex justify-center items-center"}>
                          <div className={"lg:w-1.5 xl:w-2 2xl:w-2 lg:h-1.5 xl:h-2 2xl:h-2 bg-main_dark rotate-45"}/>
                        </div>
                        <label htmlFor="radio1" className={"lg:text-sm xl:text-base 2xl:text-base text-main_light capitalize font-extralight"}>
                          Develop
                        </label>
                      </div>
                      <div className={"flex justify-start items-center"}>
                        <div className={"lg:mr-2 xl:mr-3 2xl:mr-2 lg:w-5 xl:w-6 2xl:w-6 lg:h-5 xl:h-6 2xl:h-6 border border-main_light flex justify-center items-center"}>
                          <div className={"lg:w-1.5 xl:w-2 2xl:w-2 lg:h-1.5 xl:h-2 2xl:h-2 bg-main_dark rotate-45"}/>
                        </div>
                        <label htmlFor="radio1" className={"lg:text-sm xl:text-base 2xl:text-base text-main_light capitalize font-extralight"}>
                          Full cycle
                        </label>
                      </div>
                      <div className={"flex justify-start items-center"}>
                        <div className={"lg:mr-2 xl:mr-3 2xl:mr-2 lg:w-5 xl:w-6 2xl:w-6 lg:h-5 xl:h-6 2xl:h-6 border border-main_light flex justify-center items-center"}>
                          <div className={"lg:w-1.5 xl:w-2 2xl:w-2 lg:h-1.5 xl:h-2 2xl:h-2 bg-main_dark rotate-45"}/>
                        </div>
                        <label htmlFor="radio1" className={"lg:text-sm xl:text-base 2xl:text-base text-main_light capitalize font-extralight"}>
                          Another
                        </label>
                      </div>
                    </div>
                    <div className={"w-full mt-9 flex justify-center items-center"}>
                      <div className={"buttonFrameWrapper"}>
                        <div className={"buttonFrameWrapper-diagonal"}>
                          <div className={"buttonFrameContainer"}>
                            <div className={"buttonFrameContainer-diagonal"}>
                              <button className={"px-9 py-2 text-base text-main_light capitalize font-extralight"}>
                                Send
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent/>
      </div>
    </FullWidthContainer>
  )
}
