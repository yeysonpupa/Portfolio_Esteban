import Divider from "../UI/Divider";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-whiteBackground">
        <Navbar />
        <Divider />
        <Hero />
    </div>
  );
};

export default Home;