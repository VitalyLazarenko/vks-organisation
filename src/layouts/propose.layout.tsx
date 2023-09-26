import {FullWidthContainer} from "../components/fullScreenContainer";

export const ProposeLayout = () => {
  return (
    <FullWidthContainer styles={""}>
      <div className={"h-screen w-full bg-img_propose bg-cover bg-top xl:px-36 2xl:px-44 flex justify-center items-center"}>
        <div className={"w-full h-screen xl:pb-10 xl:pt-16 2xl:pt-20 2xl:pb-12 flex flex-col"}>
          <div className={"flex justify-end mt-3"}>
            <div className={"w-7/12 flex flex-col justify-start items-start"}>
              <h2 className={"font-black uppercase xl:text-3xl 2xl:text-4xl strokeText"}>What we propose</h2>

              <p className={"xl:text-lg 2xl:text-2xl text-main_dark font-normal mt-16 my-8"}>
                A vibrant team of friends specializing in cutting-edge web development. Consisting of Project Manager.
              </p>

              <div>
                <p className={"xl:text-lg 2xl:text-2xl text-main_dark font-normal"}>- Web Designer, Developer, and</p>
                <p className={"xl:text-lg 2xl:text-2xl text-main_dark font-normal"}>- 3D Designer, we provide
                  services</p>
                <p className={"xl:text-lg 2xl:text-2xl text-main_dark font-normal"}>- for developing and tailoring
                  websites</p>
                <p className={"xl:text-lg 2xl:text-2xl text-main_dark font-normal"}>- according to our client`s criteria.
                  To make</p>
                <p className={"xl:text-lg 2xl:text-2xl text-main_dark font-normal"}>- our clients stand out amidst their
                  competitors,</p>
              </div>
            </div>
          </div>
          <div
            className={"w-full h-full bg-rose-500/10 xl:mt-10 2xl:mt-14 flex justify-center items-center text-main_dark uppercase font-black"}
          >
            Bottom part
          </div>
        </div>
      </div>
    </FullWidthContainer>
  )
}
