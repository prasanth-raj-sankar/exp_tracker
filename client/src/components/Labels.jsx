import React from "react";
import { default as api } from "../store/apiSlice";
import { getLabels } from "../helper/helper";

export default function Labels() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();

  let Transactions;

  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isSuccess) {
    Transactions = getLabels(data).map((v, i) => (
      <LabelComponent key={i} data={v} />
    ));
  } else if (isError) {
    Transactions = <div>Error</div>;
  }

  return <>{Transactions}</>;
}

function LabelComponent({ data }) {
  if (!data) return null;

  return (
    <div className="labels flex justify-between items-center py-2">
      <div className="flex items-center gap-2">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: data.color ?? "#ffc234" }} // ✅ Ensure color matches
        ></div>
        <h3 className="text-md font-semibold">{data.type ?? ""}</h3> {/* ✅ Show category name */}
      </div>
      <h3 className="font-bold">{Math.round(data.percent) ?? 0}%</h3> {/* ✅ Show percentage */}
    </div>
  );
}











// import { Colors } from "chart.js";
// import React from "react";
// import {default as api} from '../store/apiSlice';
// import { getLabels } from "../helper/helper";


// // const obj = [
// //     {
// //         type:"savings",
// //         Color:'#ffc234',
// //         percent:45
// //     },
// //     {
// //         type:"Investment",
// //         Color:'rgb(255, 99, 132)',
// //         percent:20
// //     },
// //     {
// //         type:"Expense",
// //         Color:'rgb(54, 162, 235)',
// //         percent:10
// //     }
// // ]


// export default function Labels() {

// const{data, isFetching, isSuccess, isError} = api.useGetLabelsQuery()

// let Transactions;

// // console.log(data);

// if(isFetching){
//     Transactions = <div>Fetching</div>
// }else if(isSuccess){
//     // console.log()
//     Transactions =getLabels(data, 'type').map((v,i)=><LabelComponent key={i} data={v}></LabelComponent>);

// }else if(isError){
//     Transactions = <div>Error</div>

// }

// // console.log(data)
//   return(
//     <>
//     {/* {data.map((v,i)=><LabelComponent key={i} data={v}></LabelComponent>)} */}
//     {Transactions}
//     </>
//   )
// }

// function LabelComponent({ data }) {
//     if (!data) return <></>;

//     return (
//         <div className="labels flex justify-between">
//             <div className="flex gap-2">
//                 <div className="w-2 h-2 rounded py-3"
//                     style={{ background: data.Color ?? '#ffc234' }} // Fixed 'Color' reference
//                 ></div>
//                 <h3 className='text-md'>{data.type ?? ""}</h3> {/* Fixed syntax */}
//             </div>
//             <h3 className='font-bold'>{Math.round(data.percent) ?? 0}%</h3>
//         </div>
//     );
// }