import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./TradeDev.css";
const TradeDev = () => {
  const [trade, setTrade] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://github-trending-api.now.sh/developers?language=javascript&since=weekly"
    )
      .then(res => res.json())
      .then(trd => setTrade(trd), setLoading(false))
      .catch(err => console.log("err", err));
  }, [trade]);
  if (loading === true) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  } else {
    return (
      <div className={style.dafault}>
        {trade.map(tr => {
          return (
            <div className={style.column}>
              <div className={style.card}>
                <img src={tr.avatar} className={style.image} />
                <div className={style.container}>
                  <h2>{tr.username}</h2>
                  <p className={style.title}>{tr.name}</p>
                  <p>{tr.repo.description}</p>
                  <p>
                    <a target="_blank" href={tr.repo.url}>
                      GitHub repo
                    </a>
                  </p>{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
export default TradeDev;
