import {FullWidthContainer} from "../components/fullScreenContainer";
import Ticker from "react-ticker";

export const AboutLayout = () => {
  return (
    <FullWidthContainer styles={""}>
      <div className={"h-screen w-full bg-img_about bg-cover bg-top flex flex-col justify-between"}>
        <div className={"xl:px-36 2xl:px-44 flex flex-col justify-center items-center"}>
          <div className={"w-full h-full flex flex-col justify-start items-center"}>
            <h2 className={"2xl:mt-20 xl:mt-16 font-black uppercase xl:text-3xl 2xl:text-4xl strokeTextWhite"}>About
              Us</h2>
            <div className={"w-full h-52 mt-12 mb-10 flex justify-evenly items-center"}>
              <div className={"h-full w-52 bg-indigo-500/40 uppercase flex justify-center items-center"}>
                Avatar
              </div>
              <div className={"h-full w-52 bg-indigo-500/40 uppercase flex justify-center items-center"}>
                Avatar
              </div>
              <div className={"h-full w-52 bg-indigo-500/40 uppercase flex justify-center items-center"}>
                Avatar
              </div>
            </div>
            <div className={"w-full h-40 flex justify-evenly items-center text-center"}>
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
              <div className={"w-full h-[1px] bg-white"}/>
              <div className={"w-full h-[1px] bg-white"}/>
              <div className={"w-full h-[1px] bg-white"}/>
            </div>
            <Ticker>
              {({index}) => (
                <div className="flex justify-between items-center">
                  <div className="w-[1px] h-5 bg-white mr-1"></div>
                  {/* Лінія 1 */}
                  <div className="w-[1px] h-5 bg-white mr-1"></div>
                  {/* Лінія 2 */}
                  <div className="w-[1px] h-5 bg-white mr-1"></div>
                  {/* Лінія 3 */}
                  <div className="text-cente p-2.5">Ваш текст</div>
                </div>
              )}
            </Ticker>
            <div className={"w-full h-2.5 flex flex-col justify-between"}>
              <div className={"w-full h-[1px] bg-white"}/>
              <div className={"w-full h-[1px] bg-white"}/>
              <div className={"w-full h-[1px] bg-white"}/>
            </div>
          </div>
          <div className={"w-full h-max "}>
            <Ticker>
              {({index}) => (
                <div className="flex justify-between items-center">
                  <div className="w-[1px] h-5 bg-white mr-1"></div>
                  {/* Лінія 1 */}
                  <div className="w-[1px] h-5 bg-white mr-1"></div>
                  {/* Лінія 2 */}
                  <div className="w-[1px] h-5 bg-white mr-1"></div>
                  {/* Лінія 3 */}
                  <div className="text-cente p-2.5">Ваш текст</div>
                </div>
              )}
            </Ticker>
            <div className={"w-full h-2.5 flex flex-col justify-between"}>
              <div className={"w-full h-[1px] bg-white"}/>
              <div className={"w-full h-[1px] bg-white"}/>
              <div className={"w-full h-[1px] bg-white"}/>
            </div>
          </div>
        </div>
      </div>
    </FullWidthContainer>
  )
}
