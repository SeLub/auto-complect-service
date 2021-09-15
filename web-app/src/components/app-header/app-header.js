/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import React from "react";

// component app-header for displaying the contact number of the phone, company name, callback buttons, and appointment appointment

export default class AppHeader extends React.Component {
  render() {
    return (
      <div className="app-header">
        <h2>Атлант-М Боровая</h2>
        <h2>Минский р-н, р-н д.Боровая, 2</h2>
        <h2>+375 44 550 93 37</h2>
      </div>
    );
  }
}
