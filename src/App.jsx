import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0); 

//  let counter = 5;

  const addValue = () => {
    if(counter < 20){
      console.log('add clicked!');
      counter = counter + 1;
      setCounter(counter);
    }else{
      console.log('counter is reached the limit 20');
    }  
  }

  const removeValue = () => {
    if(counter > 0){
      console.log('remove clicked!');
      counter = counter - 1;
      setCounter(counter);
    }else{
      console.log('counter is already reached 0 !');
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      { counter === 20 ?        //if-else condition for Add Value
      <button disabled>Add Value</button>
      :
      <button onClick={addValue} className='bg-gray-400'>Add Value</button>
      }
      
      <br />

      { counter === 0 ?          //if-else condition for Remove Value
      (<button disabled>Remove Value</button>)
      : 
      (<button onClick={removeValue} className='bg-gray-400'>Remove Value</button>)
      }
      </>
  )
}

export default App
