import HeroSection from "../../components/HeroSection";
import HeroVideo from "../../components/HeroVideo";
import Navbar from "../../components/Navbar";


const Home = () => {
    return (
        <div className="relative w-full h-screen">
            <HeroVideo />
            <Navbar />
            <HeroSection />
        </div>
    );
};

export default Home;
