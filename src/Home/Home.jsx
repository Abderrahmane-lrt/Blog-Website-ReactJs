// import { useState, useEffect } from "react";

// import { useEffect, useState } from "react";
import Article from "../Components/Article";
import ArticleColumn from "../Components/ArticleColumn";

import Logo from "../Components/Logo";
import CurrentDate from "../Components/CurrentDate";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";

// import { useNavigate } from "react-router-dom";
//   const navigate = useNavigate();

function Home({ news, loading, errors }) {





  return (
    <div>
      {errors && <p className="text">{errors}</p>}
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
          <main >
            <section style={{ paddingBottom: "100px", paddingTop: "50px" }}>
              <div className="container row ps-5 align-items-center">
                <div className="col-12 col-md-6 mb-3 mb-md-0">
                  <img src="/home.jpg" alt="" width="100%" className="" />
                </div>

                <div className="col-12 col-md-6">
                  <h2 className="fw-bold pt-3 pb-3">Google continues to innovate in artificial intelligence</h2>
                  <p className="text-secondary" style={{ fontSize: '1.1em' }}>
                    Google continues to innovate in artificial intelligence, cloud computing,
                    and web technologies. From enhancing search capabilities with generative AI
                    to expanding open-source tools, the company remains a leader shaping the
                    digital landscape. This article explores how Google's latest projects are
                    redefining productivity and online experiences.
                  </p>
                </div>
              </div>
            </section>


            <h4 className="d-flex justify-content-center align-items-center position-relative ms-5 pb-2 ps-4 mt-4 mb-4">
              <span className="position-absolute start-0 ">/ <i class="bi bi-house-fill"></i></span>
              <h4 className="text-dark">Latest News & Articles</h4>

            </h4>
            <div
              className="cards-container"
            >
              {news.slice(30, 36).map((article, index) => (
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

            <img src="" alt="" />


          </main>




          <Logo />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
