import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const baseURL = 'http://localhost:8080';
const baseURL = 'https://exp-tracker-jm13.onrender.com';
export const apiSlice = createApi({
    baseQuery : fetchBaseQuery({baseUrl: baseURL}),

    endpoints : builder =>({
        //get Categories
        getCategories:builder.query({
            //get:http://localhost:8080/api/categories
            query:() =>'/api/categories',
            providesTags:['categories']
        }),

        //get labels

        getLabels:builder.query({
            //get:http://localhost:8080/api/labels
            query:() =>'/api/labels',
            providesTags:['transaction']
        }),

        //add new transaction
        addTransaction : builder.mutation({
            query:(initialTransaction) => ({
                 //post:http://localhost:8080/api/transaction
                url:'/api/transaction',
                method:"POST",
                body:initialTransaction
            }),
            invalidatesTags:['transaction']
        }),

        //delete

        deleteTransaction:builder.mutation({
            query:recordid=>({
                //delete:http://localhost:8080/api/transaction
                url:'/api/transaction',
                method:"DELETE",
                body:recordid
            }),
            invalidatesTags:['transaction']
        })

    })
})

export default apiSlice;