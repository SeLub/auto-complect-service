/* eslint-disable */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */

/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */

import "./App.css";

import Starting_Page from "./pages/starting_page/starting_page";
import { BrowserRouter as Router, Route } from "react-router-dom";
import configurator_p1 from "./pages/configurator_p1/configurator_p1";

// import Block_ford_cards from "./components/Block_ford_cards";
// Это корневой компонент
// Сохраняйте компоненты в папке components
// Если создаёте универсальный компонет (например кнопка) сохраняйте в папку components/generic
// Для своих корневых компонентов можно создавать свои подпапки. Например components/products для компонета автомобиля

function App() {
  return (
  <div className="App">
      <Router>
        <Route path="/" exact>
          <Starting_Page />
        </Route>
        <Route path="/configurator_p1" component={configurator_p1}></Route>
      </Router>
    </div>
  );
}

export default App;
