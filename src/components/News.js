import React, { Component } from 'react'
import NewsItem from './NewsItem'

const apiKey = process.env.REACT_APP_NEWS_API_KEY;

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading : false,
            page: 1
        }
    }

    async componentDidMount(){
        let url=`https://newsapi.org/v2/everything?q=${this.props.q?this.props.q:"everything"}&apiKey=${apiKey}
        &page=${this.state.page + 1}
        &pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let passedData = await data.json();
        this.setState({articles : passedData.articles})
    }

    handleNextClick = async ()=>{
        console.log("next");

        let url=`https://newsapi.org/v2/everything?q=${this.props.q?this.props.q:'everything'}&apiKey=${apiKey}
        &page=${this.state.page + 1}
        &pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let passedData = await data.json(); 

        this.setState({
            articles : passedData.articles,
            page : this.state.page + 1,
        })
        window.scrollTo(0, 0);
    }
    handlePreviousClick = async ()=>{
        console.log("prev");

        let url=`https://newsapi.org/v2/everything?q=${this.props.q?this.props.q:"everything"}&apiKey=${apiKey}
        &page=${this.state.page + 1}
        &pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let passedData = await data.json();
        this.setState({
            articles : passedData.articles,
            page : this.state.page - 1,
        })
        window.scrollTo(0, 0);
    }

  render() {
    
    return (
      <div className="container my-3">

        <h1 className='text-center my-4'>Top Headlines  {this.props.q.charAt(0).toUpperCase() + this.props.q.slice(1)}</h1>
        <div className="row">

        {this.state.articles && this.state.articles.map((element, index) => (
          <div className="col-md-4 my-3" key={index}>
            <NewsItem
              title={element.title ? element.title : ""}
              description={element.description ? element.description : ""}
              imageUrl={element.urlToImage}
              url={element.url}
              date={element.publishedAt}
              mode={this.props.mode} // ✅ Add mode here
            />
          </div>
        ))}


      </div>
      <div className="container d-flex justify-content-between my-4">
        <button
          disabled={this.state.page <= 1}
          type="button"
          className={`btn ${this.props.mode === 'dark' ? 'btn-light' : 'btn-dark'}`}
          onClick={this.handlePreviousClick}
        >
          &larr; Previous
        </button>

        <button
          type="button"
          className={`btn ${this.props.mode === 'dark' ? 'btn-light' : 'btn-dark'}`}
          onClick={this.handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
      </div>
    )
  }
}

export default News;
