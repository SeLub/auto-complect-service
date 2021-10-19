/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-named-as-default-member */
import React from "react";
import store from "../../store/store";
import "./basic_options.css";

export default function BasicOptions() {
  const baseOptions = store.getState().hullTypes.base_options;

  return (
    <div className="basic_options_wrapper">
      <div className="basic_options_note">
        <img src="/img/vector.jpg" className="info_icon" />
        <p>Данное оборудование является стандартным в вашей конфигурации</p>
      </div>
      {baseOptions.map((baseOption) => {
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
