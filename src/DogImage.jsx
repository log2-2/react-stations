// @ts-check

// 引数は{}で囲む。props名は渡す側と同じにする。
export const DogImage = ({ imageUrl }) => {
  return <img className="dogImage" src={imageUrl} alt="犬の画像" />
}
