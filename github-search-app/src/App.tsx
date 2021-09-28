import React, { Component } from 'react'
import GitResults from './components/GitResults';
import SearchSelect from './components/SearchSelect';
import './App.scss';
/**
 *
 * Create search input field component
 * Create dropdown component
 * Fetch Github API
 * Render data
 * Styling - Mobile & Desktop UI
 *
 */

export default class App extends Component {
  state = {
    enableSearch: false,
    searchInputlength: 0,
    searchQuery: '',
    searchType: 'users',
    selectValues: ['users', 'repositories'],
    returnData: []
  }

  componentDidUpdate = () => {

  }
  
  handleInput = (e: any) => {
    this.setState({
      searchQuery: e.target.value,
      searchInputlength: e.target.value.length
    })

    // this.gitData(); 
  }

  handleSelect = (e: any) => {
    e.preventDefault();
    this.setState({
      searchType: e.target.value
    })
  };

  gitData = async () => {
    const entityType = this.state.searchType === 'users' ? 'login' : 'name';
    const response = await fetch(`https://api.github.com/search/${this.state.searchType}?q=${this.state.searchQuery}%20in:${entityType}&per_page=9`);
    const data = await response.json();

    this.setState({
      returnData: data
    });

    console.log(this.state.returnData);
  }

  render() {
    return (
      <div className="container">

        <form className="git-search__container" onSubmit={e => {
          e.preventDefault();
          this.gitData(); // Remove (for testing only - GitHub API limit)
          }}>
            
          <input
            className="git-search__input"
            type="text"
            placeholder="Start typing to search..."
            onChange={this.handleInput} />
          
          <SearchSelect 
            handleSelect={this.handleSelect}
            selectValues={this.state.selectValues}/>
        </form>

        <GitResults
          returnData={this.state.returnData}
          searchType={this.state.searchType}/>
      </div>
    )
  }
}
