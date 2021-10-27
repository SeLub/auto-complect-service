/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from "react";

// this component for going to next page

export default class NextButton extends React.Component {
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
