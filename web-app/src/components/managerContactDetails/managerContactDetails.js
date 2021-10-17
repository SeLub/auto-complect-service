import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ManagerContactDetails() {
  const [managerName, setManagerName] = React.useState(" ");

  // функция которая считывает выбранное значение

  const handleChange = (event) => {
    // не обновляет всю страницу при изменении значения в выпадающем списке

    event.preventDefault();
    setManagerName(event.target.value);
  };
}
