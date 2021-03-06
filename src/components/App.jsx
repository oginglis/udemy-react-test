import React, { Component } from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
  state = { images: [] }

  onSearchSubmit = (term) => {
    unsplash.get('/search/photos', {
      params: { query: term }
    }).then((response) => {
      this.setState({ images: response.data.results });
      console.log(response.data.results);
    });
  }

  render () {
    const style = {
      width: '200px'
    }
    return (
      <div className="ui container margin-top">
        <SearchBar onMySubmit={this.onSearchSubmit} />
        <ImageList useImages={this.state.images} />
        <p>Found: { this.state.images.length } images</p>

      </div>
    );
  }
}

export default App;
