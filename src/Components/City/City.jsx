import React from "react";
import "./City.scss";
import logo from "../../images/onestImg.png";
import Icon from "../../images/Icon.png";

function City({ handleCity, priceVisible, handleRoom, handleSize, handleRepair,handleMaterial }) {

  return (
    <>
      <div className="City__inner">
        <div className="City__inner__one">
          <img className="City__inner__one__img" src={logo} alt="logo" />
          <h2 className="City__inner__one__h2">ONEST</h2>
          <img className="City__inner__one__images" src={Icon} alt="Icon" />
        </div>
        <ul className="City__inner__list">
          <li className="City__inner__list__item">
            <svg
              width={12}
              height={10}
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3334 1H6.66675M11.3334 5H5.33341M11.3334 9H6.66675M3.33341 2.33333L0.666748 5L3.33341 7.66667"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Назад
          </li>
          <li className="City__inner__list__item" onClick={() => handleCity()} >
            Город
          </li>
          <li className="City__inner__list__item " onClick={() => priceVisible()}>
            Цена</li>
          <li className="City__inner__list__item" onClick={() => handleRoom()}>
            Комната</li>
          <li className="City__inner__list__item" onClick={() => handleSize()}>
            Кв/метр</li>
          <li className="City__inner__list__item" onClick={() => handleRepair()}>
            Ремонт</li>
          <li className="City__inner__list__item" onClick={() => handleMaterial()}>
            Материал</li>
        </ul>
      </div>
    </>
  );
}

export default City;
