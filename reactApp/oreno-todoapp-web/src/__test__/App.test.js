import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "../App";

// @testing-library/jest-dom":jestのDOMのテストに使用
// @testing-library/react":reactのコンポーネントのレンダリングに使用
// @testing-library/user-event": UIイベントの実行に使用
// @testing-library/dom": DOMのテストに使用

const server = setupServer(
  rest.get('http://localhost:3002/api/v1/todos', (req, res, ctx)=>{
    // bodyを設定
    // 配列にする.mapを使うので。
    console.log(res(ctx.json([{ name: "ボスに会う"}])))
    // Promise {
    //   {
    //     status: 200,
    //     statusText: 'OK',
    //     body: '{"name":"ボスに会う"}',
    //     delay: 0,
    //     once: false,
    //     headers: HeadersPolyfill { _headers: [Object], _names: [Map] }
    //   }
    // }
    return res(ctx.status(200), ctx.json([{ name: "ボスに会う"}]))
  })
);

describe("APIのgetのテスト", ()=> {
  it("getでjsonデータが取れたかいテスト", async ()=>{
    render(<App />);
    expect(await screen.findAllByText("ボスに会う")).toBeTruthy()
    screen.debug();
  })

})

// テストでのモッキングを有効にする。
beforeAll(() => server.listen());

afterEach(() => {
  // resetHandlers:最初のsetupServer呼び出し後に追加されたリクエストハンドラをすべて削除。
  // これを毎回呼ぶ決まり
  server.resetHandlers();
});

// afterAll:テストの最後に一回だけ呼び出す。
// テストが終わったら片付けをする。
afterAll(() => server.close());

// const server = setupServer(

//   rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
//   
//     return res(ctx.status(200), ctx.json({ username: "Bred dummy"}))
//   })
// )



// describe("Mocking API", () => {

//   it("[Fetch success]Should display fetched data correctly and button disable", async () => {
//     render(<MockServer />);
//     await userEvent.click(screen.getByRole("button"));
//     // toHaveTextContent:与えられたノードがテキストコンテンツを持つかどうかをチェックすることができます。
//     expect(await screen.findByRole("heading")).toHaveTextContent("Bred dummy");
//     // toHaveAttribute:与えられた要素が属性を持つかどうかをチェックすることができます。
//     // buttonが"disabled"（押せない）要素を持っているかどうか
//     expect(screen.getByRole("button")).toHaveAttribute("disabled");
//   });
//   // "エラーメッセージが表示され、レンダリングの見出しとボタンが表示されない。"
//   it("[Fetch failure]Should display error msg, no render heading and button abled", async () => {
//     // server.use:このケースだけ個別に設定
//     server.use(
//       // エラーを返すように設定
//       rest.get(
//         "https://jsonplaceholder.typicode.com/users/1",
//         (req, res, ctx) => {
//           return res(ctx.status(404));
//         }
//       )
//     );
//     render(<MockServer />);
//     await userEvent.click(screen.getByRole("button"));
//     expect(await screen.findByTestId("error")).toHaveTextContent(
//       "Fetching Failed !"
//     );
//     expect(screen.queryByRole("heading")).toBeNull();
//     expect(screen.getByRole("button")).not.toHaveAttribute("disabled");
//   });
// });

// screen
// RTLのscreenオブジェクト関数で要素の選択を始めることができます。
// 選択された要素はユーザーインタラクションやアサーションで使用されます。
