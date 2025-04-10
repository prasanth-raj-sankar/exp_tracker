import {createSlice} from '@reduxjs/toolkit';

const initialState = { // ✅ Fixed typo (intialState -> initialState)
    categories: [],
    transaction: []
};

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        getTransactions: (state) => {
            return state; // ✅ Returning the current state
        }
    }
});



export const {getTransactions} = expenseSlice.actions;
export default expenseSlice.reducer;


// export const expenseSlice = createSlice({

//     name:'expense',
//     initialState,
//     reducers:{
//         getTransactions:(state) =>{

//         }

//     }
// });