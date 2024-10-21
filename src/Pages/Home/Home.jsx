import Bannar from "../../Components/Bannar/Bannar";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Skills from "../../Components/Skills/Skills";
import WorkPlan from "../../Components/WorkPlan/WorkPlan";
import Contact from "../../Components/Contact/Contact";
import SkillsProgress from "../../Components/Skills/SkillsProgress";
import Blogs from "../Blogs/Blogs";

const Home = () => {
  return (
    <div className="py-10 sm:flex-row mx-auto">
      <Bannar></Bannar>
      <Skills></Skills>
      <WorkPlan></WorkPlan>
      <SkillsProgress></SkillsProgress>
      <Portfolio></Portfolio>
      <Blogs />

      <Contact></Contact>
    </div>
  );
};

export default Home;
