'use client';
import {FullWidthContainer} from "../components/fullScreenContainer";
import Ticker from "react-ticker";
import {it} from "node:test";
import {useEffect, useRef, useState} from "react";
import useStore from "../store/store";

interface ISkillItem {
  text: string,
  isOutlined: boolean,
}
interface ISkillsTickers {
  [key: string]: ISkillItem[],

}
interface IUser {
  name: string,
  avatar: string,
  position: string,

}

const skillTickers: ISkillsTickers = {
  "line1": [
    {
      text: "3D Design",
      isOutlined: true,
    },
    {
      text: "Figma",
      isOutlined: false,
    },
    {
      text: "Illustrator",
      isOutlined: true,
    },
    {
      text: "React.js",
      isOutlined: false,
    },
    {
      text: "Ui / Ux",
      isOutlined: true,
    },
    {
      text: "Web Design",
      isOutlined: false,
    },
    {
      text: "Graphic Design",
      isOutlined: true,
    },
    {
      text: "Photoshop",
      isOutlined: false,
    },
    {
      text: "Three.js",
      isOutlined: true,
    },
    {
      text: "Fabric",
      isOutlined: false,
    },
    {
      text: "Vue",
      isOutlined: true,
    },
    {
      text: "AR / VR",
      isOutlined: false,
    },
    {
      text: "Fiber",
      isOutlined: true,
    },
    {
      text: "WebGl",
      isOutlined: false,
    },
    {
      text: "Material UI",
      isOutlined: true,
    },
    {
      text: "Landing Page",
      isOutlined: false,
    },
    {
      text: "Plotly",
      isOutlined: true,
    },
    {
      text: "Branding Design",
      isOutlined: false,
    },
    {
      text: "QA Testing",
      isOutlined: true,
    },
    {
      text: "Blender",
      isOutlined: false,
    },
  ],
  "line2": [
    {
      text: "3D Design",
      isOutlined: false,
    },
    {
      text: "Figma",
      isOutlined: true,
    },
    {
      text: "Illustrator",
      isOutlined: false,
    },
    {
      text: "React.js",
      isOutlined: true,
    },
    {
      text: "Ui / Ux",
      isOutlined: false,
    },
    {
      text: "Web Design",
      isOutlined: true,
    },
    {
      text: "Graphic Design",
      isOutlined: false,
    },
    {
      text: "Photoshop",
      isOutlined: true,
    },
    {
      text: "Three.js",
      isOutlined: false,
    },
    {
      text: "Fabric",
      isOutlined: true,
    },
    {
      text: "Vue",
      isOutlined: false,
    },
    {
      text: "AR / VR",
      isOutlined: true,
    },
    {
      text: "Fiber",
      isOutlined: false,
    },
    {
      text: "WebGl",
      isOutlined: true,
    },
    {
      text: "Material UI",
      isOutlined: false,
    },
    {
      text: "Landing Page",
      isOutlined: true,
    },
    {
      text: "Plotly",
      isOutlined: false,
    },
    {
      text: "Branding Design",
      isOutlined: true,
    },
    {
      text: "QA Testing",
      isOutlined: false,
    },
    {
      text: "Blender",
      isOutlined: true,
    },
  ]
}

const users: IUser[] = [
  {
    name: "Vitalii Lazarenko",
    avatar: "/assets/about%20us/avatar_1.jpg",
    position: "Head of the development department"
  },
  {
    name: "Kayte",
    avatar: "/assets/about%20us/avatar_2.jpg",
    position: "Head of the manager department"
  },
  {
    name: "Sofiia Tonkonog",
    avatar: "/assets/about%20us/avatar_3.jpg",
    position: "Head of the creative and Design department"
  }
]

