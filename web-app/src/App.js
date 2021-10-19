/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import Starting_Page from "./pages/starting_page/starting_page";
import { BrowserRouter as Router, Route } from "react-router-dom";
import configurator_p1 from "./pages/configurator_p1/configurator_p1";
import configurator_p2 from "./pages/configurator_p2/configurator_p2";
import Configurator_p3 from "./pages/configurator_p3/Configurator_p3";
import { Provider } from 'react-redux';
import store from "./store/store";
// import Block_ford_cards from "./components/Block_ford_cards";
// Это корневой компонент
// Сохраняйте компоненты в папке components
// Если создаёте универсальный компонет (например кнопка) сохраняйте в папку components/generic
// Для своих корневых компонентов можно создавать свои подпапки. Например components/products для компонета автомобиля

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact>
          <Starting_Page />
        </Route>
        <Route path="/configurator_p1" component={configurator_p1}></Route>
        <Route path="/configurator_p2" component={configurator_p2}></Route>
        <Route path="/Configurator_p3" component={Configurator_p3}></Route>
      </Router>
    </ Provider>
  );
}

export default App;
