/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import managerContactDetails from "./baseManagers.json";

/* Компонент Box служит в качестве компонента-оболочки. */

/* FormControl Предоставляет контекст, такой как заполненный
    сфокусированный, ошибка,необходимый для ввода формы В FormControl можно
    использовать только одну InputBase */

export default function ManagerContactDetails() {
  const [managerName, setManagerName] = React.useState(" ");
  const [valueAddress, setValueAddress] = React.useState("");
  const [valueEmail, setValueEmail] = React.useState("");
  const [valuePhone, setValuePhone] = React.useState("");

  // функция которая считывает выбранное значение

  const handleChange = (event) => {
    // не обновляет всю страницу при изменении значения в выпадающем списке

    event.preventDefault();
    setManagerName(event.target.value);
  };

  return (
    <Box marginLeft={93} marginTop={-33} sx={{ width: "100%", maxWidth: 455 }}>
      <Typography variant="h6" gutterBottom component="div">
        Контактные данные менеджера
      </Typography>
      <Divider orientation="horizontal" style={{ width: "100%" }} />
      <FormControl fullWidth margin="dense">
        <InputLabel id="select-label-manager">Выберите менеджера</InputLabel>
        <Select
          labelId="select-label-manager"
          id="select-manager"
          label="Выберите менеджера"
          value={managerName}
          onChange={handleChange}
        >
          {managerContactDetails.map((element) => {
            return <MenuItem value={element.id}>{element.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <div>
        <TextField
          fullWidth
          margin="normal"
          value={valueAddress}
          id="standard-read-only-input"
          label="Адрес"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          fullWidth
          value={valuePhone}
          margin="normal"
          id="standard-read-only-input"
          label="Телефон"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          fullWidth
          value={valueEmail}
          margin="normal"
          id="standard-read-only-input"
          label="E-mail"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
      </div>
    </Box>
  );
}
