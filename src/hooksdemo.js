import React, { useState } from 'react';

function Hooksdemo(){
    
    let [count,setCount]=useState(0);
	return (
		<div>
		   <h1>Its Hooks</h1>
           <h1>{count}</h1>
           <button onClick={()=> setCount(count+1)}>Increment</button>
		</div>
		);
}

export default Hooksdemo;