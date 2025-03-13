import { useState } from 'react'
import data from './tools.js';
import './App.css'
function App() {
  const [text, setText] = useState("Inactive");
  const [isChanged, setIsChanged] = useState(false);

  const handleClick = () => {
    setText("Active");
    setIsChanged(!isChanged);
  };

  return (
    <>
      <header className='w-[100%] flex bg-[#F7F9FE]'>
        {/* navbar */}
        <div className='w-[306px] bg-white shadow-[0px_10px_60px_0px_#E2ECF980]'>
            <h2 className='font-bold text-[26px] text-center'>Logotip cuteam</h2>
            <ul className='w-[250px] border flex flex-wrap mx-auto mt-[60px] justify-center'>
                <li className='text-[#9197B3] text-[14px] bg-white rounded-[8px] w-[250px] py-[11px] flex items-center px-[11px] justify-between hover:bg-[#5932EA] hover:text-white'>
                     <div className='flex items-center gap-[14px]'>
                      <h2 className='font-bold text-[26px] text-[#9197B3]'>icon</h2>
                      Dashboard
                    </div> 
                    <h2 className='font-bold text-[26px] text-[#9197B3]'>›</h2>
                </li>
                <li className='text-[#9197B3] text-[14px] bg-white rounded-[8px] w-[250px] py-[11px] flex items-center justify-between px-[11px] hover:bg-[#5932EA] hover:text-white'>
                     <div className='flex items-center gap-[14px]'>
                      <h2 className='font-bold text-[26px] text-[#9197B3]'>icon</h2>
                      Product
                    </div> 
                    <h2 className='font-bold text-[26px] text-[#9197B3]'>›</h2>
                </li>
                <li className='text-[#9197B3] text-[14px] bg-white rounded-[8px] w-[250px] py-[11px] flex items-center px-[11px] justify-between hover:bg-[#5932EA] hover:text-white'>
                    <div className='flex items-center gap-[14px]'>
                      <h2 className='font-bold text-[26px] text-[#9197B3]'>icon</h2>
                      Customers
                    </div> 
                    <h2 className='font-bold text-[26px] text-[#9197B3]'>›</h2>
                  </li>
                  <li className='text-[#9197B3] text-[14px] bg-white rounded-[8px] w-[250px] py-[11px] flex items-center px-[11px] justify-between hover:bg-[#5932EA] hover:text-white'>
                    <div className='flex items-center gap-[14px]'>
                      <h2 className='font-bold text-[26px] text-[#9197B3]'>icon</h2>
                      Income
                    </div> 
                    <h2 className='font-bold text-[26px] text-[#9197B3]'>›</h2>
                  </li>
                  <li className='text-[#9197B3] text-[14px] bg-white rounded-[8px] w-[250px] py-[11px] flex items-center px-[11px] justify-between hover:bg-[#5932EA] hover:text-white'>
                    <div className='flex items-center gap-[14px]'>
                      <h2 className='font-bold text-[26px] text-[#9197B3]'>icon</h2>
                      Promote
                    </div> 
                    <h2 className='font-bold text-[26px] text-[#9197B3]'>›</h2>
                  </li>
                  <li className='text-[#9197B3] text-[14px] bg-white rounded-[8px] w-[250px] py-[11px] flex items-center px-[11px] justify-between hover:bg-[#5932EA] hover:text-white'>
                    <div className='flex items-center gap-[14px]'>
                      <h2 className='font-bold text-[26px] text-[#9197B3]'>icon</h2>
                      help
                    </div> 
                    <h2 className='font-bold text-[26px] text-[#9197B3]'>›</h2>
                  </li>
              </ul>
        </div>  

      <div className='w-[100%] border'>
        <nav className='flex justify-around items-center mt-[40px]'>
          <h2 className='text-[24px] font-bold'>Hello Evano 👋🏻,</h2>
          <input type="search" placeholder='search' className='bg-white px-[8px] py-[10px] rounded-[12px] focus:overflow-[0] '/>
        </nav>
        <div className='w-[968px] rounded-[30px] bg-white mx-auto mt-[62px] py-[30px] shadow-[0px_10px_60px_0px_#E2ECF980] mb-[30px]'>
            <div className='flex items-center justify-between px-[33px]'>
                <div>
                  <h2 className='text-[22px] font-bold'>All Customers</h2>
                  <p className='text-[14px] text-[#16C098]'>Active Members</p>
                </div>
                <div className='flex gap-[16px]'>
                <input type="search" placeholder='search' className='bg-[#F9FBFF] px-[8px] py-[10px] rounded-[12px] focus:overflow-[0] '/>
                <button className='text-[12px] bg-[#F9FBFF] rounded-[10px] text-[#7E7E7E] px-[15px] py-[10px]'>Short by : <span className='text-black font-bold'>Newest  ▿</span></button>
                </div>
              </div>
            
              <div>
                {
                  data?.map((item, index) => (
                    <div key={index} className='py-[24px] flex justify-center border border-solid border-[#EEEEEE]'>
                      <div className='w-[886px] flex justify-between'>
                        <h2>{item.customer_name}</h2>
                        <h2>{item.Company}</h2>
                        <h2>{item.phoneNumber}</h2>
                        <h2>{item.Email}</h2>
                        <h2>{item.Country}</h2>
                        <button onClick={handleClick} className={`py-[4px] px-[18px] rounded-[4px] ${isChanged ? "bg-[#FFC5C5] text-[#DF0404] border border-[#DF0404] border-solid" : "bg-[#A6E7D8] text-[#008767] border border-[#00B087] border-solid" }`}>{text}</button>
                      </div>
                    </div>
                  ))
                }
              </div>


            <div className='h-[94px] flex justify-around items-center'>
              <h2 className='text-[#B5B7C0]'>Showing data 1 to 8 of  256K entries</h2>
              <div className="join">
                <button className='join-item btn'>‹</button>
                <button className="join-item btn hover:bg-[#5932EA] hover:text-white">1</button>
                <button className="join-item btn hover:bg-[#5932EA] hover:text-white">2</button>
                <button className="join-item btn btn-disabled hover:bg-[#5932EA] hover:text-whit">...</button>
                <button className="join-item btn hover:bg-[#5932EA] hover:text-white">99</button>
                <button className="join-item btn hover:bg-[#5932EA] hover:text-white">100</button>
                <button className='join-item btn'>›</button>
              </div>
            </div>
        </div>
      </div>
      </header>
    </>
  )
}

export default App
