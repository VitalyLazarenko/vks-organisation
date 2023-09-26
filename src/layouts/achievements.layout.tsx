import {FullWidthContainer} from "../components/fullScreenContainer";

export const AchievementsLayout = () => {
  return (
    <FullWidthContainer styles={""}>
      <div className={"h-screen w-full bg-[#E7E8E7] bg-cover bg-top xl:px-36 2xl:px-44 flex justify-center items-center"}>
        <div className={"w-full h-full flex flex-col items-center"}>
          <h2 className={"mt-20 font-black uppercase xl:text-3xl 2xl:text-4xl strokeText"}>Our Achievements</h2>
          <div className={"w-full h-full flex justify-between"}>
            <div className={"w-[30%] h-full pt-28 flex flex-col justify-start items-start relative"}>
              <div className={"w-full relative"}>
              <div className={"font-black uppercase xl:text-9xl 2xl:text-9xl strokeText"}>
                10
              </div>
              <h2 className={"absolute -bottom-8 left-10 uppercase font-medium text-main_dark xl:text-2xl 2xl:text-3xl"}>
                years of work experience
              </h2>
              </div>
            </div>
            <div className={"w-[30%] h-full flex justify-center items-center"}>
              <div className={"w-full relative"}>
                <div className={"font-black uppercase xl:text-9xl 2xl:text-9xl strokeText"}>
                  15
                </div>
                <h2 className={"absolute -bottom-8 left-10 uppercase font-medium text-main_dark xl:text-2xl 2xl:text-3xl"}>
                  Countries we worked with
                </h2>
              </div>
            </div>
            <div className={"w-[30%] h-full pb-16 flex justify-end items-end"}>
              <div className={"w-full relative"}>
                <div className={"font-black uppercase xl:text-9xl 2xl:text-9xl strokeText"}>
                  50+
                </div>
                <h2 className={"absolute bottom-0 left-10 uppercase font-medium text-main_dark xl:text-2xl 2xl:text-3xl"}>
                  projects done
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullWidthContainer>
  )
}
