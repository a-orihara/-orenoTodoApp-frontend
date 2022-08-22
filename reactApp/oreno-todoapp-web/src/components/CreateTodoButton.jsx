import React from 'react'

// const onCliclAdd = ()=> {


// }
function CreateTodoButton (props) {
  const { ggg } = props;
  
  console.log(ggg);
  return (
    <button onClick={()=>ggg()}>Todo作成</button>
  )
}

export default CreateTodoButton


// const onClickAdd = () => {
//   // if文は処理が一文字の場合は省略可。
//   if (todoText === "") return;
//   const data = {name: todoText};
//   axios.post(todos, data)
//     .then((res) =>{
//       console.log(res.data)
//       setTestTodo({
//         // idは自動で付く
//         id: res.data.id,
//         name: res.data.name,
//         is_completed: res.data.is_completed
//       });
//     } ).catch((err) => console.error(err))
  
//   // newTodos:これまでの未完了TODOと新たにINOUTに入力した値=todoText
//   const newTodos = [...incompleteTodos, todoText];
//   setIncompleteTodos(newTodos);
//   // 空文字でリセット
//   setTodoText("");
// }