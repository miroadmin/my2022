import { memo } from "react";
import styles from './miro.module.css'; 


const Todos = ({ todos1 }) => {
    console.log("child render");
    return (
      <>
        <h2>MEMO aby nevykresloval opat zoznam ak sa nezmeni</h2>
        {todos1.map((todo, index) => {
          return <p key={index} className={styles.bigblue}>{todo}</p>;
        })}
      </>
    );
  };


export default memo(Todos);