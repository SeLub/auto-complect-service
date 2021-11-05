/* eslint-disable react/destructuring-assignment */
import React from "react";
import { connect } from "react-redux";
import HullSpecPrices from "../HullSpecPrices";

const css = `
.box_car_description{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
`;

const mapStateToProps = (state) => {
  return {
    name: state.hullTypes.name,
    base_price: state.hullTypes.base_price,
    base_price_currency: state.hullTypes.base_price_currency,
  };
};

function CarDescription(props) {
  return (
    <div className="box_car_description">
      <style type="text/css">{css}</style>
      <div className="hull_desc">
        <p className="hull_name">{props.name}</p>
        <p className="hull_type">Цельнометаллический фургон</p>
      </div>
      <HullSpecPrices
        base_price={props.base_price}
        base_price_currency={props.base_price_currency}
      />
    </div>
  );
}

export default connect(mapStateToProps)(CarDescription);
