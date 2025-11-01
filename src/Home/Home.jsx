// import { useState, useEffect } from "react";

// import { useEffect, useState } from "react";
import Article from "../Components/Article";
import ArticleColumn from "../Components/ArticleColumn";

import Logo from "../Components/Logo";
import CurrentDate from "../Components/CurrentDate";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";
import Search from "../Components/Search";

import ReactPlayer from "react-player";

// import { useNavigate } from "react-router-dom";
//   const navigate = useNavigate();

function Home({ news, loading, searchTerm, handleSearch }) {
  return (
    <div>
      {/* {errors && <p className="text">{errors}</p>} */}
      {loading && <Loading />}
      {!loading && (
        <div>
          <div className="d-flex justify-content-between">
            <CurrentDate />
            <p className="text-dark fw-bolder pt-3 pe-4 pb-0">
              <i class="bi bi-1-circle"></i>
            </p>
          </div>

          <Logo />
          <Navbar />
          <main>
            <section style={{ paddingBottom: "100px", paddingTop: "50px" }}>
              <div className="container row ps-5 align-items-center">
                <div className="col-12 col-md-6 mb-3 mb-md-0">
                  <ReactPlayer
                    src="https://www.youtube.com/watch?v=0uVRHl9gAco"
                    volume={0.3}
                    width={"500px"}
                    height={"270px"}
                    
                  />
                </div>
                <div className="col-12 col-md-6 ps-4">
                  <h3 className="fw-bolder pt-3 pb-3 ">
                    Google continues to innovate in artificial intelligence
                  </h3>
                  <p className="text-secondary" style={{ fontSize: "1.1em" }}>
                    Google continues to innovate in artificial intelligence,
                    cloud computing, and web technologies. From enhancing search
                    capabilities with generative AI to expanding open-source
                    tools, the company remains a leader shaping the digital
                    landscape.s.
                  </p>
                </div>
              </div>
            </section>

            <h4 className="d-flex justify-content-between align-items-center position-relative ms-5 ms-sm-2 pb-2  mt-4 mb-4 search-section">
              <span className="pt-4  ps-4 ">Latest News & Articles</span>
              <div className="d-flex justify-content-center  mt-4 me-3 m-sm-1">
                <Search onSearch={handleSearch} />
              </div>
            </h4>
            <div className="cards-container">
              {news.length === 0 && searchTerm ? (
                <div className="text-center py-5">
                  <p className="text-muted fs-4">
                    No articles found matching "{searchTerm}"
                  </p>
                </div>
              ) : (
                (searchTerm ? news.slice(0, 12) : news.slice(30, 36)).map(
                  (article, index) => <Article key={index} article={article} />
                )
              )}
            </div>
            {!searchTerm && (
              <h4 className="pb-2 text-center my-5">
                Read More <i className="bi bi-arrow-down"></i>{" "}
              </h4>
            )}
            {news.length === 0 && searchTerm ? null : (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                {!searchTerm &&
                  news
                    .slice(6, 9)
                    .map((article, index) => (
                      <ArticleColumn key={index} article={article} />
                    ))}
              </div>
            )}
          </main>

          <Logo />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
