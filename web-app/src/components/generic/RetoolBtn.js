/* eslint-disable prettier/prettier */
import React from "react";
import { Button, Stack } from "@mui/material";
import { useHistory } from "react-router-dom";

const RetoolBtn = () => {
  const history = useHistory();

  function handleClick() {
    history.push({
      pathname: "/configurator_p2",
    });
  }
  return (
    <Stack direction="row">
      <Button
        variant="outlined"
        size="medium"
        fullWidth="true"
        onClick={() => handleClick()}
      >
        Переоборудовать
      </Button>
    </Stack>
  );
};

export default RetoolBtn;