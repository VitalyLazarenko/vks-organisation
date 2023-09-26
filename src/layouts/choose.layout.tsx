import {FullWidthContainer} from "../components/fullScreenContainer";

export const ChooseLayout = () => {
  return (
    <FullWidthContainer styles={""}>
      <div className={"h-screen w-full bg-img_choose bg-cover bg-top xl:px-36 2xl:px-44 flex justify-center items-center"}>
        <div className={"w-full h-full flex flex-col justify-center items-center"}>
          <h2 className={"mt-20 font-black uppercase xl:text-3xl 2xl:text-4xl strokeTextWhite"}>Why choose us</h2>
          <div className={"w-full h-full py-14"}>
            <div className={"w-full h-1/2 flex justify-evenly"}>
              <div className={"w-1/4 h-full flex flex-col items-center justify-center"}>
                <img src="/assets/choose/24-7.svg" alt=""/>
                <h2 className={"xl:text-base 2xl:text-xl mt-5 text-white font-extralight text-center"}>
                  We are in touch with you 24/7. And it`s OK if you are far from the technical knowledge and terms
                </h2>
              </div>
              <div className={"w-1/4 h-full flex flex-col items-center justify-center"}>
                <img src="/assets/choose/Full_Cycle.svg" alt=""/>
                <h2 className={"xl:text-base 2xl:text-xl mt-5 text-white font-extralight text-center"}>
                  We deal with the full development cycle. From the idea to the first client
                </h2>
              </div>
              <div className={"w-1/4 h-full flex flex-col items-center justify-center"}>
                <img src="/assets/choose/Agile.svg" alt=""/>
                <h2 className={"xl:text-base 2xl:text-xl mt-5 text-white font-extralight text-center"}>
                  We use Agile and SCRUM methods in our work
                </h2>
              </div>
            </div>
            <div className={"w-full h-1/2 flex justify-evenly pt-6"}>
              <div className={"w-1/4 h-full flex flex-col items-center justify-center"}>
                <img src="/assets/choose/NDA.svg" alt=""/>
                <h2 className={"xl:text-base 2xl:text-xl mt-5 text-white font-extralight text-center"}>
                  All ideas and commercial information will be protected.
                  We always sign NDA
                </h2>
              </div>
              <div className={"w-1/4 h-full flex flex-col items-center justify-center"}>
                <img src="/assets/choose/100.svg" alt=""/>
                <h2 className={"xl:text-base 2xl:text-xl mt-5 text-white font-extralight text-center"}>
                  We are focused on results and want you to be 100% satisfied
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullWidthContainer>
  )
}
