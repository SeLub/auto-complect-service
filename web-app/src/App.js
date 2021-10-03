/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */

/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
import AppHeader from "./components/app-header";
import BreadCrumbs from "./components/breadcrumb";
import "./App.css";
<<<<<<< HEAD

import Starting_Page from "./pages/starting_page/starting_page";
import { BrowserRouter as Router, Route } from "react-router-dom";
import configurator_p1 from "./pages/configurator_p1/configurator_p1";

=======
import Logo from "./components/Logo";
import Hull_specs_display from "./components/Hull_specs_display";
>>>>>>> 28225377ef62f557a4176cc5e2c6515f724668a5
// import Block_ford_cards from "./components/Block_ford_cards";
// Это корневой компонент
// Сохраняйте компоненты в папке components
// Если создаёте универсальный компонет (например кнопка) сохраняйте в папку components/generic
// Для своих корневых компонентов можно создавать свои подпапки. Например components/products для компонета автомобиля

function App() {
  return (
<<<<<<< HEAD
  <div className="App">
      <Router>
        <Route path="/" exact>
          <Starting_Page />
        </Route>
        <Route path="/configurator_p1" component={configurator_p1}></Route>
      </Router>
=======
    <div className="">
      <div>
        <AppHeader />
      </div>
      <Logo />
      <div>
        <BreadCrumbs />
      </div>
      <div>
        <Hull_specs_display />
      </div>
>>>>>>> 28225377ef62f557a4176cc5e2c6515f724668a5
    </div>
  );
}

export default App;
