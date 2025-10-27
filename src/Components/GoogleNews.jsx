import Logo from "./Logo";
import Article from "./Article";
import CurrentDate from "./CurrentDate";
import Navbar from "./Navbar";
import Loading from "./Loading";
import Footer from "./Footer";

const GoogleNews = ({ news, loading }) => {
  const googleNews = news.filter(item => item.title.toLowerCase().includes('google'));

  return (
    <div>
      {loading && <Loading />}

      {!loading && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <CurrentDate />
            <p className="text-dark fw-bolder pt-3 pe-4 pb-0">
              <i class="bi bi-1-circle"></i>
            </p>
          </div>

          <Logo />
          <Navbar />

          <h4 className="d-flex justify-content-center align-items-center position-relative ms-3 pb-2 ps-4 mt-4 mb-4">
            <span className="text-dark">
              <i className="bi bi-google text-primary"></i>oogle News & Reviews
            </span>
          </h4>

          <main className="pb-5">
            <div className="cards-container" >
              {googleNews.reverse().slice(0, 12).map((article, index) => (
                <Article key={index} article={article} />
              ))}
            </div>
          </main>
          <Logo />

          <Footer />
        </>
      )}
    </div>
  );
};

export default GoogleNews;
