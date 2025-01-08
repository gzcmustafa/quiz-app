import React from 'react'

export default function BtnLevel({data,setDifficultySelect}) {
  return (
 
    <div>
       <div className=' mt-10 md:mt-16 flex flex-col'>
            <div className='text-xl md:text-2xl font-bold text-white '>Select Difficulty Level</div>
            <div className=" mt-2 md:mt-8 grid grid-cols-3 gap-2 md:gap-6 text-center">
                
            {
                data.map((dt,i)=>(
                    <div 
                    onClick={()=> setDifficultySelect(dt)}
                    value={dt} className={` hover:bg-black backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-colors cursor-pointer 
                        ${dt === 'easy' ? 'bg-green-500' : dt === 'medium' ? 'bg-yellow-500' : 'bg-red-500'}`}>
                        <h3 className="text-lg md:text-2xl font-bold text-white">{dt.charAt(0).toUpperCase() + dt.slice(1)}</h3>
                     </div>
                ))
            }



        </div>
      </div>
    </div>
  )
}
