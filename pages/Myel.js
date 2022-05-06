const styles={
  color:'red',
  fontSize: '9px',
  width: '300px',
  display:'block',
  whitespace:'nowrap',
}

const myElement = () => {
  console.log("<< myElement");
  return (
<div>
  <label> vstupne pole 
      <input type='text'/>
  </label>
</div>
)
}

export function Test ()  {
  console.log("<<test");
  return (
      <span>I am MIRO {test2()}</span>
)
}

export const test2 = () => {
return (
    <span style={styles}> JelenaRozga</span>
)
}


//export const myElement2 = <h1 className="myclass">Class</h1>;

export default myElement;