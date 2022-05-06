import React, { useState } from "react";
import myElement, { Test} from "./Myel.js";
import "../App.css"


const Home = () => {
    const obec='Martin';
    return (
      <div className="celkom">
            <div className="home" >
                      <h1 style={{textAlign: "center",color:"red"}}> Prvy {React.version}</h1>
                      {myElement}
                      <Test />
                      <Car man='Mirko' girl='Ford' obec={obec}/>
                      <Car1 />
                      <MyForm />
                      <Hodiny />
                      <span>App</span>
            </div>
            <div className="list">
                      <List />
            </div>
        </div>
      
    )
};



var zam=[
  {firma:"IBM",meno:"Miro",priezvisko:"Sir",datum:"1959-07-08",obec:"Turček",psc:"03587",ulica:"Kolarova 15",kluc:10},
  {firma:"Misyn",meno:"Karol",priezvisko:"Siran",datum:"1970-05-08",obec:"Sklene",psc:"034587",ulica:"Timravy 17993",kluc:11},
  {firma:"Misyn",meno:"Fero",priezvisko:"Zajakirovac",datum:"1987-07-08",obec:"Tepice",psc:"01587",ulica:"10",kluc:12},
  {firma:"Agrokomplex",meno:"Jan",priezvisko:"Siran",datum:"1970-07-08",obec:"Polerieka",psc:"44587",ulica:"17993",kluc:13},
  {firma:"JZD",meno:"Fero",priezvisko:"Midrik",datum:"1970-07-08",obec:"Sklene",psc:"03457",ulica:"17993",kluc:24},
  {firma:"PI x",meno:"Fero",priezvisko:"Midrik",datum:"1970-07-08",obec:"Sklene",psc:"03587",ulica:"17993",kluc:25},
  {firma:"IBSoloM",meno:"Moro",priezvisko:"Kukis",datum:"2000-07-08",obec:"Martin",psc:"14847",ulica:"1783",kluc:26}];



/*  ***********   Pocitadlo   **************/
function Hodiny() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const pripocitat= () => {
                            setCount((c) => c + 1);
                            setCount1(count1 + 1);
                          };
  console.log('<< pocitadlo')

  return (
    <div>
      <span>pocitadlo A  {count1}</span> <span> pocitadlo B {count} times</span><br></br>
      <button onClick={() => setCount(count + 1)}>
        Pripocitat ver 1
      </button>
        {/* inak */}
        <button onClick={pripocitat}>
        Pripocitat verzia 2
      </button>
    </div>
  );
}

/*  ***********   FORM    **************/
function MyForm() {
  const [meno, setMeno] = useState('Miro');
  const [priezvisko, setPriezvisko] = useState('Siran');
  const [poznamka, setPoznamka] = useState('The content of a textarea goes in the value attribute');
  const [myCar, setMyCar] = useState("Ford");


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(meno + '\r\n'+priezvisko + '\r\n' + poznamka + '\r\n' + myCar);
  } 
  return (
    <form onSubmit={handleSubmit}>
    <label>Meno: 
    <input 
      type="text" 
      name="meno" 
      value={meno}
      onChange={(e) => setMeno(e.target.value)}
    />
    </label>
    <label> Priezvisko: 
    <input 
      type="text" 
      name="priezvisko" 
      value={priezvisko}
      onChange={(e) => setPriezvisko(e.target.value)}
    />
    </label>
    <label> Poznamka: 
    <textarea   style={{color:'red', position: 'relative', left: '30px', width:'150px', height:'50px'}}
      type="text" 
      name="poznamka"  
      value={poznamka}
      onChange={(e) => setPoznamka(e.target.value)}
    />
    </label> 
    <label style={{color:'red', position: 'relative', left: '30px', width:'150px'}}> Auto: 
      <select value={myCar} onChange={(e) => setMyCar(e.target.value)} style={{color:'red', position: 'relative', left: '10px', width:'150px'}}>
      <option value="Ford">Ford</option>
      <option value="Volvo">Volvo</option>
      <option value="Fiat">Fiat</option>
    </select>
    </label> 

    <input type="submit" style={{color:'red', position: 'relative', left: '60px'}} />
  </form> 
  )
}
/*  ***********   FORM    **************/


/*  *******************   LIST  ********************/
function Data(props) {
  return (
    <li> {props.meno1} {props.pr} {props.obec}</li>
  );
}

function List() { 
  return (
    <ul className="list">
      {zam.map((ni) => <Data meno1={ni.meno} pr={ni.priezvisko} obec={ni.obec}/>)}
    </ul>
  );
}
/*  *******************   LIST  ********************/



class Car extends React.Component {

    constructor(props) {
      super();
      console.log("constructor")
      this.state={girl: props.girl,
                  man:props.man,
                  now: new Date(),
                  obec:props.obec,
                  plat:2100};

    }

    render() {
      const shoot = (a,event) => {
 //       <Alert severity="error">This is an error alert — check it out!</Alert>
    alert('Prvy parameter: '+ a + ' Druhy parameter: ' +event.type);
      }
      return  (
          <div>
                <p>{this.state.girl}  {this.state.man}</p>
                <p>{this.state.obec}</p>
 {/*               <div> {aa} </div>  */}
                <div>{this.state.now.toLocaleTimeString()}</div>
                <button onClick={this.zmena}>zmena </button>
                <p>{this.state.girl}  {this.state.man}</p>
                <button onClick={this.zmena3}>zmena2 </button>
                <div>
                  {/* odovzda triger, v tomto pripade click */}
                    <button onClick={(event) => shoot("Goal!",event)}> Odovzdat kliknutie</button>
                </div>
                <p>{this.zmena3}</p>
                <TestNaPlat plat={this.state.plat}/>
          </div>
      )
    }

    zmena = () => {
      this.setState({girl:"Uzasna Jelena"});
      this.zmena3();

    }

    zmena4 = (a) => {
          alert(a);
    }


    zmena3 = () => {
      const aa= 'Krasna ' + this.state.girl 
      const aa1= 'Tvoj ' + this.state.man
      this.setState({girl:aa});
      this.setState({man:aa1});
      return (
        this.zmena4()
      )

    }
 

    componentDidMount() {
      setInterval(() => this.zmenaCas(), 1000 * 1);
      console.log("cas");
    }

    zmenaCas =() => {
     this.setState({now: new Date()})
    }

    componentWillUnmount() {
      console.log("odpojene");

    }
}


function Car1() {
  return  <p>novy  Appr1</p>
}

class TestNaPlat extends React.Component {
/*  **********************************   */
  constructor(props) {
    super(props)
    this.state={plat: this.props.plat};
  }
    render() {
      return( 
        <>
        {this.props.plat===2000 &&
          <p>Moj plat: {this.state.plat}</p>
        }
        {this.props.plat>2000 &&
          <p>Moj plat je vacsi ako: {this.state.plat}</p>
        }
        {/*  ************* Inak *********************   */}
        {this.state.plat < 2000 ? <p>Moj plat je mensi ako: {this.state.plat}</p> : <p>Moj plat je vacsi ako: {this.state.plat}</p>}
        </>
    
      )

    }
}

export default Home;