import React from "react";
import { Link } from "react-router-dom";
import style from "./Nav.css";
const Nav = () => {
  return (
    <React.Fragment>
      <ul className={style.ul}>
        <li className={style.li}>
          <Link className={style.links} to="/Cricket">
            Sports
          </Link>
        </li>
        <li className={style.li}>
          <Link className={style.links} to="/Tech">
            tech
          </Link>
        </li>
        <li className={style.li}>
          <Link className={style.links} to="/IndiaNews">
            indiaNews
          </Link>
        </li>
        <li className={style.li}>
          <Link className={style.links} to="/TradeDev">
            TradeDev
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};
export default Nav;
