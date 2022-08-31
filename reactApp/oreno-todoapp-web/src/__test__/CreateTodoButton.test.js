import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import CreateTodoButton from '../components/CreateTodoButton'

afterEach(() => cleanup())

describe("コンポーネントが表示されるか", () => {
  it("ボタンが表示されている", ()=>{
    render(<CreateTodoButton/>)
    // toBeTruthy:要素が存在するか判定するメソッド
    expect(screen.getByRole("button")).toBeTruthy();
    
  })
  it("文章が表示されている", ()=>{
    render(<CreateTodoButton/>)
    
    expect(screen.getAllByText('Todo作成')).toBeTruthy();
  })
})

// describe("Rendering", () => {
//   it("should render all the elements correctly", ()=>{
//     render(<RenderInput />)
//     expect(screen.getByRole("button")).toBeTruthy();
//     expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
//   })
// })