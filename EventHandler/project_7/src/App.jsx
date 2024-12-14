
import './App.css'

function App() {
  function handleClick(){
    alert("I am clicked");

  }
  function handlemouse(){
    alert("Mouse laay ho?")
  }
  function handleinputchange(e){
    console.log("Value till Now:",e.target.value);

  }
  function handlesubmit(e){
    e.preventDefault();
    alert("form submit??");
  }


  

  return (
    <div >
      {/* <button onClick={()=>alert("Immediate Invoke")}>Click Me</button> */}

      <form onSubmit={handlesubmit}>
        <input type='text' onChange={handleinputchange}/>
        <button type='submit'>Submit</button>
      </form>
      {/* <p onMouseOver={handlemouse} style={{border:"1px solid black"}}>
        I am a PAra
      </p>
   <button onClick={handleClick}>
    Click me
   </button> */}
    </div>
    
  )
}

export default App
