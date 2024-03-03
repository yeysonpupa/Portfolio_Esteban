import Divider from "../UI/Divider";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";
import ProjectsMenu from "../components/ProjectsMenu";

const Projects = () => {
    return (
      <div className="bg-whiteBackground">
        <Navbar/>
        <Divider />
        <ProjectsMenu />
        <Copyright />
      </div> 
    );
};
  
export default Projects;