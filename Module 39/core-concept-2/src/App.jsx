import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
  const handleButton = () => {
    console.log('I am clicked');
  }

  const handleClick = () => {
    console.log('Button 2 clicked')
  }

  const handleAddFive = (num)=> {
    console.log(num + 5);
  }

  return (
    <>
      <h3>React Core Concept 2</h3>
      <Friends/>
      <Users/>
      <Team />
      <Counter />
      <button onClick={handleButton}>Click Me</button>
      <button onClick={handleClick}>Click Me Button 2</button>
      <button onClick={()=> console.log('Last buton clicked')}>third</button>

      {/* different */}
      <button onClick={()=> handleAddFive(3)}>Add 5</button>
    </>
  )
}

export default App
