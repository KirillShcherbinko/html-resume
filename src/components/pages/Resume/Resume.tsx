import Style from "../Resume/Resume.module.css";
import Column from "../../ui/Column/Column";
import Profile from "../../common/Profile/Profile";
import Contact from "../../common/Contact/Contact";


export default function Resume() {
  return <div className={Style.Resume}>
    <Column color="#CBD0CC">
      <Profile/>
      <Contact/>
    </Column>
    <Column color="white">
      <></>
    </Column>
  </div>
}