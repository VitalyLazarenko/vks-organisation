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
        <MainLayout/>
        <ProposeLayout/>
        <ChooseLayout/>
        <AchievementsLayout/>
        <AboutLayout/>
        <ContactLayout/>
    </main>
  )
}
