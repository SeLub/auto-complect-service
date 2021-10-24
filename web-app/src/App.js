import './App.css';
import Button from './components/generic/button';
import {useState} from 'react'

function App() {
<<<<<<< HEAD
  let [panel, setPanel] = useState('page1')
=======
  let [panel, setPanel] = useState('welcome')
>>>>>>> 5cbc3d302b92e7f46a4303f8fe918ac92f17b88c
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
    
<<<<<<< HEAD
    const MainPanel = (panel) => {
      console.log(panel)
=======
    const MainPanel = (dash) => {
      console.log(dash)
>>>>>>> 5cbc3d302b92e7f46a4303f8fe918ac92f17b88c
      return ( 
      <>
      <BreadCrumbs />
      <PageTitle />
<<<<<<< HEAD
      <Panel panel={panel} />
=======
      <Panel />
>>>>>>> 5cbc3d302b92e7f46a4303f8fe918ac92f17b88c
      </>
     )}
    
    const BreadCrumbs  = () => {return ( <div>BreadCrumbs </div> )}
    const PageTitle = () => {return ( <div>PageTitle</div> )}
<<<<<<< HEAD
    const Panel = (panel) => {
      console.log('panel: ', panel.panel.panel)
      let comp ='77';
      if (panel.panel.panel == 'page1') { comp = <div><Slideshow /><Specification /></div> }
      else if (panel.panel.panel == 'config') { comp = <div><Slideshow /></div> }
      console.log(comp)
      return ( <>{comp}</> )}
=======
    const Panel = () => {return ( <div><Slideshow /><Specification /></div> )}
>>>>>>> 5cbc3d302b92e7f46a4303f8fe918ac92f17b88c
    
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