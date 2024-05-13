
import "./App.css";
import React, { useReducer } from "react";
// ------------------------------------------------{Step1: Import Hook}
const reducer = (state, action) => {
  // {Think of this as a playbook of all actions based on scenario}
  switch (action.type) {
    case "INCREMENT":
      return { 
        count: state.count + 1, 
        toggleText: state.toggleText
      };
    // Think of this as Each Play to be executed
    case "DECREMENT":
      return { 
        count: state.count - 1, 
        toggleText: state.toggleText 
      };
    case "toggleText":
      return { 
        count: state.count, 
        toggleText: !state.toggleText };
    default:
      return state;
  }
};
// Define reducer which allows you to make a switch statement for each case of how your state can be changed

function App() {
  // const [whateverState, setWhateverState] = useState()
  const [ state,dispatch] = useReducer(reducer,
    {
      count: 0, 
      toggleText: true,
    });
// ------------------------------------------{Step 2: Create state Variable, Create DISPATCH* ---> reducer which contains our current State}

  return (
    <div className="App">
  
      <>
        <div className="title"> 
        The example of using useReducer

        </div>
        <div className="count-div">Let's Count: {state.count}</div>
        <div>
          <button className="btn-dcrmnt" onClick={()=>{
            dispatch({type:"DECREMENT"})
          }}> - </button>
          <button className="btn-incrmnt"onClick={()=>{
            dispatch({type:"INCREMENT"})
          }}> + </button>
        </div>
        {/* <hr /> */}
        <button className="btn-tgl" onClick={()=>{
          dispatch({type: "toggleText"})
        }}>Are you there?</button>
        <div>{state.toggleText && <img className="img-main" src="https://forums.wdwmagic.com/attachments/89bb5390-b8b2-4a63-a67d-b1975b02daf9-gif.632518/" alt="hi"></img>}</div>
      </>
    </div>
  

  );
}

export default App;