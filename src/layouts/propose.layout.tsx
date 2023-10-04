import {FullWidthContainer} from "../components/fullScreenContainer";

const proposeItems = {
  line1: [
    {
      title: "Full cycle Development website",
      image: "",
      description: "",
    },
    {
      title: "Front end",
      image: "",
      description: "",
    },
    {
      title: "Back end",
      image: "",
      description: "",
    },
    {
      title: "3D Design / Modelling",
      image: "",
      description: "",
    },
  ],
  line2: [
    {
      title: "Ui / Ux",
      image: "",
      description: "",
    },
    {
      title: "Web Design",
      image: "",
      description: "",
    },
    {
      title: "Graphic Design",
      image: "",
      description: "",
    },
    {
      title: "Create Brand Book",
      image: "",
      description: "",
    },
    {
      title: "Create Landing pages",
      image: "",
      description: "",
    },
  ]
}

export const ProposeLayout = () => {
  return (
    <FullWidthContainer styles={""}>
      <div className={"h-screen w-full bg-img_propose bg-cover bg-top xl:px-36 2xl:px-44 flex justify-center items-center"}>
        <div className={"w-full h-screen xl:pb-10 xl:pt-20 2xl:pt-24 2xl:pb-12 flex flex-col"}>
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
            className={"w-full h-full xl:mt-10 2xl:mt-14"}
          >
            <div className={"line-1 w-full h-1/2 flex justify-evenly items-center"}>
              {proposeItems.line1.map(el => (
                <div key={el.title} className={"buttonFrameWrapper"}>
                  <div className={"buttonFrameWrapper-diagonal"}>
                    <div className={"buttonFrameContainer"}>
                      <div className={"buttonFrameContainer-diagonal bg-white bg-opacity-30 capitalize py-3 px-6 text-lg text-main_dark font-light"}>
                        {el.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={"line-2 w-full h-1/2 flex justify-around items-center"}>
              {proposeItems.line2.map(el => (
                <div key={el.title} className={"buttonFrameWrapper"}>
                  <div className={"buttonFrameWrapper-diagonal"}>
                    <div className={"buttonFrameContainer"}>
                      <div className={"buttonFrameContainer-diagonal bg-white bg-opacity-30 capitalize py-3 px-6 text-lg text-main_dark font-light"}>
                        {el.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FullWidthContainer>
  )
}
