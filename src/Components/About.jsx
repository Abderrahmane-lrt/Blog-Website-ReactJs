import Logo from "./Logo";

import CurrentDate from "./CurrentDate";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <CurrentDate />
            <p className="text-dark fw-bolder pt-3 pe-4 pb-0">
              <i class="bi bi-1-circle"></i>
            </p>
            </div>

            <Logo />
            <Navbar />

            <div className="container mb-5">
                <h4 className="d-flex justify-content-center align-items-center position-relative pb-2 my-4">
                    <span className="text-dark">About Us</span>
                </h4>
                <h1 className="text-center text-primary ">
                    <i class="bi bi-quote"></i>
                </h1>
                <div className="col-md-12  text-center">
                    <p className="h3 text-secondary mb-4" style={{ lineHeight: "1.6" }}>
                        <strong>TechNews</strong> is your go-to source for the latest updates in technology,
                        innovation and digital trends. We cover stories about companies like
                        Google, Apple and the emerging startups that are shaping the future.
                        Our goal is to make complex technology topics simple and enjoyable
                        for everyone.
                    </p>
                    <p className=" text-muted" style={{ lineHeight: "1.5" }}>
                        Founded in 2025, TechNews continues to provide information
                        accurate and captivating technology to readers around the world.
                    </p>
                </div>
            </div>

            <Logo />
            <Footer />
        </div>
    );
};

export default About;
