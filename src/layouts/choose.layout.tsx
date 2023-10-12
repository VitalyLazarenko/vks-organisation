import {FullWidthContainer} from "../components/fullScreenContainer";

export const ChooseLayout = () => {
  return (
    <FullWidthContainer styles={""}>
      <div className={"h-screen w-full bg-img_choose bg-cover bg-top lg:px-20 xl:px-36 2xl:px-44 flex justify-center items-center"}>
        <div className={"w-full h-full flex flex-col justify-center items-center"}>
          <h2 className={"lg:mt-24 xl:mt-20 2xl:mt-24 font-black uppercase lg:text-3xl xl:text-3xl 2xl:text-4xl strokeTextWhite"}>Why choose us</h2>
          <div className={"w-full h-full py-14"}>
            <div className={"w-full h-1/2 flex justify-evenly"}>
              <div className={"w-1/4 h-full flex flex-col items-center justify-center"}>
                <img src="/assets/choose/24_7_new.svg" alt=""/>
                <h2 className={"lg:text-sm xl:text-base 2xl:text-lg mt-5 text-white font-extralight text-center"}>
                  We are in touch with you 24/7. And it`s OK if you are far from the technical knowledge and terms.
                </h2>
              </div>
              <div className={"w-1/4 h-full flex flex-col items-center justify-center"}>
                <img src="/assets/choose/Full_Cycle_new.svg" alt=""/>
                <h2 className={"lg:text-sm xl:text-base 2xl:text-lg mt-5 text-white font-extralight text-center"}>
                  We deal with the full development cycle. From the idea to the first client.
                </h2>
              </div>
              <div className={"w-1/4 h-full flex flex-col items-center justify-center"}>
                <img src="/assets/choose/Agile_new.svg" alt=""/>
                <h2 className={"lg:text-sm xl:text-base 2xl:text-lg mt-5 text-white font-extralight text-center"}>
                  We use Agile and SCRUM methodologies in our work.
                </h2>
              </div>
            </div>
            <div className={"w-full h-1/2 flex justify-evenly pt-6"}>
              <div className={"xl:w-1/4 h-full flex flex-col items-center justify-center"}>
                <img src="/assets/choose/NDA_new.svg" alt=""/>
                <h2 className={"lg:text-sm xl:text-base 2xl:text-lg mt-5 text-white font-extralight text-center"}>
                  All ideas and commercial information will be protected.<br/>
                  We always sign an NDA.
                </h2>
              </div>
              <div className={"w-1/4 h-full flex flex-col items-center justify-center"}>
                <img src="/assets/choose/100_new.svg" alt=""/>
                <h2 className={"lg:text-sm xl:text-base 2xl:text-lg mt-5 text-white font-extralight text-center"}>
                  We are focused on results and want you to be 100% satisfied.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullWidthContainer>
  )
}
