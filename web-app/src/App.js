<<<<<<< HEAD
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
=======
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import StartingPage from "./pages/starting_page/StartingPage";
import ConfiguratorP1 from "./pages/configurator_p1/ConfiguratorP1";
import ConfiguratorP2 from "./pages/configurator_p2/ConfiguratorP2";
import ConfiguratorP3 from "./pages/configurator_p3/ConfiguratorP3";
import PdfPage from "./pages/pdf_page/PdfPage";

import store from "./store/store";
import "./App.css";
>>>>>>> origin/dev
// import Block_ford_cards from "./components/Block_ford_cards";
// Это корневой компонент
// Сохраняйте компоненты в папке components
// Если создаёте универсальный компонет (например кнопка) сохраняйте в папку components/generic
// Для своих корневых компонентов можно создавать свои подпапки. Например components/products для компонета автомобиля

// ReactDOM.render(
//   <StyledEngineProvider injectFirst>
//     <Picking_switch />
//   </StyledEngineProvider>,
//   document.querySelector("#root")
// );

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact>
          <StartingPage />
        </Route>
<<<<<<< HEAD
        <Route path="/configurator_p1" component={configurator_p1}></Route>
        <Route path="/configurator_p2" component={configurator_p2}></Route>
        <Route path="/Configurator_p3" component={Configurator_p3}></Route>
=======
        <Route path="/configurator_p1" component={ConfiguratorP1} />
        <Route path="/configurator_p2" component={ConfiguratorP2} />
        <Route path="/Configurator_p3" component={ConfiguratorP3} />
        <Route path="/PdfPage" component={PdfPage} />
>>>>>>> origin/dev
      </Router>
    </Provider>
  );
}
export default App;
