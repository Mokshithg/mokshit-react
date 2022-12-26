import React,{useState} from 'react'

export const App = () => {
  const [data,setData] = useState({
  username : "",
  password : "",
 })
  const {username,password} = data;
  const onChange = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler = e =>{
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
     <center>
      <form onSubmit={submitHandler}>
      <input type="text" placeholder="username" value={username} name="username" onChange={onChange}></input><br></br>
      <input type="password" placeholder="password" name="password" value={password} onChange={onChange}></input><br></br>
      <input type="submit" name="submit"></input>
      </form>
     </center>
    </div>
  )
}

export default App;





import React from 'react'

function App(){
  const array = [10,20,30,40,50,60]
  const after = array.filter(moksh => moksh>39.9)
  return (
    <div>
      {
        after.map(moksh => <li>{moksh}</li>)
      }
    </div>
  )
}

export default App;



import React,{useState} from 'react'

export const App = () => {
  const [data,setData] = useState({
  username : "",
  password : "",
 })    
  const {username,password} = data;
  const onChange = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler = e =>{
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
     <center>
      <form onSubmit={submitHandler}>
      <input type="text" placeholder="username" value={username} name="username" onChange={onChange}></input><br></br>
      <input type="password" placeholder="password" name="password" value={password} onChange={onChange}></input><br></br>
      <input type="submit" name="submit"></input>
      </form>
     </center>
    </div>
  )
}

export default App;
