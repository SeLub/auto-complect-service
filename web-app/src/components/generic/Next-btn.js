/* eslint-disable react/prefer-stateless-function */
import React from "react";

// this component for going to next page

export default class AppHeader extends React.Component {
  render() {
    return (
      <div className="nextBtn">
        <button type="button" onClick={() => console.log("Next")}>
          Дальше
        </button>
      </div>
    );
  }
}
