import './App.css';
import Button from './components/generic/button';

const HeaderPanel = () => { return ( 
<>
<div>HeaderPanel
<Button />
<Button />
</div>
</>
 )}
const MenuPanel = () => {return (
<>
<div>
<Logo />
<Logo />
<MainMenu />
</div>
</>
)}

const Logo = () => {return ( <div>Logo</div> )}
const MainMenu = () => {return ( <div>MainMenu</div> )}

const MainPanel = () => {return ( 
  <>
  <BreadCrumbs />
  <PageTitle />
  <Component />
  </>
 )}

const BreadCrumbs  = () => {return ( <div>BreadCrumbs </div> )}
const PageTitle = () => {return ( <div>PageTitle</div> )}
const Component = () => {return ( <div><Slideshow /><Specification /></div> )}

const Slideshow = () => {return ( <div>Slideshow</div> )}
const Specification = () => {return ( <div>Specification <Button /><Button /></div> )}

function App() {
  return (
    <div className="App">
      <HeaderPanel />
      <MenuPanel />
      <MainPanel />
    </div>
  );
}

export default App;