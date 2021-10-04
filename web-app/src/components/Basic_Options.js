/* eslint-disable */

import React from "react";
import "./basic_options.css"


export default function Basic_Options(props) {
    return(
        <div className="basic_options_wrapper">
            {props.hull_types.map((hull_types, index) => {
                return(
                   <div className = "basic_option">
                        <div className="basic_option_content">
                            <p>{hull_types}</p>
                        </div>
                        <div className="basic_option_separator">
                            
                        </div>
                   </div> 
                )
            })}
        </div>
    );
}