
import Cardlist from './components/cardlist/cardlist.component';
import SearchBox from './components/searchbox/searchbox.component';
import Scroll from './components/scroll/scroll.component';

import { Component } from 'react';
import './App.css';


class App extends Component{
  constructor(){
    super()
    this.state={
      cats:[],
      searchfield: ''
    }
    }


    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({cats: users})});
    }

    onSearchChange=(event) =>{
      this.setState({ searchfield: event.target.value})
  
    }



    render(){
      const { cats, searchfield } = this.state;
      const filteredCats = cats.filter(cat =>{
        return cat.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      return !cats.length ?
          <h1>Loading</h1> :
        (
          <div className="App">
            <h1 className="app-title">Beautiful Kittens</h1>
            <SearchBox className ='cats-search-box'searchChange = {this.onSearchChange}
            />
            <Scroll>
              <Cardlist cats={ filteredCats }  />
            </Scroll>
          
          </div>
        );
    }
  
}


export default App;
