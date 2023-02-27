import { isPending } from '@reduxjs/toolkit';
import  {
    CHANGE_SEARCH_FIELD,
    REQUEST_CATS_PENDING,
    REQUEST_CATS_SUCCESS,
    REQUEST_CATS_FAILED} from './constant';
const intialStateSearch = {
    searchField: ''
}

export const searchCats = (state = intialStateSearch, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}


const intialStateCats = {
    isPending:false,
    cats: [],
    error:''
}

export const requestCats = (state= intialStateCats, action={}) => {
    switch(action.type){
        case REQUEST_CATS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_CATS_SUCCESS:
            return Object.assign({}, state, {cats: action.payload, isPending:false})

        case REQUEST_CATS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending:false})

        default:
            return state;
    }
}