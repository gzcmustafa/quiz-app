import React from 'react'

export default function BtnLevel({data,setDifficultySelect}) {
  return (
 
    <div>
       <div className=' mt-16 flex flex-col'>
            <div className='text-2xl font-bold text-white '>Select Difficulty Level</div>
            <div className="mt-9 grid grid-cols-3 gap-6 text-center">
                
            {
                data.map((dt,i)=>(
                    <div 
                    onClick={()=> setDifficultySelect(dt)}
                    value={dt} className={` hover:bg-black backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-colors cursor-pointer 
                        ${dt === 'easy' ? 'bg-green-500' : dt === 'medium' ? 'bg-yellow-500' : 'bg-red-500'}`}>
                        <h3 className="text-2xl font-bold text-white">{dt.charAt(0).toUpperCase() + dt.slice(1)}</h3>
                     </div>
                ))
            }



        </div>
      </div>
    </div>
  )
}
