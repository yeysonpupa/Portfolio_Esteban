import Banner from "../UI/Banner";
import Divider from "../UI/Divider";
import Line from "../UI/Line";
import Hero from "../components/Hero";
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
    </div>
  );
};

export default Home;