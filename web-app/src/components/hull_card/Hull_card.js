/* eslint-disable */

import React from "react";
import "./hull_card.css";
import { useHistory } from "react-router";

export default function Hull_card(props){
    const history = useHistory();
    function handleClick(hull_types){
      history.push({
        pathname: '/configurator_p2',
      })
    }
    <div className="car_card">
        <div className = "car_type">
            <p>
                {props.card_car.car_type}
            </p>
        </div>
        <div className = "car_desc">
            <p>
                {props.card_car.car_desc}
            </p>
        </div>
        <div className = "car_choice">
            <p>
                Выбор схемы комплектации:
            </p>
        </div>
        {props.card_car.car_layouts.map((car_layouts, index) => {
            return(
                <button className="layout_option">
                    {car_layouts}
                </button>
            )
        })}
        <div className = "car_img">
            <img src = {props.card_car.car_type_pic}></img>
        </div>
        <div className = "car_cost">
        </div>
        <button className="car_repurpose_btn" onClick={handleClick}>

        </button>
    </div>
};

