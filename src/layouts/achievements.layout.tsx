import {FullWidthContainer} from "../components/fullScreenContainer";

export const AchievementsLayout = () => {
  return (
    <FullWidthContainer styles={""}>
      <div className={"h-screen w-full bg-img_achievements bg-cover bg-top xl:px-36 2xl:px-44 flex justify-center items-center"}>
        <div className={"w-full h-full flex flex-col items-center"}>
          <h2 className={"mt-24 font-black uppercase xl:text-4xl 2xl:text-5xl strokeText"}>
            Our Achievements
          </h2>
          <div className={"w-full h-full flex justify-between"}>
            <div className={"w-[30%] h-full pt-28 flex flex-col justify-start items-start relative"}>
              <img src="/assets/achievements/10.svg" alt="10"/>
            </div>
            <div className={"w-[30%] h-full flex justify-center items-center"}>
              <img src="/assets/achievements/15.svg" alt="15"/>
            </div>
            <div className={"w-[30%] h-full pb-20 flex justify-end items-end"}>
                <img src="/assets/achievements/50.svg" alt="50"/>
            </div>
          </div>
        </div>
      </div>
    </FullWidthContainer>
  )
}
