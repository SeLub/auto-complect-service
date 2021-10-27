import React from "react";

function Logo() {
  return (
    <div>
      <div className="App">
        <div className="logo">
          <ul className="logo_img">
            <a href="https://www.borovaya.by/">
              <img src="/logo-atlant.png" className="logo_atlant" alt="" />
            </a>
            <img src="/logo-line.png" className="logo_line" alt="" />
            <a href="https://www.borovaya.by/">
              <img src="/logo-ford.png" className="logo_ford" alt="" />
            </a>
          </ul>
          <LogoLink />
        </div>
      </div>
      <img
        className="underline_the_logo"
        src="/img/underline_the_logo.png"
        alt=""
      />
    </div>
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
