import {FullWidthContainer} from "../components/fullScreenContainer";

export const AboutLayout = () => {
  return (
    <FullWidthContainer>
      <div className={"h-screen w-full bg-img_about bg-cover bg-top xl:px-36 2xl:px-44 flex justify-center items-center"}>
        <div className={"w-full h-full bg-rose-500/10 flex justify-center items-start"}>
          <h2 className={"mt-20 font-black uppercase xl:text-3xl 2xl:text-4xl strokeTextWhite"}>About Us</h2>
        </div>
      </div>
    </FullWidthContainer>
  )
}
