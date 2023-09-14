
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';

function App() {
  
function btnClick(){
  alert('Button Clicked');
}
  return (
    <>
      
      <h3>React Core Concepts 2</h3>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      {/* <button onClick={btnClick}>Click Me</button> */}
    </>
  )
}

export default App
 
 