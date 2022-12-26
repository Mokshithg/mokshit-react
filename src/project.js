import React,{useState} from 'react'
import './mystyle.css'
export const App = () => {
  const [input,setInput] = useState('');
  const [result,setResult] = useState(0);
  const handler = e =>{
    setInput(e.target.value);
  }
  return (
    <div className='container'>
      <center>
        <h1 className='text'>Calculator</h1>
        <input type='text' value={input} name='input' onChange={handler}></input><br></br>
        <br></br>
        <button onClick={() => setInput(input+'1')}>1</button>
        <button onClick={() => setInput(input+'2')}>2</button>
        <button onClick={() => setInput(input+'3')}>3</button>
        <button onClick={() => setInput(input+'+')}>+</button>
        <br></br>
        <button onClick={() => setInput(input+'4')}>4</button>
        <button onClick={() => setInput(input+'5')}>5</button>
        <button onClick={() => setInput(input+'6')}>6</button>
        <button onClick={() => setInput(input+'-')}>-</button>
        <br></br>
        <button onClick={() => setInput(input+'7')}>7</button>
        <button onClick={() => setInput(input+'8')}>8</button>
        <button onClick={() => setInput(input+'9')}>9</button>
        <button onClick={() => setInput(input+'*')}>*</button>
        <center>
        <button onClick={() => setInput(input+'0')}>0</button>
        <button onClick={() => setInput('')}>clear</button>
        <button onClick={() => setInput(input+'/')}>/</button><br></br>
        <center>
        <button onClick={() => setResult(eval(input))}>Result</button>
        </center>
        <h4><imp>Result is : {result}</imp></h4>
        </center>
      </center>
    </div>
  )
}

export default App;