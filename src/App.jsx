// DO NOT DELETE

import './App.css'
// exportステートメントを使用したコンポーネントをインポートするには、
// コンポーネントを{}で囲う。
import { Header } from './Header'
import { Description } from './Description'

// 関数の型を指定する。
// 関数が引数を受け取らず、JSX.Element型の値を返すことを指定している。
/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  return (
    <div>
      <Header />
      <Description />
    </div>
  )
}
