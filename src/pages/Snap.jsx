import Divider from "../UI/Divider";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";
import SnapHero from "../components/SnapHero";

const Snap = () => {
    return (
      <div className="bg-whiteBackground">
        <Navbar />
        <Divider />
        <SnapHero />
        <Copyright />
      </div>
    );
};
  
export default Snap;