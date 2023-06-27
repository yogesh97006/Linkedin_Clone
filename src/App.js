import { useState } from "react";
import "./App.css";
import Login from "./Auth/Login";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [Credentails, setCredentails] = useState({});
  const login = async (e) => {
    e.preventDefault()
    try{
    let res = Login(Credentails.Email, Credentails.Password);
   console.log(res)
    return res;}
    catch(err){
      console.log(err)
    }
  };
  return (
    <div className="App">
      <form className="container">
        <input
          type="text"
          placeholder="Email"
          onChange={(event) =>
            setCredentails({ ...Credentails, Email: event.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) =>
            setCredentails({ ...Credentails, Password: event.target.value })
          }
        />
        <button onClick={login,console.log('working')}>Login</button>
      </form>
    </div>
  );
}

export default App;
