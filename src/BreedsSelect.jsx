// @ts-check
import PropTypes from 'prop-types'

// export const BreedsSelect = breeds => {
export const BreedsSelect = ({
  breeds,
  selectedBreed,
  handleSelectChanged,
}) => {
  return (
    <select value={selectedBreed} onChange={handleSelectChanged}>
      {breeds.map(breed => (
        // key属性の値を指定することでReactが選択肢を一意に識別できるようにする
        // value属性の値を指定することで、選択された場合に送信される値を指定する
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}

BreedsSelect.propTypes = {
  breeds: PropTypes.array.isRequired,
  selectedBreed: PropTypes.string.isRequired,
  handleSelectChanged: PropTypes.func.isRequired,
}

export default BreedsSelect
