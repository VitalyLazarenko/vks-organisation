import {FullWidthContainer} from "../components/fullScreenContainer";
import {FooterComponent} from "../components/footerComponent";

export const ContactLayout = () => {
  return (
    <FullWidthContainer styles={""}>
      <div className={"h-screen w-full bg-img_contact bg-cover bg-top relative"}>
        <div className={"w-full h-full xl:px-36 2xl:px-44"}>
          <div className={"w-3/5 flex flex-col items-center"}>
            <h2 className={"mt-20 mb-8 font-black uppercase xl:text-3xl 2xl:text-4xl strokeText"}>Contact us</h2>
            <div className={"w-full min-h-1/2 bg-rose-500/30 uppercase p-12 flex flex-col justify-center items-center"}>
              <div className={"w-full bg-blue-700/30 flex justify-between items-center"}>
                <input
                  type="text"
                  placeholder={"Your name"}
                  className={"w-2/5 h-8"}
                />
                <input
                  type="text"
                  placeholder={"Your email"}
                  className={"w-2/5 h-8"}
                />
              </div>
              <div className={"w-full my-8"}>
                <textarea
                  id="body_message"
                  name="body_message"
                  placeholder={"Your message"}
                  rows={5}
                  className={"w-full h-full box-border p-2"}
                />
              </div>
              <div className={""}>
                <input type="radio" id="radio1" className={""}/>
                <label htmlFor="radio1" className={""}>Design</label>

                <input type="radio" id="radio2" className={""}/>
                <label htmlFor="radio2" className={""}>Development</label>

                <input type="radio" id="radio3" className={""}/>
                <label htmlFor="radio3" className={""}>Full cycle</label>

                <input type="radio" id="radio4" className={""}/>
                <label htmlFor="radio4" className={""}>Another</label>
              </div>
              <div className={""}>
                {/*<SendButton disable={false} title={"Send"} click={() => console.log('SEND')}></SendButton>*/}
              </div>
            </div>
          </div>
        </div>
        <FooterComponent/>
      </div>
    </FullWidthContainer>
  )
}
