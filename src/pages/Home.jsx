import BannerHome from "../components/BannerHome";
import Copyright from "../components/Copyright";
import Divider from "../UI/Divider";
import Line from "../UI/Line";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Keys from "../components/Keys";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-whiteBackground">
        <Navbar />
        <Divider />
        <Hero />
        <Line />
        <BannerHome />
        <Line />
        <Keys />
        <Footer />
        <Copyright />
    </div>
  );
};

export default Home;