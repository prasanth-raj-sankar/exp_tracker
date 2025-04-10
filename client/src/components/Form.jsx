import React from 'react';
import { useForm } from 'react-hook-form';
import List from './List';
import { default as api } from '../store/apiSlice';

export default function Form() {
    const { register, handleSubmit, reset } = useForm(); // Fixed 'handleSubmit'

    const [addTransaction] = api.useAddTransactionMutation();

    const onSubmit = async (data) => {
        if(!data) return {};
        await addTransaction(data).unwrap();
        reset(); // Clears the form after submission
    };

    return (
        <div className='form max-w-sm mx-auto w-96'>
            <h1 className='font-bold pb-4 text-xl'>Transaction</h1>

            <form id='form' onSubmit={handleSubmit(onSubmit)}> {/* Fixed 'form' */}
                <div className='grid gap-4'>
                    <div className='input-group'>
                        <input 
                            type='text' 
                            {...register('name', { required: true })} 
                            placeholder='Salary, House Rent, SIP' 
                            className='form-input'
                        />
                    </div>

                    <select className='form-input' {...register('type', { required: true })}>
                        <option value="Investment">Investment</option>
                        <option value="Expense">Expense</option>
                        <option value="Savings">Savings</option>
                    </select>

                    <div className='input-group'>
                        <input 
                            type='number'  // Changed from text to number
                            {...register('amount', { required: true, valueAsNumber: true })} 
                            placeholder='Amount' 
                            className='form-input'
                        />
                    </div>

                    <div className="submit-btn">
                        <button type="submit" className='border py-2 text-white bg-indigo-500 w-full'>
                            Make Transaction
                        </button>
                    </div>
                </div>
            </form>

            <List></List>
        </div>
    );
}








// import React from 'react'
// import {useForm} from 'react-hook-form';


// export default function Form() {

//     const{register,handlesubmit,resetField} = useForm();

//     const onSubmit = (data)=>{
//         console.log(data)
//     }

//   return (
//     <div className='from max-w-sm mx-auto w-96'>
//         <h1 className='font-bold pb-4 text-xl'>Transaction</h1>

//         <form id='from' onSubmit={handlesubmit(onSubmit)}>
//             <div className='grid gap-4'>
//                 <div className='input-group'>
//                     <input type='text' {...register('name')} placeholder='salary,house rend,sip' className='form-input'/>
//                 </div>
//                 <select className='form-input'  {...register('type')}>
//                     <option value="Investment" defaultValue>investment</option>
//                     <option value="Expense" >Expense</option>
//                     <option value="Savings" >Savings</option>
//                 </select>
//                 <div className='input-group'>
//                     <input type='text'  {...register('amount')} placeholder='Amount' className='form-input'/>
//                 </div>
//                 <div className="submit-btn">
//                     <button className='border py-2 text-white bg-indigo-500 w-full'>Make Transaction</button>
//                 </div>
//             </div>
//         </form>
//     </div>
//   )
// }
