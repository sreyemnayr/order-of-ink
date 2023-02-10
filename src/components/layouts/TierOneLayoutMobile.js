import styled from 'styled-components'
import SessionOne from '../../images/FirstSession.png'
import SessionTwo from '../../images/SecondSession.png'
import SessionThree from '../../images/ThirdSession.png'
import QuantitySelector from '../toolsets/QuantitySelector'
import React, {useState, useEffect} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

function TierOneLayoutMobile({firstSecondQuantity, setFirstSecondQuantity, thirdQuantity, setThirdQuantity}) {

    const [firstSecondIncluded, setFirstSecondIncluded] = useState(false)
    const [thirdIncluded, setThirdIncluded] = useState(false)


    return (

        <>
            <Row>
                <TitleCol>
                    How to Mint
                </TitleCol>
            </Row>
            <br/>
            <br/>
            <br/>
            <Row>
                <SubtitleCol>
                    Step 1
                </SubtitleCol>
            </Row>
            <br/>
            <Row>
                <BookYourSessionCol>
                    Book Your Session
                </BookYourSessionCol>
            </Row>
            <br/>
            <Row>
                <SessionInfoCol className="sm:w-full md:w-1/2">
                Our NFT tattoo designs are divided into sessions -- like tattoo sessions. You can choose if you’d like to mint First or Second Sessions* consisting of editions of our artwork or Final Sessions which are 1/1s.  
                <p>*When you choose to mint a First/Second Session (which are both priced the same), you will be randomly assigned one of them.</p>
                
                </SessionInfoCol>
            </Row>
            <br/>
            <div className="md:flex">
                <div className="sm:w-full md:w-2/3 px-2">
                    <SessionCardOne firstSecondIncluded={firstSecondIncluded}>
                        <div className="flex p-2">
                            <div className="w-1/2 flex flex-col justify-center px-1">
                                <img src={SessionOne}/>
                 
                                <SessionText className="flex justify-center py-2">Session One</SessionText>
                               
                                <SessionText className="flex justify-center">1/15</SessionText>
                            </div>
                            <div className="w-1/2 flex flex-col justify-center px-1">
                                
                                <img src={SessionTwo}/>
                    
                                <SessionText className="flex justify-center py-2">Session Two</SessionText>
                                
                                <SessionText className="flex justify-center">1/8</SessionText>
                                
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center">
                            
                            <SessionSubText className="flex justify-center mt-4">Presale Price: 0.08 ETH</SessionSubText>
                            <SessionSubText className="flex justify-center">Public Price: 0.123 ETH</SessionSubText>
                
                            <SessionSubText className="flex justify-center py-2">Quantity</SessionSubText>
                            <SessionSubText className="flex justify-center">
                                <QuantitySelector quantity={firstSecondQuantity} setQuantity={setFirstSecondQuantity}/>
                            </SessionSubText>
                      
                            <SessionButton firstSecondIncluded={firstSecondIncluded} thirdIncluded={thirdIncluded} onClick={() => setFirstSecondIncluded(p => !p)} className="flex justify-center py-7">What's Included?</SessionButton>
                
                        </div>
                        {firstSecondIncluded && 
                        <div className="flex justify-center">
                        <div className="w-full flex flex-col mx-4" style={{ wordWrap: "break-word", maxWidth: "308px"}}>
                            <div style={{color: "white",  marginLeft: "-10px",fontFamily: "Work Sans"}}>FIRST SESSION</div>
                            <ul style={{listStyleType: 'disc'}}>
                                <Line>
                                Genesis Collection Order of Ink digital collectible
                                </Line>
                                <Line>
                                Genesis collectible artwork, hand drawn by an artist from our collective
                                </Line>
                                <Line>
                                Exclusive access to all The Order of Ink future drops and artist collaborations
                                </Line>
                                <Line>Allowlist next artist collections</Line>
                                <Line>Limited NFT Giveaways and airdrops</Line>
                
                            </ul>
                            
                            <div style={{color: "white", fontFamily: "Work Sans"}}>IRL:</div>
                            <ul style={{listStyleType: "disc"}}>
                                <Line>
                                Access to The Order private community for digital and IRL events
                                </Line>
                            </ul>
                            <br/>
                            <div style={{color: "white", marginLeft: "-10px", fontFamily: "Work Sans"}}>SECOND SESSION</div>
                            <ul style={{listStyleType: 'disc'}}>
                                <Line>
                                Genesis Collection Order of Ink digital collectible
                                </Line>
                                <Line>
                                Genesis collectible artwork, hand drawn by an artist from our collective
                                </Line>
                                <Line>
                                Exclusive access to all The Order of Ink future drops and artist collaborations
                                </Line>
                                <Line>Discounted mint for next artist collections</Line>
                                <Line>NFT giveaways and airdrops</Line>
                                
                
                            </ul>
     
                            <div style={{color: "white", fontFamily: "Work Sans"}}>IRL:</div>
                            <ul style={{listStyleType: "disc"}}>
                                <Line>
                                Access to physical tattoo giveaways
                                </Line>
                                <Line>
                                Access to The Order private community for digital and IRL events
                                </Line>
                            </ul>
                            </div>
                            </div>}
                    </SessionCardOne>
                </div>
                <div className="sm:w-full md:w-1/3 px-2 mt-4">
                    <SessionCardTwo thirdIncluded={thirdIncluded}>
                        <div className="flex">
                            <div className="w-full flex flex-col justify-center">
                                <img src={SessionThree}/>
                                <SessionText className="flex justify-center py-2">Final Session</SessionText>
                                <SessionText className="flex justify-center">1/1</SessionText>
                                <SessionSubText className="flex justify-center mt-6">Presale Price: 0.4 ETH</SessionSubText>
                                <SessionSubText className="flex justify-center">Public Price: 0.5 ETH</SessionSubText>
                                <SessionSubText className="flex justify-center py-2">Quantity</SessionSubText>
                                <SessionSubText className="flex justify-center">
                                    <QuantitySelector quantity={thirdQuantity} setQuantity={setThirdQuantity}/>
                                </SessionSubText>
                                <SessionButton firstSecondIncluded={firstSecondIncluded} thirdIncluded={thirdIncluded} onClick={() => setThirdIncluded(p => !p)} className="flex justify-center py-7">What's Included?</SessionButton>
                            </div>
                        </div>
                        {thirdIncluded && 
                        <div className="flex justify-center">
                        <div className="w-full flex flex-col mx-4" style={{ wordWrap: "break-word", maxWidth: "308px"}}>
                            <ul style={{listStyleType: 'disc'}}>
                                <Line>
                                Genesis Collection Order of Ink digital collectible
                                </Line>
                                <Line>
                                Genesis collectible artwork, hand drawn by an artist from our collective
                                </Line>
                                <Line>
                                Exclusive access to all The Order of Ink future drops and artist collaborations
                                </Line>
                                <Line>Discounted mint for next artist collections</Line>
                                <Line>NFT giveaways and airdrops</Line>
                                
                
                            </ul>
                            <br/>
                            <div style={{color: "white", fontFamily: "Work Sans"}}>IRL:</div>
                            <ul style={{listStyleType: "disc"}}>
                                <Line>
                                Access to physical tattoo giveaways
                                </Line>
                                <Line>
                                Access to The Order private community for digital and IRL events
                                </Line>
                            </ul>
            

                            </div>
                            
                            </div>}
                    </SessionCardTwo>
                </div>
            </div>



        </>


    )
}

