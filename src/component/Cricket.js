import React, { useState, useEffect } from "react";
import style from "./Cricket.css";
const Cricket = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=311c608ea05e478288580b921fc53bf8"
    )
      .then(res => res.json())
      .then(news => setNews(news.articles), setLoading(false))
      .catch(err => console.log("err", err));
  }, [news]);
  if (loading === true) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  } else {
    return (
      <div className={style.default}>
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
export default Cricket;
