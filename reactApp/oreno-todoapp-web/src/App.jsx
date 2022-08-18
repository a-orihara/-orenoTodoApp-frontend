import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [ todoLists, setTodoList ] = useState([]);

  const initialTodos = {
    id: null,
    name: '',
    is_completed: false
  }

  const [ fetchedTodos, setFetchedTodos ] = useState({initialTodos});



  const getAxios = () => {
    axios.get('http://localhost:3002/api/v1/todos')
      .then(res => {
      // console.log(resp.data)
      setTodoList(res.data);
      })
      .catch(e => {
      console.log(e);
      })
  }

  useEffect(() => {
    getAxios()
    // axios.get('http://localhost:3002/api/v1/todos')
    //   .then(res => {
    //   // console.log(resp.data)
    //   setTodoList(res.data);
    //   })
    //   .catch(e => {
    //   console.log(e);
    //   })
  },[])

  // const createButton = (req, res) => {
  //   axios.post('http://localhost:3002/api/v1/todos', fetchedTodos)
  //     .then( res => {
  //       setFetchedTodos(res.data)
  //     })
  //     .catch(e => {
  //       console.log(e)
  //     })
  // };

  const deleteButton = (todoList) => {
    const sure = window.confirm('Are you sure?');
    if (sure) {
      console.log(todoLists.id)
      axios.delete(`http://localhost:3002/api/v1/todos/${todoList.id}`)
      .then( () => {
        // console.log(res.data)
        getAxios()
      })
      .catch(e => {
        console.log(e)
      })
    } 
  };


  return (
    <div className="App">
        <p>momo募集中yokokokoo</p>
        { todoLists.map((todoList, id) => {
          return(
            <div key={id}>
              <p>{todoList.name}</p>
              <p>{todoList.id}</p>
              <button onClick={()=>deleteButton(todoList)}>消すよ</button>
            </div>
          )
        })}
    </div>
  );
}

export default App;
