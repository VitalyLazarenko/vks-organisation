import {FullWidthContainer} from "../components/fullScreenContainer";
import {HeaderComponent} from "../components/headerComponent";
import {ProposeLayout} from "../layouts/propose.layout";
import {ChooseLayout} from "../layouts/choose.layout";
import {MainLayout} from "../layouts/main.layout";
import {AchievementsLayout} from "../layouts/achievements.layout";
import {AboutLayout} from "../layouts/about.layout";
import {ContactLayout} from "../layouts/contact.layout";

export default function Home() {
  return (
    <main>
      <HeaderComponent/>
      <FullWidthContainer id={"main"}>
        <MainLayout/>
      </FullWidthContainer>
      <FullWidthContainer id={"propose"}>
        <ProposeLayout/>
      </FullWidthContainer>
      <FullWidthContainer id={"choose"}>
        <ChooseLayout/>
      </FullWidthContainer>
      <FullWidthContainer id={"achievements"}>
        <AchievementsLayout/>
      </FullWidthContainer>
      <FullWidthContainer id={"about"}>
        <AboutLayout/>
      </FullWidthContainer>
      <FullWidthContainer id={"contact"}>
        <ContactLayout/>
      </FullWidthContainer>
    </main>
  )
}
