import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency='usd',
    amountDisabled=false,
    currencyDisabled=false,
    className
  
  }) {
    
  
    return (
      <>
       <div className={`bg-white w-full rounded-2xl box-border p-5 flex flex-col gap-5 text-gray-500 font-semibold text-lg ${className}`}>
            <div className='flex flex-row justify-between mx-5'>
              <span>{label}</span>
              <span>Currency Type</span>
            </div>
            <div className='flex flex-row justify-between mx-5'>
              <input type="number" placeholder='Amount' onChange={(e)=>(onAmountChange && onAmountChange(Number(e.target.value)))} value={amount} disabled={amountDisabled} className='w-1/2'/>

              <select value={selectCurrency}
              onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
              disabled={currencyDisabled}
              >
  
                {currencyOptions.map((currency)=>(
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>
       </div>
      </>
    )
  }
  export default InputBox