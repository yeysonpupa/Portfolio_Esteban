import BannerAbout from "../components/BannerAbout";
import Copyright from "../components/Copyright";
import Divider from "../UI/Divider";
import Line from "../UI/Line";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import AboutHero from "../components/AboutHero";
import GalleryAbout from "../components/GalleryAbout";

const About = () => {
    return (
      <div className="bg-whiteBackground">
        <Navbar />
        <Divider />
        <AboutHero />
        <Line />
        <BannerAbout />
        <Line />
        <Timeline />
        <GalleryAbout />
        <Footer />
        <Copyright />
      </div>
    );
};
  
export default About;