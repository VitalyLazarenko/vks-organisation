import {FullWidthContainer} from "../components/fullScreenContainer";

export const AchievementsLayout = () => {
  return (
    <FullWidthContainer styles={""}>
      <div className={"h-screen w-full bg-img_achievements bg-cover bg-top lg:px-20 xl:px-36 2xl:px-44 flex justify-center items-center"}>
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
