import './App.css';
import Button from './components/generic/button';
import {useState} from 'react'

function App() {
  let [panel, setPanel] = useState('welcome')
  const HeaderPanel = () => { return ( 
    <>
    <div>HeaderPanel
    <Button panel='oreder1' setPanel={setPanel}/>
    <Button panel='oreder2' setPanel={setPanel}/>
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
    
    const MainPanel = (dash) => {
      console.log(dash)
      return ( 
      <>
      <BreadCrumbs />
      <PageTitle />
      <Panel />
      </>
     )}
    
    const BreadCrumbs  = () => {return ( <div>BreadCrumbs </div> )}
    const PageTitle = () => {return ( <div>PageTitle</div> )}
    const Panel = () => {return ( <div><Slideshow /><Specification /></div> )}
    
    const Slideshow = () => {return ( <div>Slideshow</div> )}
    const Specification = () => {return ( <div>Specification <Button panel='pricelist' setPanel={setPanel}/><Button panel='config' setPanel={setPanel}/></div> )}

  return (
    <div className="App">
      <HeaderPanel />
      <MenuPanel />
      <MainPanel />
    </div>
  );
}

export default App;