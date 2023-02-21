import styled from 'styled-components'
import React, { useState } from 'react'; 

function QuantitySelector({quantity, setQuantity, total, free=0, allowed=10}) {


    return (
        <div className="h-45 w-full flex items-center justify-center">
            {allowed > -1 ? (
            <>
                <SubtractButton onClick={()=>setQuantity((cur) => cur-(cur > 0 ? 1 : 0))}/>
                <QuantityDisplay>{quantity}{' '}{free > 0 ? <sup className='ml-1 text-sm'>{` +${free} FREE`}</sup>:''}</QuantityDisplay>
                <AddButton onClick={()=>setQuantity((cur) => cur+(total !== allowed ? 1 : 0))} className={total === allowed ? `text-amber-500 text-sm leading-none` : `border border-white rounded-full text-zinc-200 text-4xl`} >
                    {total !== allowed ? '+' : allowed === 0 ? 'NONE ALLOWED' : `MAX ${allowed}`}
                </AddButton>
            </>
            ) : (
                <div>The connected wallet is not on the allow list for the current minting period.</div>
            )}

        </div>
    )

}

export default QuantitySelector

const SelectorBox = styled.div`
height: 45px;
width: 266px;
display: flex;
align-items: center;
`

const SubtractButton = styled.button`
    height: 34px;
    width: 34px;
    display: inline-flex; 
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: transparent;
    border: 1px solid white;
    cursor: pointer;

    &::before {
        content: '';
        display: block;
        width: 17px;
        height: 3px;
        background-color: #D9D9D9;
    }
`;

const AddButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    /*border-radius: 20px;*/
    background-color: transparent;
    /*border: 1px solid white;*/
    /*font-size: 36px;*/
    cursor: pointer;
    /*color: #D9D9D9;*/
`

const QuantityDisplay = styled.div`
  max-width: 176px;
  width: 50%;
  height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: #111111;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  font-size: 32px;
  margin: 10px;
  font-family: Alternate Gothic;
  font-weight: bold;
`;
