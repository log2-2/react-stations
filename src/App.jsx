// リポジトリをFork：
// Forkすることで、元のリポジトリに変更を反映することなく自由に作業できる。

// リポジトリをClone：
// リポジトリはカレントディレクトリにダウンロードされる。

// ページを開く：
// yarn install
// yarn dev

// DO NOT DELETE

import './App.css'

/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  return (
    <div>
      <header>Dog アプリ</header>
      <p>犬の画像を表示するサイトです</p>
      {/* 犬の画像を取得できるAPI「Dog API」 */}
      <img
        src={'https://images.dog.ceo/breeds/terrier-wheaten/n02098105_1234.jpg'}
        alt={'犬の画像'}
      />
    </div>
  )
}
