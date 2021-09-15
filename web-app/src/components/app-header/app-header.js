/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import React from "react";

// component app-header for displaying the contact number of the phone, company name, callback buttons, and appointment appointment

export default class AppHeader extends React.Component {
  render() {
    const { onRequestCall, signService } = this.props;
    return (
      <div className="app-header">
        <h2>Атлант-М Боровая</h2>
        <h2>Минский р-н, р-н д.Боровая, 2</h2>
        <h2>+375 44 550 93 37</h2>
        <button
          type="button"
          className="request-call"
          value="Заказать звонок"
          onClick={onRequestCall}
        />
        <button
          type="button"
          className="sign-service"
          value="Записаться на сервис"
          onClick={signService}
        />
      </div>
    );
  }
}
