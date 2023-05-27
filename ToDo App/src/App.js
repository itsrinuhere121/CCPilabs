import './App.css';
import Create from './Create';
import Render from './Render';
import {useState,useEffect} from 'react';
function App() {
      //const [data,setData]=useState([]);
      //  useEffect(()=>{
      //  console.log(data)
      //},[data])

    const getdata = (list)=>{
      console.log("Parent "+list);
    }
    data ="temp";
  return (
  <>
  <div>
    <Create data = {getdata}/>
    <Render data = {data}></Render>
  </div>
  </>
  );
}

export default App;
