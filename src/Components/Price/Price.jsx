import React from "react";
import "./Price.scss";
import PriceIcon from "../../images/PriceLine.png";

function Price({ isPrice}) {
  console.log(isPrice);
  return (
    <div
      className="Price__inner"
      style={{ display: isPrice ? "block" : "none" }}
    >
      <div className="Price__inner__div">
        <h2 className="Price__inner__div__h2">≈ $40 000</h2>
        <img className="Price__inner__div__img" src={PriceIcon} alt="Line" />
        <h2 className="Price__inner__div__h2">$100 000</h2>
      </div>
      <ul className="Price__inner__list">
        <li className="Price__inner__list__item">Сортировать по:</li>
        <li className="Price__inner__list__item">Рекомендованное вам</li>
        <li className="Price__inner__list__item">Дешевые</li>
        <li className="Price__inner__list__item">Дорогие</li>
      </ul>
    </div>
  );
}

export default Price;
