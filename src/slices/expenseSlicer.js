import { createSlice } from "@reduxjs/toolkit";
const expense=createSlice(
    {
        name:"expense",
        initialState:[],
        reducers:
        {
            addTransaction(state,action){
                state.push(action.payload);
            },
            clearAllTransaction(state,action)
            {
                state=[];
            }
        }
    }
);

export default expense.reducer;