/* eslint-disable import/newline-after-import */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Container } from '@mui/material';

const css = `
@import url("http://fonts.cdnfonts.com/css/ford-antenna");
.css-j204z7-MuiFormControlLabel-root {
  margin:0px;
  padding:0px
}

//   .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked {
//     height: 18px !important;
//     width: 18px !important;
//     background-color: #eee !important;
//     border-radius: 15px !important;
//     border: 2px solid #717171ad !important;
// }
// .css-i4bv87-MuiSvgIcon-root {
//   //  width: 0px !important;
//   //  height: 0px !important; 
//   // background-color: #eee !important;

// }
.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked {
  color: grey !important;
}

// //   // .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked {
// //   //   color: #eee;
// .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked{
//   color: #eee !important;
//   background-image: url(img/11.png);
// }

.width {
  border-bottom: 1px solid #9e9e9e45;
  padding-bottom: 40px;
}

.css-1oqqzyl-MuiContainer-root {
  margin-top: 654px;
  position: absolute;
  right: 76px;
  font-family: "Ford Antenna";
  font-size: 16px;
  font-style: normal;
  font-weight: 600px;
  line-height: 20px;
  letter-spacing: 0.10000000149011612px;
  text-align: right;
  color: #717171;
}

.opt_eq_priceС {
  // position: absolute;
  color: #717171;
  font-family: "Ford Antenna";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.10000000149011612px;
  text-align: right;
  margin-right: 0px;
  margin-top: -601px;

}`;

export default function CheckboxLabels() {

  return ( 
    <FormGroup>
      <style type="text/css">{css}</style>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Позиция 1" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Позиция 2" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Позиция 3" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Позиция 4" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Позиция 5" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Позиция 6" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Позиция 7" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Позиция 8" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Позиция 9" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Позиция 10" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Позиция 11" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Позиция 12" />     

          <Container className="opt_eq_price_valueC">
        <div className="elems_price_valueC elem1_price_valueC">62 317 RUB</div>
        <div className="elems_price_valueC elem2_price_valueC">20 000 RUB</div>
        <div className="elems_price_valueC elem3_price_valueC">45 100 RUB</div>
        <div className="elems_price_valueC elem4_price_valueC">150 000 RUB</div>
        <div className="elems_price_valueC elem5_price_valueC">70 800 RUB</div>
        <div className="elems_price_valueC elem6_price_valueC">200 00 RUB</div>
        <div className="elems_price_valueC elem7_price_valueC">200 00 RUB</div>
        <div className="elems_price_valueC elem5_price_valueC">70 800 RUB</div>
        <div className="elems_price_valueC elem6_price_valueC">200 00 RUB</div>
        <div className="elems_price_valueC elem7_price_valueC">200 00 RUB</div>  
        <div className="elems_price_valueC elem6_price_valueC">200 00 RUB</div>
        <div className="elems_price_valueC elem7_price_valueC">200 00 RUB</div>
      </Container>

      <div className="opt_eq_priceС">Цена</div>    
          <div className="width p1" />
          <div className="width p2" />
          <div className="width p3" />
          <div className="width p4" />
          <div className="width p5" />
          <div className="width p6" />
          <div className="width p7" />
          <div className="width p8" />
          <div className="width p9" />
          <div className="width p10" />
          <div className="width p11" />
          <div className="width p12" />
    </FormGroup>
 );
}
