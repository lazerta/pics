import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import unsplash from '../API/unsplash';
import ImageList from "./ImageList";

class App extends Component {
    state = {images: [],};
    onSearchSubmit = async (query) => {
      const  res = await unsplash.get('photos',{
          params:{query}
      });
      this.setState({images: res.data.results});
    };


    render() {
        return (
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar OnSearchSumbmit={this.onSearchSubmit}/>
                 <ImageList images = {this.state.images}/>
            </div>
        );
    }
}

export default App;
