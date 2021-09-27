/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */

/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
import AppHeader from "./components/app-header";
import BreadCrumbs from "./components/breadcrumb";
import "./App.css";
import Logo from "./components/Logo";
import Hull_specs_display from "./components/Hull_specs_display";
// import Block_ford_cards from "./components/Block_ford_cards";
// Это корневой компонент
// Сохраняйте компоненты в папке components
// Если создаёте универсальный компонет (например кнопка) сохраняйте в папку components/generic
// Для своих корневых компонентов можно создавать свои подпапки. Например components/products для компонета автомобиля

function App() {
  return (
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
    </div>
  );
}

export default App;
