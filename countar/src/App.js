import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(false);
  let id;

  useEffect(() => {
    if(check){
      id = setInterval(() => {
        setCount(count+2)
      }, 100);
    }
    else{
      setCount(count)
    }
    
    return () => {
      clearInterval(id)
    };
  }, [count,check]);
  
      let clear=()=>{
        setCount(0)
        setCheck(false)
      }

  return (
    <div className="App">
      <center>
        <div className="watch">
        <button onClick={() => setCheck(true)}>START</button>
      <br/>

      
      <h1>{count}</h1>
      <button onClick={() => setCheck(false)} className="btn2">STOPP</button>
      <button onClick={() => clear()}>CLEAR</button>
        </div>
      
      </center>
    </div>
  );
}

export default App;