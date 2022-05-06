import { memo } from "react";

const Todos = ({ todos1 }) => {
    console.log("child render");
    return (
      <>
        <h2>MEMO aby nevykresloval opat zoznam ak sa nezmeni</h2>
        {todos1.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      </>
    );
  };


export default memo(Todos);