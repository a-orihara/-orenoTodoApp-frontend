import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ChangeDoneButton } from './components/ChangeDoneButton';
import DonePopup from './components/DonePopup';
import getAxios from './api/getAxios'
import deleteAxios from './api/deleteAxios'
import InputArea from './components/InputArea';
import CreateTodoButton from './components/CreateTodoButton'
// import styled from 'styled-components';

// const Todo = styled.div`
//   color: green;
//   `;

function App() {

  // todoLists:配列
  const [ todoLists, setTodoList ] = useState([]);
  const [ inputTodoText, setInputTodoText ] = useState("")

  // Reactで配列を展開して一覧表示する際は、「元の配列に変更を加えてしまっていないか」という点は、
  // 気にかけながらソースを書いていく必要があるかと思います。

  useEffect(() => {
    getAxios()
      .then((data)=>{
        setTodoList(data)
      })
  },[])

  const divStyle = {
    marginBottom: '10px',
    paddingTop: '20px',
    color: 'black',
    border: '5px solid',
  }

  const onChangeInputTodoText = (e) =>  {
    // event.target.valueに入力した値が入る。入力した値をsetTodoTextの引数に入れてtodoTextを設定。
    setInputTodoText(e.target.value);
  }
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
    const sure = window.confirm('削除するよー?');
    if (sure) {
      deleteAxios(todoList)
      .then( () => {
        getAxios()
          .then( (data)=>{
            setTodoList(data)
          }) 
      })
      .catch(e => {
        console.log(e)
      })
    } 
  };

  const changeDone = (todoList, index) => {
    // updateTodo:オブジェクト
    const updateTodo = {
      id: todoList.id,
      name : todoList.name,
      is_completed: !todoList.is_completed
    }
    axios.patch(`http://localhost:3002/api/v1/todos/${todoList.id}`, updateTodo)
      .then(() => {
      // 更新したものしか返さない
      // res.data:オブジェクト
      // 配列の8番目はねえよ
      // 選ばれた配列を特定しないとだめ
      // ↓returnTodoは単にオブジェクトの配列の集まりだから、その中のオブジェクトのidが取れない
      // returnTodo[6]とかなると、returnTodoの6番目はないよ
      // つまりオブジェクトを取得→その変更を反映→そのオブジェクトを含めた配列を再レンダ
      // returnTodo.is_completed = res.data.is_completed
        getAxios()
          .then( (data)=>{
            setTodoList(data)
          }) 
      })
      .catch(e => {
      console.log(e);
      })
  }

  const onCliclAdd = () => {
    if (inputTodoText === "") return;
    const data = {name: inputTodoText}
    axios.post("http://localhost:3002/api/v1/todos", data)
      .then((res)=>{
        getAxios()
          .then( (data)=>{
            setTodoList(data)
          }) 
      })
  }




  return (
    <div className="App">
        <h1>カモン!TODO!</h1>
        <InputArea 
          inputTodoText={inputTodoText} 
          onChangeInputTodoText={onChangeInputTodoText}
        />
        <button onClick={()=>onCliclAdd()}>生成だっちゃ</button>
        {/* // todoLists:配列 */}
        { todoLists.map((todoList, index) => {
          return(
            // 配列の要素が動的に変更された時に、変更前の配列の要素との対応関係をReact側が認識するため
            // React上で{}内の配列を一覧表示する際には、keyという属性を付与することが義務付けられています。
            // このkey「id」は、配列要素のインデクス番号です
            // mapのindexを使うと不都合が起きる時がある
            // 配列の一つ一つの要素に対してkeyを持ちなさい
            // keyによってriactはどのDOMが動的に変化しているかを知る。
            <div key={index} style={divStyle}>
              <p>{todoList.name}</p>
              <p>{todoList.id}</p>
              <button onClick={()=>deleteButton(todoList)}>消すよ</button>
              <ChangeDoneButton
                id={todoList.id}
                index={todoList.index}
                changeDone={()=>changeDone(todoList,index)}
              />
              <DonePopup is_completed={todoList.is_completed}/>
            </div>
          )
        })}
    </div>
  );
}

export default App;

// namespace :api do
// namespace :v1 do
//   resources :todos, only: %i[index show create update destroy]
// end
// end
// end

// # GET	/todos	todos#index	すべてのtodosの一覧を表示
// # GET	/todos/new	todos#new	todosを1つ作成するためのHTMLフォームを返す
// # POST	/todos	todos#create	todosを1つ作成する
// # GET	/todos/:id	todos#show	特定のtodosを表示する
// # GET	/todos/:id/edit	todos#edit	todos編集用のHTMLフォームを1つ返す
// # PATCH/PUT	/todos/:id	todos#update	特定のtodosを更新する
// # DELETE	/todos/:id	todos#destroy	特定のtodosを削除する

  // const obj1 = {name: 'さとう', age: '10'}
  // const obj2 = {name: 'たなか', age: '20'}
  // const obj3 = {name: 'やまもと', age: '30'}
  // const str1 = "くま"
  // const str2 = "ねこ"
  // const str3 = "きじ"
  // const arr1 = [obj1, obj2, obj3]
  // const arr2 = [str1, str2,str3]
  // console.log(arr2)
  // console.log(arr2[1])
  // console.log(arr1)
  // console.log(arr1[1].name)

      // console.log('現在の値')
    // console.log(todoList.is_completed)
    // console.log('送るもの')
    // console.log(updateTodo.is_completed)

    // ********   axios.putは成功している   ************
      // 配列の8番目はねえよ
      // 選ばれた配列を特定しないとだめ
      // console.log(returnTodo)
      // console.log(todoList.id)
      // ↓returnTodoは単にオブジェクトの配列の集まりだから、その中のオブジェクトのidが取れない
      // returnTodo[6]とかなると、returnTodoの6番目はないよ
      // つまりオブジェクトを取得→その変更を反映→そのオブジェクトを含めた配列を再レンダ
      // returnTodo.is_completed = res.data.is_completed