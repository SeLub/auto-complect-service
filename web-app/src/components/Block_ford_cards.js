/* eslint-disable */
/* eslint-disable camelcase */
/* eslint-disable react/prefer-stateless-function */
import "./Block_ford_cards.css";

import React, { Component } from "react";

export default function Block_ford_cards(props) {
  return (
    <body className="main-page-body">
      <div className="block_ford_cards">
        <div className="block_ford_card1">
          <img src={props.hull_types.pic1} className="main_ford_pic" alt="" />
        </div>
        <div className="minor_ford_pic">
          <img
            src={props.hull_types.pic2}
            className="main_ford_pic101"
            alt=""
          />
          <img
            src={props.hull_types.pic3}
            className="main_ford_pic102 clarity"
            alt=""
          />
          <img
            src={props.hull_types.pic4}
            className="main_ford_pic103 clarity"
            alt=""
          />
          <img src="/img/rectangle.jpg" className="rectangle" alt="" />
        </div>
      </div>
    </body>
  );
}

// export default Block_ford_cards;
