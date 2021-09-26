import React, { Component } from 'react'
import './App.css';

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
    searchQuery: '',
    searchType: 'users',
  }

  handleInput = (e: any) => {
    this.setState({
      searchQuery: e.target.value
    })
    // this.gitData();
  }

  handleSelect = (e: any) => {
    this.setState({
      searchType: e.target.value
    })
  };

  gitData = async () => {
    const entityType = this.state.searchType === 'users' ? 'login' : 'name';
    const response = await fetch(`https://api.github.com/search/${this.state.searchType}?q=${this.state.searchQuery}%20in:${entityType}&per_page=2`);
    const data = await response.json();

    console.log(data);
  }

  render() {
    return (
      <>
        <form onSubmit={e => {
          e.preventDefault();
          this.gitData(); // Remove (for testing only - GitHub API limit)
          }}>
          <input
            className="git-search__input"
            type="text"
            placeholder="Start typing to search .."
            onChange={this.handleInput} />

          <select 
            className="git-search__type"
            onChange={this.handleSelect}>
            <option value="users">Users</option>
            <option value="repositories">Repositories</option>
          </select>
        </form>
      </>
    )
  }
}
