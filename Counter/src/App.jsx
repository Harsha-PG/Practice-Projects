import React, { useState } from 'react'
import { Fragment } from 'react';

const App = () => {
 const [count, updatedCount] = useState(0);
 const [counter, setCounter] = useState(20);
 const [text, setText] = useState("");
  return (
    <Fragment>
    <span>{count}</span><br></br>
    <button onClick= {()=>updatedCount(count+1)}>Increment</button>
    <br/><br/>
    <p>Decrement only till 0</p>
    <span>{counter}</span><br></br>
    <button onClick={() => setCounter(counter>0 ?counter-1 : 0)}>Decrement</button><br/><br/>
    <input type="text" onChange={(e) => setText(e.target.value)}/>
    <span><b>Entered text is: </b>{text}</span>
    </Fragment>
    )
}

export default App