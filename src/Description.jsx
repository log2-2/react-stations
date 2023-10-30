// @ts-check

import { useState } from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  // stateは関数コンポーネント内で定義する。
  const [imageUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/terrier-wheaten/n02098105_1234.jpg',
  )

  function dogUrlUpdate() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(responce => {
        if (!responce.ok) {
          throw new Error('fetchに失敗しました。')
        }
        return responce.json()
      })
      .then(data => setDogUrl(data.message))

      .catch(error => {
        console.error('Error：', error)
        // エラー時にデフォルトの画像を表示
        setDogUrl(
          'https://images.dog.ceo/breeds/terrier-wheaten/n02098105_1234.jpg',
        )
      })
  }
  return (
    <main>
      <p>犬の画像を表示するサイトです。</p>
      <div>
        <DogImage imageUrl={imageUrl} />
        <button onClick={() => dogUrlUpdate()}>更新</button>
      </div>
    </main>
  )
}
