// Write your code n here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickArrow = value => {
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(each => {
      const nameVal = each.suggestion.toLowerCase()
      return nameVal.includes(searchInput)
    })

    return (
      <div className="bg-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="inner-cont">
          <div className="search-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
              onChange={this.onSearch}
            />
            <input
              type="search"
              value={searchInput}
              className="search-bar"
              placeholder="Search Google"
            />
          </div>
          <ul className="list-cont">
            {searchResults.map(eachItem => (
              <SuggestionItem
                suggestionDetails={eachItem}
                onClickArrow={this.onClickArrow}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
