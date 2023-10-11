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
      <div className={"h-screen w-full bg-img_propose bg-cover bg-top lg:px-20 xl:px-36 2xl:px-44 flex justify-center items-center"}>
        <div className={"w-full h-screen lg:pb-10 lg:pt-24 xl:pb-10 xl:pt-20 2xl:pt-24 2xl:pb-12 flex flex-col"}>
          <div className={"flex justify-end mt-3"}>
            <div className={"w-7/12 flex flex-col justify-start items-start"}>
              <h2 className={"font-black uppercase lg:text-3xl xl:text-3xl 2xl:text-4xl strokeText"}>What we propose</h2>

              <p className={"lg:text-base xl:text-base 2xl:text-2xl text-main_dark font-normal lg:mt-10 xl:mt-10 2xl:mt-16 lg:my-8 xl:my-8 2xl:my-8"}>
                Meet our dynamic team of friends, experts in cutting-edge web development. With our Project Manager,
                Web Designer, Developer, and 3D Designer, we deliver tailored websites that precisely match our client's needs.
                <br/>
                <br/>
                But here's the twist – we go beyond the ordinary. We weave 3D technology into the mix, using it to
                magnify the distinctive features of every client's website. We're a crew that thrives on creativity,
                camaraderie, and a modern outlook, constantly embracing new challenges. Join us on an exploration of
                the digital universe!
              </p>
            </div>
          </div>
          <div
            className={"w-full h-full lg:mt-10 xl:mt-6 2xl:mt-14 flex flex-col justify-evenly items-center"}
          >
            <div className={"line-1 w-full h-auto flex justify-evenly items-center"}>
              {proposeItems.line1.map(el => (
                <div key={el.title} className={"buttonFrameWrapper"}>
                  <div className={"buttonFrameWrapper-diagonal"}>
                    <div className={"buttonFrameContainer"}>
                      <div className={"buttonFrameContainer-diagonal bg-white bg-opacity-30 capitalize lg:py-3 lg:px-4 lg:text-sm xl:text-lg xl:py-3 xl:px-6 2xl:text-lg 2xl:py-3 2xl:px-6 text-main_dark font-light"}>
                        {el.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={"line-2 w-full h-auto flex justify-around items-center"}>
              {proposeItems.line2.map(el => (
                <div key={el.title} className={"buttonFrameWrapper"}>
                  <div className={"buttonFrameWrapper-diagonal"}>
                    <div className={"buttonFrameContainer"}>
                      <div className={"buttonFrameContainer-diagonal bg-white bg-opacity-30 capitalize lg:py-3 lg:px-4 lg:text-sm xl:text-lg xl:py-3 xl:px-6 2xl:text-lg 2xl:py-3 2xl:px-6 text-main_dark font-light"}>
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
