import { Fragment, useState } from "react"
const Counter = ()=>{
  const [inc,setInc] = useState(0);

  const increment = ()=>{
      setInc(inc+1)
  }
  const decrement = ()=>{
    setInc(inc-1)
  }
  const reset = ()=>{
    setInc(0)
  }

  return(
    <Fragment>
    <div>
    <h1>Count: {inc}</h1>
    <button onClick={increment}>+</button>
    <button onClick={reset}>Reset</button>
    <button onClick={decrement}>-</button>
    </div>
    </Fragment>
  )
}
export default Counter;