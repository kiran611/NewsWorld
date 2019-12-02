import React, { useState, useEffect } from "react";
import style from "./News.css";
const IndiaNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoadig] = useState(true);
  useEffect(() => {
    console.log("joker");
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=311c608ea05e478288580b921fc53bf8`
    )
      .then(res => res.json())
      .then(news => setNews(news.articles), setLoadig(false))
      .catch(err => console.log(err));
  }, [news]);
  if (loading) {
    return (
      <React.Fragment>
        <h1>loading</h1>
      </React.Fragment>
    );
  } else {
    return (
      <div className={style.dafault}>
        {news.map(nws => {
          return (
            <React.Fragment>
              <img className={style.image} src={nws.urlToImage} />
              <h4 className={style.txt} key={nws.urlToImage}>
                {nws.title}
              </h4>
              <p className={style.txt}>{nws.description}</p>
              <p className={style.txt}>{nws.content}</p>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
};
export default IndiaNews;
