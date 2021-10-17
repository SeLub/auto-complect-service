/* eslint-disable no-console */
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import managerContactDetails from "./baseManagers.json";

/* Компонент Box служит в качестве компонента-оболочки. */

/* FormControl Предоставляет контекст, такой как заполненный
    сфокусированный, ошибка,необходимый для ввода формы В FormControl можно
    использовать только одну InputBase */

export default function ManagerContactDetails() {
  const [managerName, setManagerName] = React.useState(" ");

  // функция которая считывает выбранное значение

  const handleChange = (event) => {
    // не обновляет всю страницу при изменении значения в выпадающем списке

    event.preventDefault();
    setManagerName(event.target.value);
  };

  return (
    <Box sx={{ height: 441, wight: 455 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label-manager">Выберите менеджера</InputLabel>
        <Select
          labelId="select-label-manager"
          id="select-manager"
          value={managerName}
          onChange={handleChange}
        >
          {managerContactDetails.map((element) => {
            return <MenuItem value={element.id}>{element.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
