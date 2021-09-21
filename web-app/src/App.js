import './App.css';
import Hull_specs_display from './components/Hull_specs_display'
// Это корневой компонент
// Сохраняйте компоненты в папке components
// Если создаёте универсальный компонет (например кнопка) сохраняйте в папку components/generic
// Для своих корневых компонентов можно создавать свои подпапки. Например components/products для компонета автомобиля


function App() {
  return (
    <div className="App">
      <div>
        <Hull_specs_display />
      </div>
    </div>
  );
}

export default App;