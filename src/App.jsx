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

  return (
    <div>
      <header>Dog アプリ</header>
      <p>犬の画像を表示するサイトです</p>
      {/* 犬の画像を取得できるAPI「Dog API」 */}
      <img src={dogUrl} alt={'犬の画像'} />
      <button
        onClick={() => {
          setDogUrl(
            'https://images.dog.ceo/breeds/poodle-medium/WhatsApp_Image_2022-08-06_at_4.48.38_PM.jpg',
          )
        }}
      >
        更新
      </button>
    </div>
  )
}
