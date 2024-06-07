import Divider from "../UI/Divider";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";
import Photos from "../components/Photos";
import SnapHero from "../components/SnapHero";
import Footer from "../components/Footer";

const Snap = () => {
    return (
      <div className="bg-whiteBackground">
        <Navbar />
        <Divider />
        <SnapHero />
        <Photos />
        <Footer />
        <Copyright />
      </div>
    );
};
  
export default Snap;