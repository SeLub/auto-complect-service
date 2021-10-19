/* eslint-disable */

import React from "react";
import store from "../../store/store";
import "./basic_options.css"


export default function Basic_Options(props) {
    const base_options = store.getState().hullTypes.base_options
    
    return(
        <div className="basic_options_wrapper">
            <div className="basic_options_note">
                <img src="/img/vector.jpg" className = "info_icon"></img>
                <p>
                    Данное оборудование является стандартным в вашей конфигурации
                </p>
            </div>
            {base_options.map((base_options, index) => {
                return(
                   <div className = "basic_option">
                        <div className="basic_option_content">
                            <p>{base_options}</p>
                        </div>
                        <div className="basic_option_separator">

                        </div>
                   </div> 
                )
            })}
        </div>
    );
}