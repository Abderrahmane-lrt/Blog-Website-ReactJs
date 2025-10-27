import { Navigate, useLocation, Link } from "react-router-dom";
import Logo from "../Components/Logo";
import CurrentDate from "../Components/CurrentDate";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const ArticleDetail = () => {
    const location = useLocation()
    const { article } = location.state || {}
    if (!article) {
        return <Navigate to={'/'} />
    }
    return (
        <>


            <div className="d-flex justify-content-between">
                <CurrentDate />
                <p className="text-dark fw-bolder pt-3 pe-4 pb-0">
                    <i class="bi bi-1-circle"></i>
                </p>
            </div>

            <Logo />
            <Navbar />
            <section style={{ paddingBottom: "100px", paddingTop: "50px" }}>
                <div className="container row mx-auto  align-items-center ">

                    <div className="col-md-7 mb-3 mb-md-0 ">
                        <h2 className="fw-bold  py-3">{article.title}</h2>
                    </div>
                    <div className="col-md-5 ">
                        <img src={article.urlToImage} alt="" width="100%" className="" />
                    </div>
                    <div className="row ">

                        <p style={{ lineHeight: '1.8', fontSize: '1.1em', margin: '2em 0 1em 0' }}>{article.description} {article.content.slice(37, 500)}</p>
                        <Link to={article.url} className="btn btn-outline-dark w-25 mt-5">Read more At source</Link>

                    </div>
                </div>
            </section>
            <Logo />
            <Footer />




        </>
    );
}

export default ArticleDetail;