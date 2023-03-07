// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails} = props
  const {suggestion, onClickArrow} = suggestionDetails

  const clicked = () => {
    onClickArrow(suggestion)
  }

  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={clicked}
      />
    </li>
  )
}
export default SuggestionItem
