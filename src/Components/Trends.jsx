import Logo from "./Logo";
import Article from "./Article";
import CurrentDate from "./CurrentDate";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loading from "./Loading";
import Search from "./Search";

const Trends = ({ news, loading, searchTerm, handleSearch }) => {
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

          <h4 className="d-flex justify-content-between align-items-center position-relative mx-5  search-section pb-2  mt-4 mb-4">
            <span className="pt-4 ps-3"> Trends &nbsp;<i className="bi bi-graph-up-arrow text-primary"></i></span>
            <div className="d-flex justify-content-center  mt-4 me-3">
              <Search onSearch={handleSearch} />

            </div>

          </h4>

          {/* Articles */}
          <main className="pb-5">
            <div className="cards-container">
              {news.length === 0 ? (
                <div className="text-center py-5">
                  <p className="text-muted fs-4">
                    {searchTerm
                      ? `No trending articles found matching "${searchTerm}"`
                      : 'No trending articles available'}
                  </p>
                </div>
              ) : (
                news.reverse().slice(searchTerm ? 0 : 40, searchTerm ? news.length : 46).map((article, index) => (
                  <Article key={index} article={article} />
                ))
              )}
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
