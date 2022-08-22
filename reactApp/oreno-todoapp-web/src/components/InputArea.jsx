import React from 'react'

const InputArea = (props) => {
  const { inputTodoText, onChangeInputTodoText } = props;

  return (
    <>
      <h3>Todoの名前を入力せえよ</h3>
      <input 
        type="text" 
        placeholder="Todo名"
        value={inputTodoText}
        onChange={onChangeInputTodoText}
      >
      </input>
      <p>{inputTodoText}</p>
    </>
    
  )
}

export default InputArea