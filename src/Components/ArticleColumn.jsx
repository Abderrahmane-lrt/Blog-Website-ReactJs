const ArticleColumn = ({ article }) => {
    return (
        <div className="card mb-3 p-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={article.urlToImage}
                        className=" card-img img-thumbnail h-100 rounded-start" width={'100%'}
                        alt={article.title}
                    />
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h5
                            className="card-title"
                            style={{ cursor: "pointer" }}
                            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                        >
                           <a href={article.url}>{article.title}</a> 
                        </h5>
                        <p className="card-text">{article.description}</p>
                        <p className="card-text">
                            <small className="text-body-secondary">
                              Published at :  {new Date(article.publishedAt).toLocaleDateString()} 
                              
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleColumn;
