export default function Noticias(props) {
  return (
    <div className="row">
      {
        props.articles.map((article, index) => {
          return(
            <div key={index} className="card col-md-3 m-1">
              <img src={article.urlToImage} alt="no se ve"/>
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.content}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}