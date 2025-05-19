import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, date, mode } = this.props;

    const cardStyle = {
      backgroundColor: mode === 'dark' ? '#1e1e1e' : 'white',
      color: mode === 'dark' ? 'white' : 'black',
      border: mode === 'dark' ? '1px solid #444' : '1px solid #ccc'
    };

    const textMutedStyle = {
      color: mode === 'dark' ? '#bbb' : '#6c757d'
    };

    return (
      <div className="my-3">
        <div className="card" style={cardStyle}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/eb7a/live/5c0f70d0-6139-11ee-ac8c-9d18dbc280ea.png"
            }
            className="card-img-top"
            alt="news"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small style={textMutedStyle}>
                Published On {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-sm ${mode === 'dark' ? 'btn-light' : 'btn-dark'}`}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
