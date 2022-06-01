import Banner from "../Components/Banner";
import Buyer from "../Components/Buyer";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import HowItWork from "../Components/HowItWork";
import Navbar from "../Components/Navbar";
import Service from "../Components/Service";
import Testimony from "../Components/Testimony";

const Home = () => {
    return(
        <div className="max-w-screen-desktop mx-auto overflow-hidden">
            <Navbar />
            <Hero />
            <Banner />
            <Buyer />
            <HowItWork />
            <Service />
            <FAQ />
            <Testimony />
            <Footer />
        </div>
    )
}

export default Home;