/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */

/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import StartingPage from "./pages/starting_page/StartingPage";
import configuratorP1 from "./pages/configurator_p1/ConfiguratorP1";
import configuratorP2 from "./pages/configurator_p2/ConfiguratorP2";
import configuratorP3 from "./pages/configurator_p3/ConfiguratorP3";
import PdfPage from "./pages/pdf_page/PdfPage";

import store from "./store/store";
import "./App.css";
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
        <Route path="/configurator_p1" component={configuratorP1} />
        <Route path="/configurator_p2" component={configuratorP2} />
        <Route path="/configurator_p3" component={configuratorP3} />
        <Route path="/PdfPage" component={PdfPage} />
      </Router>
    </Provider>
  );
}
export default App;