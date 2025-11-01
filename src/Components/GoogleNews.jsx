import Logo from "./Logo";
import Article from "./Article";
import CurrentDate from "./CurrentDate";
import Navbar from "./Navbar";
import Loading from "./Loading";
import Footer from "./Footer";
import Search from "./Search";

const GoogleNews = ({ news, loading, searchTerm, handleSearch }) => {
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


          <h4 className="d-flex justify-content-between align-items-center position-relative  search-section mx-5 pb-2  mt-4 mb-4">
            <span className="pt-4 ps-3"><i className="bi bi-google text-primary"></i>oogle News & Reviews</span>
            <div className="d-flex justify-content-center  mt-4 me-3">
              <Search onSearch={handleSearch} />


            </div>

          </h4>

          <main className="pb-5">
            <div className="cards-container" >
              {googleNews.length === 0 ? (
                <div className="text-center py-5">
                  <p className="text-muted fs-4">
                    {searchTerm
                      ? `No Google articles found matching "${searchTerm}"`
                      : 'No Google articles available'}
                  </p>
                </div>
              ) : (
                googleNews.reverse().slice(0, searchTerm ? googleNews.length : 12).map((article, index) => (
                  <Article key={index} article={article} />
                ))
              )}
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
