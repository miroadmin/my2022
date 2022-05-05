const styles={
  color:'red',
  fontSize: '9px',
  width: '10px',
  display:'block',
  whitespace:'nowrap',
}

const myElement = () => {
  return (
<div>
  <p>Element</p>
  <input type='text' id='ddd'/>
</div>
)
}

export const test =() => {
  return (
  <div>
  <span>I am MIRO</span> <br></br>
  {test2()}
</div>
)
}

const test2 = () => {
return (
  <div>
    <p style={styles}> Rozga</p>
  </div>
)
}


export const myElement2 = <h1 className="myclass">Class</h1>;

export default myElement;