// リポジトリをFork：
// Forkすることで、元のリポジトリに変更を反映することなく自由に作業できる。

// リポジトリをClone：
// リポジトリはカレントディレクトリにダウンロードされる。

// ページを開く：
// yarn install
// yarn dev

// --------------------------------------------------

// Reactでは後から変更されるデータをstateとして保持する。
// stateはuseState関数（ReactではHooksと呼ぶ）を使うことで定義できる。

// stateの初期化：
// const [state名, state更新関数名] = useState(初期値);

// stateを更新する関数の定義：
// const 関数名 = () = {
//   state更新関数名(更新後の値);
// }

// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  // 犬の画像のURLの初期値を定義
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/terrier-wheaten/n02098105_1234.jpg',
  )

  function dogUrlUpdate() {
    // APIの呼び出しにはasyncとawaitを用いる方法もある。
    // .thenで繋げる方法を「Promiseチェーン」、
    // asyncとawaitを用いる方法を「async/await」と呼ぶことが多い。

    // 犬の画像を取得できるAPI「Dog API」

    // APIエンドポイントにGETリクエストを送信する。
    // fetch関数の引数にはデータのパスやURLを指定する。
    // 成功した場合、データは次の.thenブロックに渡される。
    // 失敗した場合、.catchブロックで処理される。
    // APIからのデータの取得は非同期で行われる。
    // .thenメソッドは前の処理が終了してから実行される。
    fetch('https://dog.ceo/api/breeds/image/random')
      // 取得したデータをJSON形式からJavaScriptのオブジェクトに変換する。
      // .json()メソッドにより変換される。
      // 成功した場合、データは次の.thenブロックに渡される。
      // 失敗した場合、.catchブロックで処理される。
      // オブジェクトへの変換は非同期で行われる。
      .then(responce => {
        if (!responce.ok) {
          // エラー文はcatchメソッドに投げられる。
          throw new Error('fetchに失敗しました。')
        }
        return responce.json()
      })
      .then(data => setDogUrl(data.message))
      .catch(error => console.error('Error：', error))
  }

  return (
    <div>
      <header>Dog アプリ</header>
      <main>
        <p>犬の画像を表示するサイトです。</p>
        <div>
          <img className="dogImage" src={dogUrl} alt={'犬の画像'} />
          <button onClick={() => dogUrlUpdate()}>更新</button>
        </div>
      </main>
    </div>
  )
}
