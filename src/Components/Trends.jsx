import Logo from "./Logo";
import Article from "./Article";

import CurrentDate from "./CurrentDate";
import Navbar from "./Navbar";


const Trends = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <CurrentDate />
                <p className="text-secondary pt-3 pe-4 pb-0">Technologies News </p>
            </div>

            <Logo />
            <Navbar />
        </div>
    );
}

export default Trends;