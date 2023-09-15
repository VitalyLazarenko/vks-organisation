import {FullWidthContainer} from "../components/fullScreenContainer";

export const ContactLayout = () => {
  return (
    <FullWidthContainer>
      <div className={"h-screen min-w-screen bg-rose-500 flex justify-center items-center"}>
        <h2 className={"mt-20 font-black uppercase xl:text-3xl 2xl:text-4xl strokeText"}>Contact us</h2>
      </div>
    </FullWidthContainer>
  )
}
