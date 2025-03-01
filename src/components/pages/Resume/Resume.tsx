import Style from "../Resume/Resume.module.css";
import Wrapper from "../../ui/Wrapper/Wrapper";
import Profile from "../../common/Profile/Profile";
import Contact from "../../common/Contact/Contact";
import Portfolio from "../../common/Portfolio/Portfolio";
import Interest from "../../common/Interest/Interest";
import Education from "../../common/Education/Education";
import Stack from "../../common/Stack/Stack";
import Projects from "../../common/Projects/Projects";


export default function Resume() {
  return <div className={Style.Resume}>
    <Wrapper color="#CBD0CC">
      <Profile/>
      <Contact/>
      <Portfolio/>
      <Stack/>
      <Interest/>
    </Wrapper>
    <Wrapper color="#D3D3D3">
      <Education/>
      <Projects/>
    </Wrapper>
  </div>
}