import Divider from "../UI/Divider";
import Navbar from "../components/Navbar";
import ProjectsMenu from "../components/ProjectsMenu";

const Projects = () => {
    return (
      <div className="bg-whiteBackground">
        <Navbar/>
        <Divider />
        <ProjectsMenu />
      </div> 
    );
};
  
export default Projects;