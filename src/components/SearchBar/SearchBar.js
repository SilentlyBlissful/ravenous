import React from "react";
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'highest_rated',
  'Most Reviewed': 'most_reviewed'
}

class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={ sortByOptionValue }>{ sortByOption }</li>
    });
  }

  render() {
    return (
      <div className="Searchbar">
        <div className="Searchbar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="Searchbar-fields">
          <input placeholder="Search Businesses"/>
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;