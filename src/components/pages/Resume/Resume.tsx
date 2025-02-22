import Style from "../Resume/Resume.module.css";
import Column from "../../common/Column/Column";
import Profile from "../../common/Profile/Profile";


export default function Resume() {
  return <div className={Style.Resume}>
    <Column color="#CBD0CC">
      <Profile/>
    </Column>
    <Column color="white">
      <></>
    </Column>
  </div>
}