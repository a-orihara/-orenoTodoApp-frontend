import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/v1/todos')
      .then(resp => {
      // console.log(resp.data)
      setTodos(resp.data);
      })
      .catch(e => {
      console.log(e);
      })
  }, [])

  const createButton = (req, res) => {};
  const deleteButton = (req, res) => {};



  return (
    <div className="App">
        <p>momo募集中yokokokoo</p>
        { todos.map((todo, index) => {
          return(
            <div key={index}>
              <p>{todo.name}</p>
              <p>{todo.index}</p>
            </div>
          )
        })}
    </div>
  );
}

export default App;
