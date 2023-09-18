import {FullWidthContainer} from "../components/fullScreenContainer";

export const AboutLayout = () => {
  return (
    <FullWidthContainer styles={""}>
      <div className={"h-screen w-full bg-img_about bg-cover bg-top flex flex-col justify-between"}>
        <div className={"xl:px-36 2xl:px-44 flex flex-col justify-center items-center"}>
          <div className={"w-full h-full flex flex-col justify-start items-center"}>
            <h2 className={"2xl:mt-20 xl:mt-16 font-black uppercase xl:text-3xl 2xl:text-4xl strokeTextWhite"}>About Us</h2>
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
            <div className={"w-full h-40 bg-blue-700/40 flex justify-evenly items-center"}>
              DESCRIPTION
            </div>
          </div>
        </div>
        <div className={"w-full h-32 bg-green-600/40 uppercase flex justify-center items-center"}>
          Skills
        </div>
      </div>
    </FullWidthContainer>
  )
}
