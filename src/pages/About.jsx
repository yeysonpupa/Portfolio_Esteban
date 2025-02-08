import Copyright from "../components/Copyright";
import Divider from "../UI/Divider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import GalleryAbout from "../components/GalleryAbout";

const About = () => {
    return (
      <div className="bg-whiteBackground">
        <Navbar />
        <Divider />
        <AboutHero />
        <GalleryAbout />
        <Footer />
        <Copyright />
      </div>
    );
};
  
export default About;