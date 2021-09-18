/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import React from "react";

// component app-header for displaying the contact number of the phone,
// company name, callback buttons, and appointment

export default class AppHeader extends React.Component {
  render() {
    const { onRequestCall, signService } = this.props;
    return (
      <div className="app-header">
        <div className="company-name">Атлант-М Боровая</div>
        <div className="address-main">Минский р-н, р-н д.Боровая, 2</div>
        <div className="telephone-number">
          {" "}
          <a href="tel:+375445509337">+375 44 550 93 37</a>
        </div>
        <div className="request-call">
          <button type="button" value="Заказать звонок" onClick={onRequestCall}>
            Заказать звонок
          </button>
        </div>
        <div className="sign-service">
          <button type="button" onClick={signService}>
            Записаться на сервис
          </button>
        </div>
      </div>
    );
  }
}
