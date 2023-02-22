import styled from 'styled-components'
import React, {useState} from 'react'
import MintBox from '../toolsets/MintBox'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MintBoxMobile from '../toolsets/MintBoxMobile'


function TierThreeLayout({firstSecondQuantity, setFirstSecondQuantity, thirdQuantity, setThirdQuantity, selectedImages, setSelectedImages, free, allowed, mintInfo, packedChoices, paused}) {

    return (
        <>
            <Row>
                <SubtitleCol>
                    Step 3
                </SubtitleCol>
            </Row>
            <br/>
            <Row>
                <BookYourSessionCol>
                    Mint {selectedImages.length < 3 ? (<div className="text-amber-400 text-base">You must select at least 3 artists (or choose "Surprise Me") to mint</div>) : (<></>)}
                </BookYourSessionCol>
            </Row>
            <br/>
            <MintBox packedChoices={packedChoices} selectedImages={selectedImages} setSelectedImages={setSelectedImages} firstSecondQuantity={firstSecondQuantity} setFirstSecondQuantity={setFirstSecondQuantity} thirdQuantity={thirdQuantity} setThirdQuantity={setThirdQuantity} free={free} allowed={allowed} mintInfo={mintInfo} paused={paused} />
            
            {/*(responsive) ? (
                <MintBox selectedImages={selectedImages} setSelectedImages={setSelectedImages} firstSecondQuantity={firstSecondQuantity} setFirstSecondQuantity={setFirstSecondQuantity} thirdQuantity={thirdQuantity} setThirdQuantity={setThirdQuantity}/>
            ) : (
                <MintBoxMobile selectedImages={selectedImages} setSelectedImages={setSelectedImages} firstSecondQuantity={firstSecondQuantity} setFirstSecondQuantity={setFirstSecondQuantity} thirdQuantity={thirdQuantity} setThirdQuantity={setThirdQuantity}/>
            )*/}
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row>
                <SubtitleCol className="flex justify-center">
                    HELP ME MINT
                </SubtitleCol>
            </Row>
            <br/>
            <Row>
                <BookYourSessionCol style={{fontSize: "14px", paddingBottom: "150px"}} className="flex justify-center">
                    See our <a href="https://www.theorderofink.com/faq" className="mx-1 underline underline-offset-2 decoration-dashed decoration-amber-200 text-amber-100 hover:text-amber-400">FAQ</a> section and our <a href="https://www.theorderofink.com/how-to-mint" className="mx-1 underline underline-offset-2 decoration-dashed decoration-amber-200 text-amber-100 hover:text-amber-400">How to Mint</a> page for more information
                </BookYourSessionCol>
            </Row>
        </>
    )
}

export default TierThreeLayout



const BookYourSessionCol = styled(Col)`

    /* Subtitle */

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 150%;
    /* identical to box height, or 48px */

    text-transform: uppercase;

    color: #EBEAEB;
`



const SubtitleCol = styled(Col)`

    font-family: 'Alternate Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;

    /* identical to box height */

    text-transform: uppercase;

    color: #EBEAEB;
`


