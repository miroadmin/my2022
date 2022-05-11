
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function FavoriteColor() {
  const [color, setColor] = useState("red");
    
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <span>
            <button
                type="button"
                onClick={notify}
            >Oznam</button>
            <ToastContainer 
            autoClose={1000}
            position="top-center"
            closeOnClick={true}
            />
      </span>
      <button
        type="button" 
        onClick= {() => test (color)}
      >Green</button>

    </>
  );
}
const notify = () => toast("Wow so easy!");

const test = (color) => {

    return(
        <>
            <h2>cosi sa deje</h2>
            {console.log({color})}
            {console.warn("{color}")}
            {console.info("info")}
            {console.debug("debug")}
            {console.error("error")}
            <p> *******************</p>
            <p> Farba je: {color} </p>
            <p> *******************</p>
            {toast("Wow so easy!")}
        </>
    );
}