import './App.css';
import Logo from './components/Logo';

// Это корневой компонент
// Сохраняйте компоненты в папке components
// Если создаёте универсальный компонет (например кнопка) сохраняйте в папку components/generic
// Для своих корневых компонентов можно создавать свои подпапки. Например components/products для компонета автомобиля


function App() {
  return (
    <div className="App">
      <Logo />
    </div>
  );
}

export default App;
