import Style from "../Resume/Resume.module.css";
import Wrapper from "../../ui/Wrapper/Wrapper";
import Profile from "../../common/Profile/Profile";
import Contact from "../../common/Contact/Contact";
import Portfolio from "../../common/Portfolio/Portfolio";


export default function Resume() {
  return <div className={Style.Resume}>
    <Wrapper color="#CBD0CC">
      <Profile/>
      <Contact/>
      <Portfolio/>
    </Wrapper>
    <Wrapper color="white">
      <></>
    </Wrapper>
  </div>
}