import {ADD_CONTENT, READ_CONTENT, EDIT_CONTENT, DELETE_CONTENT} from '../actions/DetailsAction'

export default function Reducer(state =[], action) {
    switch(action.type) {
        case ADD_CONTENT:
            return {
                ...state,
               data: action.newArr 
            }
        case EDIT_CONTENT:
            return {
                ...state,
                data: action.oldData
            }
        case READ_CONTENT:
            return {
                ...state,
                data: action.readData
            }
        case  DELETE_CONTENT: 
            return{
                ...state,
                data: action.getData
            }
        default:
            return {
            ...state,
        }
    }
}