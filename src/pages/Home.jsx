import Banner from "../UI/BannerHome";
import Divider from "../UI/Divider";
import Line from "../UI/Line";
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
        <Banner />
        <Line />
        <Keys />
    </div>
  );
};

export default Home;