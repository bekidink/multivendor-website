"use client"
import React,{useState} from 'react'
import data from "../../data.json"
const CustomDataTable = () => {
    const PAGE_SIZE=10
    const [currentPage,setCurrentPage]=useState(1)
    const startIndex=(currentPage-1)*PAGE_SIZE
    const endIndex=startIndex+PAGE_SIZE
    const currentlyDisplayedData=data.slice(startIndex,endIndex)
    const numberOfPages=Math.ceil(data.length/PAGE_SIZE)
    const itemStartIndex=startIndex+1
    const itemEndIndex=endIndex+1
    function handlePageChange(page){

 }
    return (
    <div className='mt-8'>
      <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50 px-4'>Recent Orders</h2>
      

      <div class="p-8 relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    First Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Last Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Gender
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          
           {currentlyDisplayedData.map((item,i)=>(
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
                <div class="flex items-center">
                    <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.id}
            </th>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.first_name}
            </th>
            <td class="px-6 py-4">
                {item.last_name}
            </td>
            <td class="px-6 py-4">
                {item.email}
            </td>
            <td class="px-6 py-4">
                {item.gender}
            </td>
            <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
           ))}
        </tbody>
    </table>
    <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between p-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">{itemStartIndex}-{itemEndIndex}</span> of <span class="font-semibold text-gray-900 dark:text-white">{data.length}</span></span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-14">
            <li>
                <button onClick={()=>setCurrentPage (currentPage-1)} disabled={currentPage===1} href="#" class="flex items-center justify-center px-3 h-10 ms-0 leading-tight text-gray-500 bg-white  border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
            </li>
           
            {Array.from({length:numberOfPages},(item,index)=>{
                return (
                    <li key={index}>
                    <button disabled={currentPage==index+1} onClick={()=>setCurrentPage(index+1)} href="#" aria-current="page" className={currentPage===index+1?"flex items-center justify-center px-3 h-10 leading-tight text-gray-50 bg-blue-600 border border-blue-300  hover:bg-blue-800 hover:text-white dark:border-lime-400 dark:bg-slate-100 dark:text-slate-900":"flex items-center justify-center px-3 h-10 text-gray-600 border border-gray-300 bg-white hover:bg-gray-10 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"}>{index+1}</button>
                </li> 
                )
            })}
            <li>
        <button disabled={currentPage==numberOfPages} href="#" class="flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={()=>setCurrentPage(currentPage+1)}>Next</button>
            </li>
        </ul>
    </nav>
</div>

    </div>
  )
}

export default CustomDataTable
