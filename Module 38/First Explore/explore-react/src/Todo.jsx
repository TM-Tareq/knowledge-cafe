import React from 'react'


// conditional rendering differnet type

// type-1: 

// const Todo = ({task, isDone}) => {
//   if(isDone) return <li>Finished: {task}</li>
//   else return <li>Work on:{task}</li>
// }


// type-2: ternary operator
// const Todo = ({task, isDone}) => {
//     return (
//         <li>{isDone ? 'finished' : 'Work on'} : {task}</li>
//     )
// }


// conditional rendering with && operator

// const Todo = ({task, isDone}) => {
//     return (
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }


// conditional rendering with || operator

// const Todo = ({task, isDone}) => {
//     return (
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }


const Todo = ({task, isDone}) => {
    let listItem;
    if(isDone) {
        listItem = <li>Finish: {task}</li>
    } else {
        listItem = <li>Work on: {task}</li>
    }
    return listItem;
}
export default Todo;