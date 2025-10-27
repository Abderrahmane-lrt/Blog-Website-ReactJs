import { useState, useEffect } from "react";

import React from "react";
import Home from "./Home/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Trends from "./Components/Trends";
import PageNotFound from "./Components/PageNotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoogleNews from "./Components/GoogleNews";
import ArticleDetail from "./Components/ArticleDetail";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [news, setNews] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);
  const getDataNews = async () => {
    setLoading(true);
    const url =
      "https://newsapi.org/v2/everything?" +
      "q=Apple&" +
      "from=2025-10-01&" +
      "sortBy=popularity&" +
      "apiKey=57e2509e5b514310bdeeb884a30eb082";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNews(data.articles || []);
      setLoading(false);
    } catch (error) {
      setErrors(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDataNews();
  }, []);
  console.log(news);

  return <>
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home news={news} errors={errors}  loading={loading} />}> </Route>
      <Route path="/Google" element={<GoogleNews news={news} loading={loading}  />}> </Route>
      <Route path="/trends" element={<Trends news={news} loading={loading} />}> </Route>
      <Route path="/about" element={<About />}> </Route>
      <Route path="/contact" element={<Contact />}> </Route>
      <Route path="/article-detail" element={<ArticleDetail />}> </Route>
      <Route path="*" element={<PageNotFound  />}> </Route>
    </Routes>
  
  </BrowserRouter>
  
  </> ;
}

export default App;