export const AboutLayout = () => {
  const container = useRef(null)
  const [isShow, setIsShow] = useState(false)
  const toggleChangeHeaderColor = useStore((state) => state.toggleChangeHeaderColor)

  const GetSkillsItem = (iterator: number, line: string = "line1") => {
    const currentLine = skillTickers[line]

    console.log('currentLine',currentLine);

    const selectedSkill = currentLine[iterator]

    console.log('selectedSkill', selectedSkill);

    return (
      <div className="flex justify-between items-center">
        <div className="w-[1px] h-5 bg-line_normal mr-1"/>
        {/* Line 1 */}
        <div className="w-[1px] h-5 bg-line_light mr-1"/>
        {/* Line 2 */}
        <div className="w-[1px] h-5 bg-white mr-1"/>
        {/* Line 3 */}

        {
          selectedSkill.isOutlined ?
            <div
              className="flex justify-center items-center text-cente p-2.5 font-black uppercase lg:text-3xl xl:text-2xl 2xl:text-3xl strokeTextWhite">
              {selectedSkill.text}
            </div>
            :
            <div
              className="flex justify-center items-center ext-cente p-2.5 font-black uppercase lg:text-3xl xl:text-2xl 2xl:text-3xl text-white">
              {selectedSkill.text}
            </div>
        }
      </div>
    )
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is now visible on the screen
            setIsShow(true)
            toggleChangeHeaderColor(true)
          } else {
            // Element is no longer visible on the screen
            setIsShow(false)
            toggleChangeHeaderColor(false)
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
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (container.current) {
        observer.unobserve(container.current);
        toggleChangeHeaderColor(false)
      }
    };
  }, []);

  return (
    <FullWidthContainer styles={""}>
      <div
        id={"about"}
        ref={container}
        className={"h-screen w-full bg-img_about bg-cover bg-top flex flex-col justify-between"}
      >
        <div className={"lg:px-20 xl:px-36 2xl:px-44 flex flex-col justify-center items-center"}>
          <div className={"w-full h-full flex flex-col justify-start items-center"}>
            <h2 className={"lg:mt-24 xl:mt-20 2xl:mt-24 font-black uppercase lg:text-3xl xl:text-3xl 2xl:text-4xl strokeTextWhite"}>About
              Us</h2>
            <div className={"w-full h-52 mt-12 lg:mb-0 xl:mb-10 2xl:mb-10 lg:px-20 xl:px-24 2xl:px-24 flex justify-evenly items-center"}>
              {users.map((user) => (
                <div key={user.name} className={"whiteFrameWrapper h-full lg:w-36 xl:w-48 2xl:w-52"}>
                  <div className={"whiteFrameWrapper-diagonal h-fit lg:w-36 xl:w-48 2xl:w-52"}>
                    <div className={"whiteFrameContainer h-fit lg:w-36 xl:w-48 2xl:w-52"}>
                      <div
                        className={"whiteFrameContainer-diagonal w-full h-full lg:p-2 xl:p-3 2xl:p-4 uppercase flex justify-center items-center"}>
                        <img
                          src={user.avatar}
                          alt="avatar_1"
                          className={"w-full h-auto"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={"w-full lg:text-base lg:mt-0 xl:text-base xl:mt-2 2xl:text-xl 2xl:mt-6 text-white font-light flex justify-evenly items-center text-center"}>
              A vibrant team of friends specializing in cutting-edge web development. Consisting of Project Manager,
              Web Designer, Developer, and 3D Designer, we provide services for developing and tailoring websites
              according to our client&apos;s criteria.
              To make our clients stand out amidst their competitors, we also
              offer 3D technologies implementation, enabling us to creatively highlight the unique aspects of each
              client&apos;s website. We are a team of boundless creativity, camaraderie, and modernity, eagerly embracing
              new challenges. Let&apos;s explore the universe together!
            </div>
          </div>
        </div>
        <div className={"w-screen h-fit uppercase flex flex-col justify-center items-start"}>
          <div className={"w-full h-1/2"}>
            <div className={"w-full h-2.5 flex flex-col justify-between"}>
              <div className={"w-full h-[1px] bg-line_normal"}/>
              <div className={"w-full h-[1px] bg-line_light"}/>
              <div className={"w-full h-[1px] bg-white"}/>
            </div>
            <Ticker
              speed={3}
            >
              {
                ({index}) => {
                  const iterator = (index + 1) % skillTickers.line1.length
                  return GetSkillsItem(iterator, "line1")
                }
              }
            </Ticker>
            <div className={"w-full h-2.5 flex flex-col justify-between"}>
              <div className={"w-full h-[1px] bg-line_normal"}/>
              <div className={"w-full h-[1px] bg-line_light"}/>
              <div className={"w-full h-[1px] bg-white"}/>
            </div>
          </div>
          <div className={"w-full h-max pt-1"}>
            <Ticker
              direction={"toRight"}
              offset={"100%"}
              speed={3}
            >
              {
                ({index}) => {
                  const iterator = (index + 1) % skillTickers.line2.length
                  return GetSkillsItem(iterator, "line2")
                }
              }
            </Ticker>
            <div className={"w-full h-2.5 flex flex-col justify-between"}>
              <div className={"w-full h-[1px] bg-white"}/>
              <div className={"w-full h-[1px] bg-line_light"}/>
              <div className={"w-full h-[1px] bg-line_normal"}/>
            </div>
          </div>
        </div>
      </div>
    </FullWidthContainer>
  )
}
