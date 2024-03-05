import Bannar from "../../Components/Bannar/Bannar";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Resume from "../../Components/Resume/Resume";
import Skills from "../../Components/Skills/Skills";
import WorkPlan from "../../Components/WorkPlan/WorkPlan";
import Professional from "../../Components/Professional/Professional";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="py-10 sm:flex-row mx-auto">
      <Bannar></Bannar>
      <Skills></Skills>
      <WorkPlan></WorkPlan>
      {/* <Service></Service> */}
      <Portfolio></Portfolio>
      <Resume></Resume>
      {/* <Professional></Professional> */}
      <Contact></Contact>
    </div>
  );
};

export default Home;
