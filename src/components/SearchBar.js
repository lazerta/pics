import React, {Component} from 'react';

class SearchBar extends Component {
    
    state = {term: 'Namask',};

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.OnSearchSumbmit(this.state.term);
    };


    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className="field">
                        <label>Image Search</label >
                        <input type='text'  value={this.state.term} onChange={ e => this.setState({term: e.target.value.toLocaleUpperCase()})}/>
                    </div>
                </form>
            </div>
        );
    }


}

export default SearchBar;
