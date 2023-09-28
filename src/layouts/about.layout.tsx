'use client';
import {FullWidthContainer} from "../components/fullScreenContainer";
import Ticker from "react-ticker";
import {it} from "node:test";

interface ISkillItem {
  text: string,
  isOutlined: boolean,
}

interface ISkillsTickers {
  line1: ISkillItem[],
  line2: ISkillItem[],
}

const skillTickers = {
  line1: [
    {
      text: "Full cycle Development website",
      isOutlined: true,
    },
    {
      text: "front end",
      isOutlined: false,
    },
    {
      text: "Back End",
      isOutlined: true,
    },
    {
      text: "3D Design / Modelling",
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
      text: "Create Brand Book",
      isOutlined: false,
    },
    {
      text: "Create Landing pages",
      isOutlined: true,
    },
  ],
  line2: [
    {
      text: "Full cycle Development website",
      isOutlined: false,
    },
    {
      text: "front end",
      isOutlined: true,
    },
    {
      text: "Back End",
      isOutlined: false,
    },
    {
      text: "3D Design / Modelling",
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
      text: "Create Brand Book",
      isOutlined: true,
    },
    {
      text: "Create Landing pages",
      isOutlined: false,
    },
  ]
}

export const AboutLayout = () => {
  const GetSkillsItem = (iterator: number) => {
    const selectedSkill = skillTickers.line1[iterator]
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
              className="flex justify-center items-center text-cente p-2.5 font-black uppercase xl:text-2xl 2xl:text-3xl strokeTextWhite">
              {selectedSkill.text}
            </div>
            :
            <div
              className="flex justify-center items-center ext-cente p-2.5 font-black uppercase xl:text-2xl 2xl:text-3xl">
              {selectedSkill.text}
            </div>
        }
      </div>
    )
  }

  return (
    <FullWidthContainer styles={""}>
      <div className={"h-screen w-full bg-img_about bg-cover bg-top flex flex-col justify-between"}>
        <div className={"xl:px-36 2xl:px-44 flex flex-col justify-center items-center"}>
          <div className={"w-full h-full flex flex-col justify-start items-center"}>
            <h2 className={"2xl:mt-20 xl:mt-16 font-black uppercase xl:text-3xl 2xl:text-4xl strokeTextWhite"}>About
              Us</h2>
            <div className={"w-full h-52 mt-12 mb-10 xl:px-24 flex justify-evenly items-center"}>
              <div className={"whiteFrameWrapper h-full w-52"}>
                <div className={"whiteFrameWrapper-diagonal h-full w-52"}>
                  <div className={"whiteFrameContainer h-full w-52"}>
                    <div className={"whiteFrameContainer-diagonal w-full h-full p-4 uppercase flex justify-center items-center"}>
                      <img
                        src="/assets/about%20us/avatar_1.jpg"
                        alt="avatar_1"
                        className={"w-full h-auto"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"whiteFrameWrapper h-full w-52"}>
                <div className={"whiteFrameWrapper-diagonal h-full w-52"}>
                  <div className={"whiteFrameContainer h-full w-52"}>
                    <div className={"whiteFrameContainer-diagonal w-full h-full p-4 uppercase flex justify-center items-center"}>
                      <img
                        src="/assets/about%20us/avatar_2.jpg"
                        alt="avatar_1"
                        className={"w-full h-auto"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"whiteFrameWrapper h-full w-52"}>
                <div className={"whiteFrameWrapper-diagonal h-full w-52"}>
                  <div className={"whiteFrameContainer h-full w-52"}>
                    <div className={"whiteFrameContainer-diagonal w-full h-full p-4 uppercase flex justify-center items-center"}>
                      <img
                        src="/assets/about%20us/avatar_3.jpg"
                        alt="avatar_1"
                        className={"w-full h-auto"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={"w-full xl:text-lg 2xl:text-2xl mt-6 text-white font-light flex justify-evenly items-center text-center"}>
              A vibrant team of friends specializing in cutting-edge web development. Consisting of Project Manager,
              Web Designer, Developer, and 3D Designer, we provide services for developing and tailoring websites
              according to our client`s criteria. To make our clients stand out amidst their competitors, we also
              offer 3D technologies implementation, enabling us to creatively highlight the unique aspects of each
              client`s website. We are a
            </div>
          </div>
        </div>
        <div className={"w-full h-fit uppercase flex flex-col justify-center items-start"}>
          <div className={"w-full h-1/2"}>
            <div className={"w-full h-2.5 flex flex-col justify-between"}>
              <div className={"w-full h-[1px] bg-line_normal"}/>
              <div className={"w-full h-[1px] bg-line_light"}/>
              <div className={"w-full h-[1px] bg-white"}/>
            </div>
            <Ticker
              speed={2}
            >
              {
                ({index}) => {
                  const iterator = (index + 1) % skillTickers.line1.length
                  return GetSkillsItem(iterator)
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
              speed={2}
            >
              {
                ({index}) => {
                  const iterator = (index + 1) % skillTickers.line1.length
                  return GetSkillsItem(iterator)
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
