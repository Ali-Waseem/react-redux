
import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
    counter: 0,
    showCounter: true
};
// Using Redux Toolkit's createSlice is a more modern and easier approach
// createSlice automatically generates action creators and action types based on the reducers defined
// EVERY SLICE HOLDS DIFFERENT PART OF THE STATE AND CAN HAVE ITS OWN REDUCER
// FOR EXAMPLE IF WE NEED TO ADD AUTHENTICATION OR ANY OTHER STATE WE CAN ADD A NEW SLICE FOR IT
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state, action) {
            state.counter += action.payload || 1;
        },
        decrement(state, action) {
            state.counter -= action.payload || 1;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

export default counterSlice;
