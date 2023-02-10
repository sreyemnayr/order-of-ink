import styled from 'styled-components'
import React, { useState } from 'react'; 

function QuantitySelectorMobile({quantity, setQuantity}) {

    return (
        <SelectorBox >
            <SubtractButton onClick={()=>setQuantity(quantity-1)}/>
            <QuantityDisplay>{quantity}</QuantityDisplay>
            <AddButton onClick={()=>setQuantity(quantity+1)}>+</AddButton>

        </SelectorBox>
    )

}

export default QuantitySelectorMobile

const SelectorBox = styled.div`
height: 45px;
width: 150px;
display: flex;
align-items: center;
`

const SubtractButton = styled.button`
    height: 34px;
    width: 34px;
    display: inline-flex; 
    align-items: center;
    justify-content: center;
    border-radius: 17px;
    background-color: transparent;
    border: 1px solid white;
    cursor: pointer;

    &::before {
        content: '';
        display: block;
        width: 16px;
        height: 2.5px;
        background-color: #D9D9D9;
    }
`;

const AddButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 20px;
    background-color: transparent;
    border: 1px solid white;
    font-size: 40px;
    cursor: pointer;
    color: #D9D9D9;
`

const QuantityDisplay = styled.div`
  width: 73px;
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