export default TierOneLayoutMobile

const TitleCol = styled(Col)`

    font-family: 'Alternate Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 63px;
    line-height: 76px;
    /* identical to box height */

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

const SessionInfoCol = styled(Col)`

/* Body text */
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 153.8%;
/* or 22px */

color: #FFFFFF;
`

const SessionCardOne = styled(Card)`
background: ${props => props.firstSecondIncluded ? 
    'linear-gradient(to bottom, #1E1E1E 40%, #333333 60%)' : 
    '#1E1E1E'};
border-radius: 5px;

border: ${props => props.firstSecondIncluded ? '1px solid white' : 'none'};
`

const SessionCardTwo = styled(Card)`
background: ${props => props.thirdIncluded ? 
    'linear-gradient(to bottom, #1E1E1E 62%, #333333 38%)' : 
    '#1E1E1E'};
border-radius: 5px;

border: ${props => props.thirdIncluded ? '1px solid white' : 'none'};
`

const SessionText = styled.p`

font-family: 'Alternate Gothic';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 38px;
text-transform: uppercase;

color: #FFFFFF;
`

const SessionButton = styled.button`

font-family: 'Alternate Gothic';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 38px;
text-transform: uppercase;

text-decoration: ${props => props.thirdIncluded ? 'underline' : 'none'}
text-decoration: ${props => props.firstSecondIncluded ? 'underline' : 'none'}

background: none;
border: none;

color: #FFFFFF;
`

const SessionSubText = styled.div`

font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-transform: uppercase;

color: #FFFFFF;
`




const Line = styled.li`
    padding-bottom: 10px; /* increases the space between each line */
    color: white;
    font-family: 'Work Sans';
    font-size: 14px;
`


