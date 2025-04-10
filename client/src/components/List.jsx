import React from 'react';
import 'boxicons';
import { default as api } from '../store/apiSlice';

export default function List() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();

  let Transactions;

  const handlerClick = (e) => {
    if (!e.target.dataset.id) return;
    deleteTransaction({ _id: e.target.dataset.id });
  };

  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isSuccess) {
    Transactions = data.map((v, i) => (
      <Transaction key={i} category={v} handler={handlerClick} />
    ));
  } else if (isError) {
    Transactions = <div>Error</div>;
  }

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {Transactions}
    </div>
  );
}

function Transaction({ category, handler }) {
  if (!category) return null;

  return (
    <div 
      className="item flex justify-between bg-gray-50 py-2 px-4 rounded-md shadow-md"
      style={{ borderLeft: `8px solid ${category.color ?? "#ffc234"}` }} // ✅ Use correct color
    >
      <button className="px-3" onClick={handler}>
        <box-icon
          data-id={category._id ?? ''}
          color={category.color ?? "#ffc234"} // ✅ Color matches the type
          size="15px"
          name="trash"
        ></box-icon>
      </button>
      <span className="block w-full px-3 text-md font-semibold">{category.name}</span> 
    </div>
  );
}






// import React from 'react';

// import 'boxicons';
// import {default as api} from '../store/apiSlice';

// // const obj = [
// //     {
// //         name: "Savings",
// //         Color: '#ffc234',
// //     },
// //     {
// //         name: "Investment",
// //         Color: 'rgb(255, 99, 132)',
// //     },
// //     {
// //         name: "Expense",
// //         Color: 'rgb(54, 162, 235)',
// //     }
// // ];

// export default function List() {
// const{data, isFetching, isSuccess, isError} = api.useGetLabelsQuery()
// const [deleteTransaction] = api.useDeleteTransactionMutation()
// let Transactions;

// const handlerClick = (e) => {
//     // console.log(e.target.dataset.id)
//     if(!e.target.dataset.id)return 0;
//     deleteTransaction({_id:e.target.dataset.id})
// }

// if(isFetching){
//     Transactions = <div>Fetching</div>
// }else if(isSuccess){
//     Transactions =data.map((v,i)=><Transaction key={i} category={v} handler={handlerClick}></Transaction>);

// }else if(isError){
//     Transactions = <div>Error</div>

// }



//     return (
//         <div className="flex flex-col py-6 gap-3">
//             <h1 className="py-4 font-bold text-xl">History</h1>
//             {/* {obj.map((v, i) => <Transaction key={i} category={v} />)} */}
//             {Transactions}
//         </div>
//     );
// }

// function Transaction({ category,handler }) {
//     if (!category) return null;
    
//     return (
//         <div 
//             className="item flex justify-center bg-gray-50 py-2 rounded-r-md w-full"
//             style={{ borderLeft: `8px solid ${category.Color ?? "#ffc234"}` }} // Fixed border style
//         >
//             <button className='px-3' onClick={handler}><box-icon data-id={category._id??''} Color={category.Color ?? "#ffc234"} size="15px" name="trash"></box-icon></button>
//             <span className="block w-full px-3">{category.name}</span> {/* Added padding for better spacing */}
//         </div>
//     );
// }




// import React from 'react'

// const obj = [
//     {
//         name:"savings",
//         Color:'#ffc234',
   
//     },
//     {
//         name:"Investment",
//         Color:'rgb(255, 99, 132)',
//     },
//     {
//         name:"Expense",
//         Color:'rgb(54, 162, 235)',
//     }
// ]

// export default function List() {
//   return (
//     <div className="flex flex-col py-6 gap-3">
//         <h1 className='py-4 font-bold text-xl'>History</h1>
//         {obj.map((v,i)=><Transaction key={i} category={v}></Transaction>
// )}
//     </div>
//   )
// }

// function Transaction({category}){
//     if(!category) return null;
//     return(
//         <div className='item flex justify-center bg-gray-50 py-2 rounded-r' style={{borderRadius:`8px solid ${category.Color ?? "#e5e5e5" }`}}>
// <span className='block w-full'>{category.name ??""}</span>
//         </div>
//     )
// }