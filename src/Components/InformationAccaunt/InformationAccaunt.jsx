import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";
import "./InformationAccaunt.scss";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement

);
function InformationAccaunt() {
  const [dataa, setDataa] = React.useState({
    labels: ["Jan", "Feb", "March", "Aprl", "May"],
    datasets: [
      {
        label: "First Dataset",
        data: [28, 36, 52, 65, 87],
        backgroundColor: 'yellow',
      },
    ],
  });
  return (
    <div className="InformationAccaunt__wrapper">
      <div className="InformationAccaunt__inner">
        <h2 className="InformationAccaunt__inner__h2">
          Информация Об Учетной Записи
        </h2>
        <p className="InformationAccaunt__inner__p">
          Ваш профиль не считается надежным, потому что вы не заполнили его
          полностью!
        </p>
        <form className="InformationAccaunt__inner__form" action="">
          <label className="InformationAccaunt__inner__form__label" htmlFor="">
            <h2 className="InformationAccaunt__inner__form__label__h2">Имя</h2>
            <input
              className="InformationAccaunt__inner__form__label__input"
              type="text"
              placeholder="Имя"
            />
          </label>
          <label className="InformationAccaunt__inner__form__label" htmlFor="">
            <h2 className="InformationAccaunt__inner__form__label__h2">
              Фамилия
            </h2>
            <input
              className="InformationAccaunt__inner__form__label__input"
              type="text"
              placeholder="E-mail"
            />
          </label>
          <label className="InformationAccaunt__inner__form__label" htmlFor="">
            <h2 className="InformationAccaunt__inner__form__label__h2">
              E-mail
            </h2>
            <input
              className="InformationAccaunt__inner__form__label__input"
              type="email"
              placeholder="E-mail"
            />
          </label>
          <label className="InformationAccaunt__inner__form__label" htmlFor="">
            <h2 className="InformationAccaunt__inner__form__label__h2">
              Телефон
            </h2>
            <input
              className="InformationAccaunt__inner__form__label__input"
              type="tel"
              placeholder="+998 94 609 34 44"
            />
          </label>
          <label className="InformationAccaunt__inner__form__label" htmlFor="">
            <h2 className="InformationAccaunt__inner__form__label__h2">
              Адресс
            </h2>
            <input
              className="InformationAccaunt__inner__form__label__input"
              type="text"
              placeholder="Адресс"
            />
          </label>
          <label className="InformationAccaunt__inner__form__label" htmlFor="">
            <h2 className="InformationAccaunt__inner__form__label__h2">
              Тип пользователя
            </h2>
            <input
              className="InformationAccaunt__inner__form__label__input"
              type="text"
              placeholder="Продавецgit"
            />
          </label>
          <button
            className="InformationAccaunt__inner__form__btn"
            type="submit"
          >
            Сохранить
          </button>
        </form>
      </div>
      <div className="InformationAccaunt__wrapper__left">
        <div className="InformationAccaunt__wrapper__left__div">
          <p className="InformationAccaunt__wrapper__left__p">
            Статистика конверсий при продвижении объявления
          </p>
        </div>
        <ul className="InformationAccaunt__wrapper__left__list">
          <li className="InformationAccaunt__wrapper__left__list__item">
            Просмотры
          </li>
          <li className="InformationAccaunt__wrapper__left__list__item">
            Избранные
          </li>
          <li className="InformationAccaunt__wrapper__left__list__item">
            Лайки
          </li>
          <li className="InformationAccaunt__wrapper__left__list__item">
            Поделится
          </li>
        </ul>
        <div>
          <Line data={dataa}>ss</Line>
        </div>
      </div>
    </div>
  );
}

export default InformationAccaunt;
