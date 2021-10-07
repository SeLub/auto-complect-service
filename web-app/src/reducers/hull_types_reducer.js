/* eslint-disable */
import { configureStore, createStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

const dispatch = useDispatch
const initialState = { hull_types: {} }

const  hull_types_reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'hull_types/get':
            console.log(state)
            return state
            break;
        case 'hull_types/set':
            return {
                ...state,
                hull_types: state
            } 
            
    }
    return state
}

export default hull_types_reducer;

const hull_types_store = createStore({reducer: hull_types_reducer})