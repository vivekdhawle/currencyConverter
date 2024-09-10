import { useState } from 'react'

import './App.css'
import usecurrencyinfo from './hooks/currenxyinfo'
import {InputBox} from './components'




function App() {
  
  const [amount,setamount]=useState(0);
  const [to,setto]=useState('inr');
  const [from,setfrom]=useState('usd');
  const [convertedamount,setconverted]=useState(0);
  const currencyinfo=usecurrencyinfo(from);
  const options=Object.keys(currencyinfo);
  const covert=()=>{setconverted(amount*usecurrencyinfo[to])};

  return (
    <>
     <div className='flex w-full h-screen flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage:`url(https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
        <div className='w-1/2 h-1/2 backdrop-blur-sm border-white border-2 rounded-lg  '>

        <form  onSubmit={(e)=>{e.preventDefault();
            covert()} 
          } >
            <div className='flex justify-center m-5 box-border'>
              <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>setamount(amount)}
              selectCurrency={from}
              onAmountChange={(amount)=>setamount(amount)}
              
              />
              </div>

              <div>
            <InputBox
              label={to}
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>setamount(convertedamount)}
              selectCurrency={from}
              onAmountChange={(amount)=>setamount(amount)}
              
              />
            </div>
          </form>
         
        </div>
      
     </div>
    </>
  )
}

export default App
