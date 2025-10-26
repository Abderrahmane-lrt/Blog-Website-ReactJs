import Logo from "./Logo";

import CurrentDate from "./CurrentDate";
import Navbar from "./Navbar";


const About = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <CurrentDate />
                <p className="text-secondary pt-3 pe-4 pb-0"><i class="bi bi-list"></i> Menu </p>
            </div>

            <Logo />
            <Navbar />
        </div>
    );
}

export default About;