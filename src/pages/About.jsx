import BannerAbout from "../components/BannerAbout";
import Copyright from "../components/Copyright";
import Divider from "../UI/Divider";
import Line from "../UI/Line";
import Footer from "../components/Footer";
import Hello from "../components/Hello";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";

const About = () => {
    return (
      <div className="bg-whiteBackground">
        <Navbar />
        <Divider />
        <Hello />
        <Line />
        <BannerAbout />
        <Line />
        <Timeline />
        <Footer />
        <Copyright />
      </div>
    );
};
  
export default About;