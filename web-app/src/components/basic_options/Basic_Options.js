/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-named-as-default-member */
import React from "react";
import { connect } from "react-redux";
// import store from "../../store/store";
import "./basic_options.css";
import { mapStateToProps } from "../selectors/basicOptionsSelector";

function BasicOptions(props) {
  // const baseOptions = store.getState().hullTypes.base_options;
  return (
    <div className="basic_options_wrapper">
      <div className="basic_options_note">
        <img src="/img/vector.jpg" className="info_icon" />
        <p>Данное оборудование является стандартным в вашей конфигурации</p>
      </div>
      {props.base_options.map((baseOption) => {
        return (
          <div className="basic_option">
            <div className="basic_option_content">
              <p>{baseOption}</p>
            </div>
            <div className="basic_option_separator" />
          </div>
        );
      })}
    </div>
  );
}

export default connect(mapStateToProps)(BasicOptions);
