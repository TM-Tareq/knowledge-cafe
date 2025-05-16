import Actor from './Actor';
import './App.css'
import BookStore from './BookStore';
import Device from './Device'
import Singers from './Singers';
import Student from './Student'
import Todo from './Todo'

function App() {

  const actors = ['Sakib', 'raj', 'doyel', 'rubel', 'salman shah'];
  const singers = [
    {name: 'Dr. Mahfuzur Rahmna', age: 68},
    {name: 'Dr.Rahmna', age: 28},
    {name: 'Dr. Mahfuzur', age: 65}
    
  ];

  const books = [
    {id:1, name: 'physics', price: 100},
    {id:1, name: 'biology', price: 300},
    {id:1, name: 'math', price: 500},
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Student name="Tomson" grade="A" score="99" />
      <Student />
      <Device name="laptop" price="55000" />
      <Device name="mobile" price="17000"/>
      {/* <Device name="mobile" price="17000"/>
      <Device name="mobile" price="17000"/> */}
      <Hello  name="Tareq" />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Todo task="Learn React" isDone={true}/>
      <Todo task="Core Concepts" isDone={false}/>
      <Todo task="Try JSX" isDone={true}/>
      {
        actors.map(actor => <Actor name={actor} />)
      }

      {
        singers.map(singer => <Singers singer={singer}/>) 
      }

      <BookStore books ={books} />
    </>
  )
}

const Person = () => {
  return (
    <h1>Hello From Person</h1>
  )
}



const Hello = (props) => {
  return (
    <h2>Hello From here {props.name}</h2>
  )
}




export default App
