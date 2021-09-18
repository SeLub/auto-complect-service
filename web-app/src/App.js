/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import AppHeader from "./components/app-header";
import BreadCrumbs from "./components/breadcrumb";
// Это корневой компонент
// Сохраняйте компоненты в папке components
// Если создаёте универсальный компонет (например кнопка) сохраняйте в папку components/generic
// Для своих корневых компонентов можно создавать свои подпапки. Например components/products для компонета автомобиля

function App() {
  return (
    <div className="App">
      <div>
        <AppHeader />
      </div>
      <div>
        <BreadCrumbs />
      </div>
    </div>
  );
}

export default App;
