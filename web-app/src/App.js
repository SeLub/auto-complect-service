import './App.css';
import Button from './components/generic/button';
import {useState} from 'react'

function App() {
  let [panel, setPanel] = useState('page1')
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
    
    const MainPanel = (panel) => {
      console.log(panel)
      return ( 
      <>
      <BreadCrumbs />
      <PageTitle />
      <Panel panel={panel} />
      </>
     )}
    
    const BreadCrumbs  = () => {return ( <div>BreadCrumbs </div> )}
    const PageTitle = () => {return ( <div>PageTitle</div> )}
    const Panel = (panel) => {
      console.log('panel: ', panel.panel.panel)
      let comp ='77';
      if (panel.panel.panel == 'page1') { comp = <div><Slideshow /><Specification /></div> }
      else if (panel.panel.panel == 'config') { comp = <div><Slideshow /></div> }
      console.log(comp)
      return ( <>{comp}</> )}
    
    const Slideshow = () => {return ( <div>Slideshow</div> )}
    const Specification = () => {return ( <div>Specification <Button panel='pricelist' setPanel={setPanel}/><Button panel='config' setPanel={setPanel}/></div> )}

  return (
    <div className="App">
      <HeaderPanel />
      <MenuPanel />
      <MainPanel panel={panel} />
    </div>
  );
}

export default App;