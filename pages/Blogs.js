import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./MemoTodos.js";
import styles from './miro.module.css'; 

const styleMiro = {
  display:"block",
  margin:"0px",
  backgroundColor:"blue",
  textAlign: "center",
  color:"red",
}

const Blogs = () => {
  const [count, setCount] = useState(0);
  const [pocet, setCount1] = useState(0);

  const [count10, setCount3] = useState(0);


  const [user1, setMan] = useState('Miro');
  const [auto, zmenena] = useState({farba:'BIELA',
  kolesa:2})
  const [moto, zmenena2] = useState({farba:'Siva',
kolesa:2})
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  const aa = ["todo", "todo 2"];
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount((c) => c + 10);
  };


const [count20, setCount4] = useState(0);
useEffect(()=>{
  setCount4(count20=> count20 + 1);
  setCount4(count20=> count20 + 1);
},[])

  const zmena = () => {
          setMan(previousState => {
            return  "blue"}
          );
      //  ***********************************************
          zmenena(prevState => {
            let pocet=auto.kolesa+50;
            return  { ...prevState,kolesa:pocet};
          });
      //************************************************** */
          zmenena2(poslednyState => {
            let last=moto.farba+" a belava";
            return  {farba:last};
          });
  }; 
  
  useEffect(() => {
        let timer=setTimeout(() => { setCount1((c) => c + 1)
                          console.log('<< log ' + pocet)
                          },1000);
                  
        return ()=> clearTimeout(timer)  },[]);


                          
  return (
    <>
      <h2 style={styleMiro}>Toto vzdy vykresli zoznam aj ked sa nezmeni</h2>
      {aa.map((e) => {
        return( 
          <div>
          <p className={styles.bigblue}> {e} </p>       
          </div>
        )
      }
      )
    }
         <hr />
      <Todos todos1={todos} />
      <hr/>
      <p style={{textAlign:"center"}}> ------ az tu zacina pocitat a Todos sa zase vykresli-ggg------</p>
      <div style={{marginLeft:"10px"}}>
        Count: {count} 
{/*}        <button onClick={increment} style={{marginLeft:"10px"}}> + </button> */}
        <div style={{marginLeft:"10px"}}> pocet po sekunde: {pocet} </div>
        <button
        type="button"
        onClick={zmena}
      > zmen </button>
        <h1> {user1} </h1>
        <h1> kolesa auta {auto.kolesa} </h1>
        <h1> zmena2 farby moto {moto.farba} </h1>
        Count: {count2}
      <button onClick={() => setCount2(0)}>Reset</button>
      <button onClick={() => setCount2(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount2(prevCount => prevCount + 1)}>+</button>
      <br/>
Current count1: {count10}
<br/>
Current count2: {count20}
      </div>

    </>
  );
};

export default Blogs;