const Article = ({article}) => {
    return ( 
        <div
              style={{
                flex: "0 0 30%", 
                padding : '8px',
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
             
            >
            <img src={article.urlToImage} alt="" width={'50%'}  className="card-img img-thumbnail pb-2"/>
              <h4 className="py-1"><a href={article.url} className="text-dark  hover-underline-pointer">{article.title.slice(0,30)}</a></h4>
              <p className="py-1">{article.description}</p>
            </div>
     );
}
 
export default Article;