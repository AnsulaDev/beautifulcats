import  {CHANGE_SEARCH_FIELD} from './constant';
const intialState = {
    searchField: ''
}

export const searchCats = (state = intialState, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

