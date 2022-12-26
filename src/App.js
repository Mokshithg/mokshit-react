import React ,{useState} from 'react'
import ComponentB from './components/ComponentB' 
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'


export const App = () => {
  const [mode,setMode] = useState('light');
  const modeChanger = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor  = '#343a40';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div>
      <Alert alert={'This is Created by --Mokshh'}/>
      <strong><ComponentB title="mokshit" mode={mode} modeChanger={modeChanger} about={'About us'} homepage={"Home"}/></strong>
      
      <Router> 
        <Routes>
          <Route path='/About' element={<About mode={mode}/>} />
          <Route path='/' element={<TextForm heading="Enter the text in the below box!" mode={mode}/> } />
        </Routes>
      </Router>
    </div>
  )
}
export default App;