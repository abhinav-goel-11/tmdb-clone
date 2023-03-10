import React,{useState} from 'react'

function Pagination(props) {

    
  return (
    <div className="mb-8 flex justify-center  w-full">
        <button className="p-2 border-2 border-indigo-500 text-indigo-500 rounded-l-lg border-r-0 hover:bg-indigo-100 active:bg-indigo-300" onClick={props.prevPage}>Previous</button>
        <button className="p-2 border-2 border-indigo-500 text-indigo-500 bg-gray-300">{props.page}</button>
        <button className="p-2 border-2 border-indigo-500 text-indigo-500 rounded-r-lg border-l-0 hover:bg-indigo-100 active:bg-indigo-300" onClick={props.nextPage}>Next</button>
    </div>
  )
}

export default Pagination