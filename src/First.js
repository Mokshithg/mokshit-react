import React from 'react'
import { useHistory } from 'react-router-dom';
 const First = () => {
   let history = useHistory();
  return (
    <div>
        <center>
            <h1>This is the First page designed!</h1>
            <button onClick={() => history.pushState('/Navbar')}>Login</button>
        </center>
    </div>
  )
}
export default First


