// import { useState, useEffect } from "react";

// import { useEffect, useState } from "react";
import Logo from "../Components/Logo";
import Article from "../Components/Article";
import ArticleColumn from "../Components/ArticleColumn";

import CurrentDate from "../Components/CurrentDate";
import Navbar from "../Components/Navbar";
import Loading from "../Components/Loading";
import Footer from "../Components/Footer";

// import { useNavigate } from "react-router-dom";

function Home({ news, loading, errors }) {


  //   const navigate = useNavigate();

  const image = '/logo.png'


  return (
    <div>
      {errors && <p className="text">{errors}</p>}
      {loading && <Loading />}
      {!loading && (
        <div>
          <div className="d-flex justify-content-between">
            <CurrentDate />
            <span className="text-secondary pt-3 pe-4 pb-0"><i class="bi bi-list"></i> Menu  </span>
          </div>

          <Logo />
          <Navbar />
          <main >
            <section>
              <div className="row g-4">
               
                  <div
                    className={`col-lg-6} `}
                  >
                    <div
                      className="card text-white border-0 h-100"
                      style={{
                        backgroundImage:  `url(})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "15px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className="card-img-overlay d-flex flex-column justify-content-end p-3"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                        }}
                      >
                        <span
                          className="badge bg-warning text-dark mb-2"
                          style={{ width: "fit-content" }}
                        >
                        </span>
                        <h5 className="card-title fw-bold"></h5>
                        <p className="card-text small text-muted">
                        </p>
                      </div>
                    </div>
                  </div>
                
              </div>

            </section>
            <h4 className="d-flex justify-content-center align-items-center position-relative ms-5 pb-2 ps-4 mt-4 mb-4">
              <span className="position-absolute start-0 ">/ <i class="bi bi-house-fill"></i></span>
              <h4 className="text-dark">Latest News & Articles</h4>

            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              {news.slice(0, 6).map((article, index) => (
                <Article key={index} article={article} />
              ))}
            </div>
            <h4 className="pb-2 text-center my-5">Read More <i class="bi bi-arrow-down"></i> </h4>

            <div
              style={{
                display: "flex",
                flexWrap: 'wrap',
                justifyContent: "center",
                gap: "20px",
              }}
            >
              {news.slice(6, 9).map((article, index) => (
                <ArticleColumn key={index} article={article} />
              ))}
            </div>


          </main>




          <Logo />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
