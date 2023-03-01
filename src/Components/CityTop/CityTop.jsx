import React from "react";
import { useState, useRef } from "react";
import "./CityTop.scss";
import line from "../../images/Line.png";
import City from "../City/City";
import Price from "../Price/Price";
import Room from "../Room/Room";
import Size from "../Size/Size";
import Repair from '../Repair/Repair'
import Material from '../Material/Material'

function CityTop() {
  const sity = useRef();

  const [isVisible, setIsVisible] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [isRoom, setIsRoom] = useState(false)
  const [isSize, setIsSize] = useState(false)
  const [isRepair, setIsRepair] = useState(false)
  const [isMaterial, setIsMaterial] = useState(false)

  const handleCity = (evt) => {
    sity.current.style.border='5px solid rgba(0, 0, 0, 0.2)'
    sity.current.style.backdropFilter='blur(17)'
    setIsVisible(!isVisible);


    if (isPrice) {
      setIsPrice(!isPrice);
    }
    if (isRoom) {
      setIsRoom(!isRoom);
    }
    if (isSize) {
      setIsSize(!isSize);
    }
    if (isRepair) {
      setIsRepair(!isRepair);
    }
    if (isMaterial) {
      setIsMaterial(!isMaterial);
    }
  };




  const priceVisible =() =>{

    setIsPrice(!isPrice);
    if (isVisible) {
      setIsVisible(!isVisible);
    }
    if (isRoom) {
      setIsRoom(!isRoom);
    }
    if (isSize) {
      setIsSize(!isSize);
    }
    if (isRepair) {
      setIsRepair(!isRepair);
    }
    if (isMaterial) {
      setIsMaterial(!isMaterial);
    }
  }

  const handleRoom =()=>{

    setIsRoom(!isRoom)
    if (isVisible) {
      setIsVisible(!isVisible);
    }
    if (isPrice) {
      setIsPrice(!isPrice);
    }
    if (isSize) {
      setIsSize(!isSize);
    }
    if (isRepair) {
      setIsRepair(!isRepair);
    }
    if (isMaterial) {
      setIsMaterial(!isMaterial);
    }
  }

  const handleSize =()=>{

    setIsSize(!isSize)
    if (isVisible) {
      setIsVisible(!isVisible);
    }
    if (isPrice) {
      setIsPrice(!isPrice);
    }
    if (isRoom) {
      setIsRoom(!isRoom);
    }
    if (isRepair) {
      setIsRepair(!isRepair);
    }
    if (isMaterial) {
      setIsMaterial(!isMaterial);
    }
  }


  const handleRepair =()=>{

    setIsRepair(!isRepair)
    if (isVisible) {
      setIsVisible(!isVisible);
    }
    if (isPrice) {
      setIsPrice(!isPrice);
    }
    if (isRoom) {
      setIsRoom(!isRoom);
    }
    if (isSize) {
      setIsSize(!isSize);
    }
    if (isMaterial) {
      setIsMaterial(!isMaterial);
    }
  }

  const handleMaterial =()=>{

    setIsMaterial(!isMaterial)
    if (isVisible) {
      setIsVisible(!isVisible);
    }
    if (isPrice) {
      setIsPrice(!isPrice);
    }
    if (isRoom) {
      setIsRoom(!isRoom);
    }
    if (isSize) {
      setIsSize(!isSize);
    }
    if (isRepair) {
      setIsRepair(!isRepair);
    }
  }

  return (
    <div className="City__all" ref={sity}>
      <div
        div
        className="City__out"
        style={{ display: isVisible ? "block" : "none" }}
        ref={sity}
      >
        <ul className="City__out__list">
          <li className="City__out__list__item">Ташкент</li>
          <li className="City__out__list__item">Андижон</li>
          <li className="City__out__list__item">Букхара</li>
          <li className="City__out__list__item">Фаргона</li>
          <li className="City__out__list__item">Джиззах</li>
          <li className="City__out__list__item">Хоразм</li>
          <li className="City__out__list__item">Навоий</li>
          <li className="City__out__list__item">Кашкадарё</li>
          <li className="City__out__list__item">Самарканд</li>
          <li className="City__out__list__item">Сирдарё</li>
          <li className="City__out__list__item">Сурхондарё</li>
          <li className="City__out__list__item">Тошкент вилояти</li>
        </ul>
        <img className="City__out__line" src={line} alt="Line" />
        <ul className="City__out__lists">
          <li className="City__out__lists__items">Сортировать по:</li>
          <li className="City__out__lists__items">Рекомендованное вам</li>
          <li className="City__out__lists__items">Дешевые</li>
          <li className="City__out__lists__items">Дорогие</li>
        </ul>
      </div>
      <Price isPrice={isPrice}/>
      <Room isRoom={isRoom}/>
      <Size isSize={isSize}/>
      <Repair isRepair={isRepair}/>
      <Material isMaterial={isMaterial}/>
      <City handleCity={handleCity} priceVisible={priceVisible} handleRoom={handleRoom} handleSize={handleSize} handleRepair={handleRepair} handleMaterial={handleMaterial} />



    </div>
  );
}

export default CityTop;
