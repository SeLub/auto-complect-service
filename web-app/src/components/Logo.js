/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Logo() {
  return (
    <logo>
      <div className="App">
        <div className="logo">
          <ul className="logo_img">
            <a href="https://www.borovaya.by/">
              <img src="/logo-atlant.png" className="logo_atlant" />
            </a>
            <img src="/logo-line.png" className="logo_line" />
            <a href="https://www.borovaya.by/">
              <img src="/logo-ford.png" className="logo_ford" />
            </a>
          </ul>
          <LogoLink />
        </div>
      </div>
      <img className="underline_the_logo" src="/img/underline_the_logo.png" />
    </logo>
  );
}

export default Logo;

function LogoLink() {
  return (
    <ul className="logo_list">
      <a className="logo_link" href="https://www.borovaya.by/#model">
        Автомобили
      </a>
      <a className="logo_link" href="https://www.borovaya.by/service/">
        Сервис
      </a>
      <a className="logo_link" href="https://www.borovaya.by/#spare">
        Запчасти и аксессуары
      </a>
      <a className="logo_link" href="https://www.borovaya.by/#repair">
        Кузовной ремонт
      </a>
      <a
        className="logo_link"
        href="https://www.borovaya.by/finance/lizing-dlya-yuridicheskikh-lits/"
      >
        Финансовые услуги
      </a>
      <a className="logo_link" href="https://www.borovaya.by/#online">
        Клиентам
      </a>
    </ul>
  );
}
