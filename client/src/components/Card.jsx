import React from 'react'

const card = () => {


  return (
    <div>
       <div className="card border-gray-400 border w-[250px] h-[300px] relative rounded-md">
        <div className="img w-[250px] h-[53%]" ><img className=' rounded-t-md' src="/fooditem1.png" alt="" /></div>
        <div className="price absolute top-2 right-2 bg-purple-500 text-white rounded-md text-xs px-2 py-1">Tk:45.00</div>
        <p className="desc w-[224px] h-[60px] font-semibold p-1 m-1">Crispy fried chicken on a plate with salad and carrot
</p>
        <div className="btn flex">
            <button className='w-[55px] h-[30px] rounded-[5px] bg-gray-100 text-green-600 p-1 m-1 text-xs flex justify-center items-center absolute bottom-4 left-1'>Edit</button>
            <button className='w-[55px] h-[30px] rounded-[5px] bg-red-100 text-red-600 p-1 m-1 text-xs flex justify-center items-center absolute bottom-4 left-16'>Delete</button>
        </div>
       </div>


    </div>
  )
}

export default card
