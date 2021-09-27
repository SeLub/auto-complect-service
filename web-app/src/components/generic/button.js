import React from "react";

const Button = ({panel, setPanel}) => { 
    return (<button type="button" onClick ={ ()=>{console.log(panel);setPanel(panel)} } > Test </button>)};

export default Button; 