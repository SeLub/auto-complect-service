/* eslint-disable */

import React from "react";
import { useHistory } from "react-router";


export default function Tmp_p3(){
    const history = useHistory();
    function handleClick(hull_types){
      history.push({
        pathname: '/configurator_p2',
      })
    }
    return(
        <>
            <button onClick={handleClick}>
                Кнопка временная
            </button>
        </>
    )
}