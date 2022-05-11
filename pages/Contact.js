import FavoriteColor from "./HookUseState.js";
import { useState, useEffect } from "react";

const Contact = () => {
  

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(()=>{

    setCount2(prev=> prev + 1);
    setCount2(prev=> prev + 1);
    setCount2(prev=> prev + 1);
    alert(count2);
    console.log('mounted');
    return () => console.log('unmounting...');
  },[])

  return (
    <div>
{/*     <FavoriteColor />  */}
  Current count2: {count2}
  <br/>
  Current count2: 
  </div>
  )
}


export default Contact;