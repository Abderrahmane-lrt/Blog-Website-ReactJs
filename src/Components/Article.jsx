import { useNavigate } from "react-router-dom";

const Article = ({ article }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/article-detail', { state: { article } })
  }
  return (
    <div
      style={{
        flex: "0 0 30%",
        padding: '5px',
        border: "1px solid #ccc",
        boxSizing: "border-box",
      }}
      onClick={handleClick}

    >
      <img src={article.urlToImage} alt="" width={'50%'} className="card-img img-thumbnail pb-2" />
      <h5
        className="card-title ps-2 py-3"
        style={{ cursor: "pointer" }}
        onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
        onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
      >
        {article.title.slice(0, 29)}
      </h5>
      <p className="py-1 px-2">{article.description.slice(0, 120)}</p>
      <p className="pt-5 ps-2  font-monospace fw-bolder">{article.author}</p>
    </div>
  );
}

export default Article;