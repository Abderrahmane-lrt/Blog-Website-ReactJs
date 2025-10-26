import Logo from "./Logo";
import Article from "./Article";

import CurrentDate from "./CurrentDate";
import Navbar from "./Navbar";



const Google = ({ news }) => {
    const googleNews = news.filter(item => item.title.toLowerCase().includes('google'))
    // console.log(googleNews);
    return (
        <div>
            <div className="d-flex justify-content-between">
                <CurrentDate />
                <p className="text-secondary pt-3 pe-4 pb-0"><i class="bi bi-list"></i> Menu </p>
            </div>

            <Logo />
            <Navbar />
            <h4 className="d-flex justify-content-center align-items-center position-relative ms-3 pb-2 ps-4 mt-4 mb-4">
                <span className="text-dark"><i class="bi bi-google text-primary"></i>oogle News</span>
            </h4>
            <main>
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            gap: "20px",
                        }}
                    >
                        {googleNews.reverse().slice(0, 12).map((article, index) => (
                            <Article key={index} article={article} />
                        ))

                        }
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Google;