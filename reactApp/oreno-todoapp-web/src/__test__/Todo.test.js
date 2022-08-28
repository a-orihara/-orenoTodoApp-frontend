import { render, screen } from "@testing-library/react";
import App from "../App"
import InputArea from "../components/InputArea";

describe("TODOコンポーネントテスト", ()=>{
  test("完了未完了ボタンが存在するか", async ()=>{
    // render関数を利用することでAPPコンポーネントはテストの中で<body><div>タグの中に追加されて描写されます。
    render(<InputArea />)
    // screenはさまざまなメソッドを持ち
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  })
})