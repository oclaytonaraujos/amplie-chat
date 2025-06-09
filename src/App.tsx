import { Sidebar } from './components/sidebar/Sidebar'
import { OpenMenu, CloseMeunu, BtnMenu, Content } from './App.Style'
import { useState } from 'react'

const App = () => {
  const [open, setIsOpen] = useState(false);


  return (

    <>
      <Sidebar isOpen={open} />
      <Content isOpen={open}>
        <BtnMenu onClick={() => setIsOpen(!open)}>
          {open ? <CloseMeunu /> : <OpenMenu />}
        </BtnMenu>
      </Content>
    </>
  );
};


export default App
