import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios'

class NoticiasSinRedux extends Component {
  constructor(props) {
    super(props);
    this.state = { articles:[] }
  }

  conponentDidMount(){
    const url = "https://newsapi.org/v2/everything?q=tesla&from=2021-04-14&sortBy=publishedAt&apiKey=005ee7fbcab5446abefc923dcf066efe"
    
    /* FETCH */
    /* fetch(url)
      .then((resp) =>(resp.json()))
      .then((data) => {
        this.setState({articles : data.articles});
      }) */
      
    /* AXIOS */
    axios.get(url).then((resp) => {
    this.setState({articles : resp.data.articles})
    })
  }

  

  render() {
    return (<div classname="row">
      {
        this.state.articles.map((article,index) => {
          return (<div key={index} classname="card col-md-4 m-1">
            <img src={article.urlToImage} alt="no se ve" />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.content}</p>
            </div>
          </div>)
        })
      }

    </div>)
  }
}

export default NoticiasSinRedux;