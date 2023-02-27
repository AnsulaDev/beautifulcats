
import { connect } from 'react-redux';
import Cardlist from '../components/cardlist/cardlist.component';
import SearchBox from '../components/searchbox/searchbox.component';
import Scroll from '../components/scroll/scroll.component';

import { Component } from 'react';
import './App.css';

import { setSearchField , requestCats} from '../actions';


//mapStateToProps is just tell me what state, what piece of state I need to listen to, and send down as props
const mapStateToProps = state => {
  return{
    searchField: state.searchCats.searchField,
    cats: state.requestCats.cats,
    isPending: state.requestCats.isPending,
    error: state.requestCats.error

  }
}

//mapDispatchToProps says hey tell me what props I should listen to that are actions that need to get dispatched.
const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestCats: () => dispatch(requestCats())

  }
}

class App extends Component{

    componentDidMount(){
      this.props.onRequestCats();
    }


    render(){
      const { searchField, onSearchChange, cats, isPending} = this.props;
      const filteredCats = cats.filter(cat =>{
        return cat.name.toLowerCase().includes(searchField.toLowerCase());
      })
      return isPending?
          <h1>Loading</h1> :
        (
          <div className="App">
            <h1 className="app-title">Beautiful Kittens</h1>
            <SearchBox className ='cats-search-box'searchChange = {onSearchChange}
            />
            <Scroll>
              <Cardlist cats={ filteredCats }  />
            </Scroll>
          
          </div>
        );
    }
  
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
