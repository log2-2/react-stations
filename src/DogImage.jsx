// @ts-check

// 引数は{}で囲む。
// export const DogImage = props => {
//   return <img className="dogImage" src={props.url} alt={'犬の画像'} />
// }

export const DogImage = props => {
  return <img className="dogImage" src={props.imageUrl} alt="犬の画像" />
}
