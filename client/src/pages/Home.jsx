
import About from "../components/About";
import CaseStudies from "../components/CaseStudies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Industries from "../components/Industries";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import Services from "../components/Services";
import Team from "../components/Team";
import TechnologyStack from "../components/TechnologyStack";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Services />
            <CaseStudies />
            <Process />
            <Industries />
            <Testimonials />
            <TechnologyStack />
            <Pricing />
            <Team />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;