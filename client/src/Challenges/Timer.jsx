import { Fragment, useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(10);
  const [timer,setTimer] = useState(false);

  const start = ()=>{
  
    if(!timer){
      if(time>0){
        setInterval(()=>{
          setTime(time-1);
        },1000)
        setTimer(false)
      }
    }
  }
   

  return (
    <Fragment>
      <h1>time: {time}</h1>
      <button onClick={start} disabled={timer}>Start</button>
      <button>Pause</button>
      <button>Reset</button>
    </Fragment>
  )
}

export default Timer;
