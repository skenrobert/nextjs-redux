import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
    value: number;
  };
  
  const initialState: CounterState = {
    value: 30,
  };

//   const [counter, setCounter] = useState(initialState)
  
  export const counterSlice = createSlice({
    //same counter
    name: "counter",
    initialState,
    //same setCounter = reducers
    reducers: {
      increment: (state) => { //automatily access for redux state
        state.value += 1;
      },
      decrement: (state) => {//automatily access for redux state
        state.value -= 1;
      },
    //   incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload;
    //   },
    //   decrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value -= action.payload;
    //   },
      reset: (state) => {
        state.value = 0;
      },
    },
  });
  
  export const {
    increment,
    decrement,
    // incrementByAmount,
    // decrementByAmount,
    reset,
  } = counterSlice.actions; // counterSlice all function export 
  
  export default counterSlice.reducer; // always export all component