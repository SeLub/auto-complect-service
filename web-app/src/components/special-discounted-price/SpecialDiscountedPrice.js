import * as React from "react";
import { Typography, Container } from "@material-ui/core";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

const SpecialDiscountedPrice = () => {
  const css = `
  @import url("https://fonts.cdnfonts.com/css/ford-antenna");
  .special_discounted_price_wrapper{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    max-width: 100%;
    position: relative;
    margin: 24px 0px 26px 0px;
    padding-left: 0px;
    padding-right: 0px;
    text-align: left;
    overflow: hidden;
  }
  .special_discounted_price_h1{
    width: 266px; 
    height: 50px;
    display: flex;
    margin: 0px 28px 0px 0px;
    font-family: "Ford Antenna";
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.1px;
    color: #2D96CD;
    justify-content: flex-start;
    // align-self: center;
  }
.special_discounted_price_h3{
  width: 160px;
  margin-right: 0px;
  align-self: center;
  line-height: 25px;
  margin-bottom: 0px;
}
.special_discounted_price{
    width: 160px;
    height: 50px;
    font-family: Ford Antenna;
    margin: 0px 0px 0px 0px;
    font-size: 18px;
    line-height: 25px;
    text-align: right;
    letter-spacing: 0.1px;
    color: #333333;
}
`;
  return (
    <div>
      <style type="text/css">{css}</style>
      <Container className="special_discounted_price_wrapper">
        <Typography
          className="special_discounted_price_h1"
          variant="h1"
          paragraph
        >
          Специальная цена со скидкой
        </Typography>
        <Typography className="special_discounted_price_h3" variant="h3">
          <FormControl
            className="special_discounted_price"
            sx={{ m: 1 }}
            variant="outlined"
          >
            <OutlinedInput
              className="special_discounted_price"
              id="outlined-adornment-price"
              endAdornment={<InputAdornment position="end">BYN</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "price",
              }}
            />
          </FormControl>
        </Typography>
      </Container>
    </div>
  );
};

export default SpecialDiscountedPrice;
