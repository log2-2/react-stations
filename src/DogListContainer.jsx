// @ts-check
import { useState } from 'react'
import { useEffect } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState('')
  useEffect(() => {
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
        console.log(breeds)
      })
      .catch(error => {
        console.error('Error：', error)
      })
    // 第２引数が空の場合、コンポーネントがマウントされるときに
    // １度だけ呼び出される。
    // 変数が指定されている場合、その変数が変更されたときに呼び出される。
  }, [])
  return <></>
}

export default DogListContainer
