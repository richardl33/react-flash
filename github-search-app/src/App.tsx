import React, { Component } from 'react';
import _ from 'lodash';
import GitResults from './components/GitResults';
import SearchSelect from './components/SearchSelect';
import './App.scss';
import GitHubLogo from './github-logo.png';

export default class App extends Component {
  state = {
    header: 'GitHub Searcher',
    headerDescription: 'Search Users or Repositories below',
    searchInputlengthMin: 3,
    searchInputlength: 0,
    searchQuery: '',
    searchType: 'users',
    selectValues: ['users', 'repositories'],
    returnData: []
  }
  
  handleInput = (e: any) => {
    this.setState({
      searchQuery: e.target.value,
      searchInputlength: e.target.value.length
    });
    this.gitData();
  }
  
  handleSelect = (e: any) => {
    e.preventDefault();
    this.setState({
      searchType: e.target.value
    });
  }

  gitData = _.debounce(async () => {
    const entityType = this.state.searchType === 'users' ? 'login' : 'name';
    let url = `https://api.github.com/search/${this.state.searchType}?q=${this.state.searchQuery}%20in:${entityType}&per_page=9`;

    if (this.state.searchInputlength >= this.state.searchInputlengthMin) {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        returnData: data
      });
    } else {
      this.setState({
        returnData: []
      });
    }
  }, 300)

  render() {
    return (
      <div className="container">
        <div className="git-search__container">
          <div className="git-search__header">
            <img className="git-search__logo" src={GitHubLogo} alt="GitHub logo" />
            <div className="git-search__header-container">
              <h2>{this.state.header}</h2>
              <p>{this.state.headerDescription}</p>
            </div>
          </div>
          <input
            className="git-search__input"
            type="text"
            placeholder="Start typing to search..."
            onChange={this.handleInput} />
          
          <SearchSelect 
            handleSelect={this.handleSelect}
            selectValues={this.state.selectValues}/>
        </div>

        <GitResults
          returnData={this.state.returnData}
          searchType={this.state.searchType}/>
      </div>
    )
  }
}
