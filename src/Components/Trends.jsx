import Logo from "./Logo";
import Article from "./Article";
import CurrentDate from "./CurrentDate";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loading from "./Loading";

const Trends = ({ news, loading }) => {
  return (
    <div>
      {loading && <Loading />}

      {!loading && (
        <>
          {/* Top Bar */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <CurrentDate />
            <p className="text-dark fw-bolder pt-3 pe-4 pb-0">
              <i class="bi bi-1-circle"></i>
            </p>
          </div>

          {/* Logo and Navbar */}
          <Logo />
          <Navbar />

          {/* Header */}
          <h4 className="d-flex justify-content-center align-items-center position-relative ms-3 pb-2 ps-4 mt-4 mb-4">
            <span className="text-dark">
              Trends &nbsp;<i className="bi bi-graph-up-arrow text-primary"></i>
            </span>
          </h4>

          {/* Articles */}
          <main className="pb-5">
            <div className="cards-container">
              {news.reverse().slice(40, 46).map((article, index) => (
                <Article key={index} article={article} />
              ))}
            </div>
          </main>

          {/* Footer */}
          <Logo />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Trends;
