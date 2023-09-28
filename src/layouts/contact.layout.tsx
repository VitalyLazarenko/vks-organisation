import {FullWidthContainer} from "../components/fullScreenContainer";
import {FooterComponent} from "../components/footerComponent";

export const ContactLayout = () => {
  return (
    <FullWidthContainer styles={""}>
      <div className={"h-screen w-full bg-img_contact bg-cover bg-top relative"}>
        <div className={"w-full h-full xl:px-36 2xl:px-44"}>
          <div className={"w-1/2 flex flex-col items-center"}>
            <h2 className={"mt-20 mb-8 font-black uppercase xl:text-3xl 2xl:text-4xl strokeText"}>Contact us</h2>
            <div
              className={"darkFrameWrapper w-full min-h-1/2"}>
              <div className={"darkFrameWrapper-diagonal w-full h-full"}>
                <div className={"darkFrameContainer w-full h-full"}>
                  <div
                    className={"darkFrameContainer-diagonal w-full h-full p-12 flex flex-col justify-between items-center"}>
                    <div className={"w-full flex justify-between items-center"}>
                      <input
                        type="text"
                        placeholder={"Your name"}
                        className={"w-5/12 h-8 px-2 bg-transparent text-main_dark border-b border-main_light hover:border-main_dark focus:outline-none focus:w-1/2 transitionClass"}
                      />
                      <input
                        type="text"
                        placeholder={"Your email"}
                        className={"w-5/12 h-8 px-2 bg-transparent text-main_dark border-b border-main_light hover:border-main_dark focus:outline-none focus:w-1/2 transitionClass"}
                      />
                    </div>
                    <div className={"w-full my-8"}>
                <textarea
                  id="body_message"
                  name="body_message"
                  placeholder={"Your message"}
                  rows={5}
                  className={"w-full h-full bg-transparent text-main_dark box-border p-2 border border-main_light focus:outline-none"}
                />
                    </div>
                    <div className={"w-full flex justify-between items-center"}>
                      <div className={"flex"}>
                        <div className={"mr-3 w-6 h-6 border border-main_light flex justify-center items-center"}>
                          <div className={"w-2 h-2 bg-main_dark rotate-45"}/>
                        </div>
                        <label htmlFor="radio1"
                               className={"text-base text-main_light capitalize font-extralight"}>Design</label>
                      </div>
                      <div className={"flex"}>
                        <div className={"mr-3 w-6 h-6 border border-main_light flex justify-center items-center"}>
                          <div className={"w-2 h-2 bg-main_dark rotate-45"}/>
                        </div>
                        <label htmlFor="radio2"
                               className={"text-base text-main_light capitalize font-extralight"}>Development</label>
                      </div>
                      <div className={"flex"}>
                        <div className={"mr-3 w-6 h-6 border border-main_light flex justify-center items-center"}>
                          <div className={"w-2 h-2 bg-main_dark rotate-45"}/>
                        </div>
                        <label htmlFor="radio3" className={"text-base text-main_light capitalize font-extralight"}>Full
                          cycle</label>
                      </div>
                      <div className={"flex"}>
                        <div className={"mr-3 w-6 h-6 border border-main_light flex justify-center items-center"}>
                          <div className={"w-2 h-2 bg-main_dark rotate-45"}/>
                        </div>
                        <label htmlFor="radio4"
                               className={"text-base text-main_light capitalize font-extralight"}>Another</label>
                      </div>
                    </div>
                    <div className={"w-full mt-9 flex justify-center items-center"}>
                      <div className={"buttonFrameWrapper"}>
                        <div className={"buttonFrameWrapper-diagonal"}>
                          <div className={"buttonFrameContainer"}>
                            <div className={"buttonFrameContainer-diagonal"}>
                              <button className={"px-9 py-2 text-base text-main_light capitalize font-extralight"}>
                                Send
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent/>
      </div>
    </FullWidthContainer>
  )
}
