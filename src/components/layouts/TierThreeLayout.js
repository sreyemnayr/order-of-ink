import styled from 'styled-components'
import React, {useState} from 'react'
import MintBox from '../toolsets/MintBox'

function TierThreeLayout({extended}) {

    return (
        <SessionLargeBox extended={extended}>
            <StepThree>Step 3</StepThree>
            <Mint>Mint</Mint>
            <MintBox/>
            <HelpMeMint>Help Me Mint</HelpMeMint>
            <FAQ>See our FAQ section and our How to Mint page for more information</FAQ>

        </SessionLargeBox>
    )
}

export default TierThreeLayout



const SessionLargeBox = styled.div`
    top: ${props => props.extended ? "4813px" : "4527px"};
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 1050px;
    height: 669px;
    position: absolute;
    
`


const StepThree = styled.div`
    position: absolute;
    width: 106px;
    height: 58px;

    top: 0px;
    left: 0px;

    font-family: 'Alternate Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;

    /* identical to box height */

    text-transform: uppercase;

    color: #EBEAEB;
`

const Mint = styled.div`

position: absolute;
width: 522px;
height: 68px;
top: 58px;
left: 0px;
text-align: left;

/* Subtitle */
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 150%;
/* or 48px */
text-transform: uppercase;

color: #EBEAEB;
`



const HelpMeMint = styled.div`
position: absolute;
width: 287px;
height: 76px;
left: 384px;
top: 843px;

font-family: 'Alternate Gothic';
font-style: normal;
font-weight: 400;
font-size: 63px;
line-height: 76px;
/* identical to box height */
text-align: center;
text-transform: uppercase;

color: #EBEAEB;
`

const FAQ = styled.div`

position: absolute;
width: 1068px;
height: 37px;
left: 0px;
top: 945px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;
text-transform: uppercase;

color: #FFFFFF;
`