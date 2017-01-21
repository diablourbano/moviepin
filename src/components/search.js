import React, { Component } from 'react';

import InputField from './input-field';

class Search extends Component {
  constructor() {
    super();
    
    this.state = {
      searchValue: ''
    };
  }

  searchValueChange(searchTerm) {
    this.setState({
      searchValue: searchTerm
    });

    this.props.searchFor(searchTerm);
  }

  render() {
    return (
      <form className={'form -search ' + this.props.className}>
          <InputField className='-search'
                      fieldValue={this.state.searchValue}
                      inputType='text'
                      inputName='search'
                      onChange={(searchTerm) => {
                        this.searchValueChange(searchTerm);
                      }}/>
      </form>
    );
  }
}

export default Search;
