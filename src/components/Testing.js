import React, { useState,useEffect } from 'react';

const Testing=()=> {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const onClickfn=()=>{
    setCount(count + 1)
    document.title = `You clicked ${count} times`;
  }
  const onClickeffect =()=>{
    setCount(count + 1)
  }

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log(`You clicked ${count} times`);
  });

return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={onClickfn}>
        Click me
      </button>
      <button onClick={onClickeffect}>
        Click me with use useEffect
      </button>
    </div>
  );
}
export default Testing;