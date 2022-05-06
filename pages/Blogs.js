import React, { useState } from "react";
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
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  const aa = ["todo", "todo 2"];

  const increment = () => {
    setCount((c) => c + 1);
  };

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
        <button onClick={increment} style={{marginLeft:"10px"}}> + </button>
      </div>

    </>
  );
};

export default Blogs;