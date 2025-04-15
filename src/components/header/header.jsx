import React from 'react'

const header = () => {
  return (
    <>
      <header className='w-[100%] h-[1198px] flex bg-[#F7F9FE]'>
        <div className='w-[306px] bg-white shadow-[0px_10px_60px_0px_#E2ECF980]'>
            <h2 className='font-bold text-[26px]'>Logo</h2>
            <ul>
                <li className='text-[#9197B3] text-[14px] bg-white rounded-[8px] w-[250px] py-[11px] flex items-center justify-around'>Dashboard</li>
                <li className='text-[#9197B3] text-[14px] bg-white rounded-[8px] w-[250px] py-[11px] flex items-center justify-around'>Product ›</li>
                <li className='text-[#9197B3] text-[14px] bg-[#5932EA] rounded-[8px] w-[250px] py-[11px] flex items-center justify-around'>
                    <div>
                      <h2>I</h2>
                    </div> 
                    <h2 className='font-bold text-[18px] text-white'>›</h2>
                    </li>
                <li className='text-[#9197B3] text-[14px] bg-white rounded-[8px] w-[250px] py-[11px] flex items-center justify-around'>Income ›</li>
                <li className='text-[#9197B3] text-[14px] bg-white rounded-[8px] w-[250px] py-[11px] flex items-center justify-around'>Promote ›</li>
                <li className='text-[#9197B3] text-[14px] bg-white rounded-[8px] w-[250px] py-[11px] flex items-center justify-around'>help ›</li>
            </ul>
        </div>  
      </header>
    </>
  )
}

export default header
