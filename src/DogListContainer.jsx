// @ts-check
import { useState, useEffect } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')
  useEffect(() => {
    // 犬種がキーとなったオブジェクトを受け取る。
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(responce => {
        if (!responce.ok) {
          throw new Error('fetchに失敗しました。')
        }
        return responce.json()
      })
      .then(data => {
        // オブジェクトのキーを配列として受け取る
        setBreeds(Object.keys(data.message))
      })
      .catch(error => {
        console.error('Error：', error)
      })
    // 第２引数が空の場合、コンポーネントがマウントされるときに
    // １度だけ呼び出される。
    // 変数が指定されている場合、その変数が変更されたときに呼び出される。
  }, [])

  const handleSelectChanged = event => {
    // useStateフックは非同期的にステートを更新する
    setSelectedBreed(event.target.value)
  }

  // この部分を記述したことによってテスト10が通らなかった？
  // if (breeds.length === 0) {
  //   return null
  // }
  // 非同期処理により得られるデータを渡す場足、
  // データが得られてから渡さなければいけない。

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        handleSelectChanged={handleSelectChanged}
      />
      {/* {console.log(breeds)} */}
    </>
  )
}

export default DogListContainer
