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

function TierOneLayout({firstSecondQuantity, setFirstSecondQuantity, thirdQuantity, setThirdQuantity, mintInfo, free, allowed}) {

    //Local states to determine whether a "What's Included" button is clicked, opening up extra content for the user.
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
            <div className="md:flex ">
                <div className="w-full md:w-2/3 px-2 mt-1 md:mt-0">
                    <div className={`bg-zinc-800 rounded-md ${firstSecondIncluded ? 'border border-zinc-50' : ''}`}> {/* SessionOneCard */}
                        <div className="flex p-2">
                            <div className="w-1/2 flex flex-col justify-start px-1 mx-1">
                                <img src={SessionOne}/>
                 
                                <SessionText className="flex justify-center py-2 text-lg sm:text-xl md:text-4xl text-center">First Session  </SessionText>
                               
                                <SessionText className="flex justify-center py-2 text-lg sm:text-xl md:text-4xl">1/15</SessionText>
                            </div>
                            <div className="w-1/2 flex flex-col justify-start px-1 mx-1">
                                
                                <img src={SessionTwo}/>
                    
                                <SessionText className="flex justify-center py-2 text-lg sm:text-xl md:text-4xl text-center">Second Session  </SessionText>
                                
                                <SessionText className="flex justify-center py-2 text-lg sm:text-xl md:text-4xl">1/8</SessionText>
                                
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center text-zinc-50">
                            
                            <SessionSubText className={`flex justify-center mt-4 ${mintInfo?.session === 1 ? 'font-bold' : 'text-sm line-through text-zinc-400'}`}>Presale Price: 0.08 ETH</SessionSubText>
                            <SessionSubText className={`flex justify-center mb-2 ${mintInfo?.session > 1 ? 'font-bold' : 'text-sm text-zinc-400'}`}>Public Price: 0.123 ETH</SessionSubText>
                
                            {allowed >= 0 ? (<SessionSubText className="flex justify-center py-2 text-xs text-amber-500 text-center">A Total of {allowed} NFTs Can be minted from the connected wallet</SessionSubText>) : (<SessionSubText className="flex justify-center py-2 text-xs text-amber-500 text-center">Please connect a Web3 wallet</SessionSubText>)}
                            {free > 0 ? (<SessionSubText className="flex justify-center py-0 text-center italic text-xs text-amber-700">{free} Free NFTs will be minted in addition to the quantity selected</SessionSubText>) : (<></>)}

                            <SessionSubText className="flex justify-center py-2">Quantity</SessionSubText>
                            
                            
                            <SessionSubText className="flex justify-center">
                                <QuantitySelector quantity={firstSecondQuantity} setQuantity={setFirstSecondQuantity} free={free} allowed={allowed} total={firstSecondQuantity+thirdQuantity} />
                            </SessionSubText>
                      
                            <SessionButton onClick={() => setFirstSecondIncluded(p => !p)} className={`text-lg sm:text-xl md:text-2xl flex justify-center py-3 rounded-t-md mt-4 ${firstSecondIncluded ? 'bg-neutral-500' : 'bg-zinc-800'}`} firstSecondIncluded={firstSecondIncluded}>What's Included?</SessionButton>
                
                        </div>




                        {/* Whats included content */}
                        {firstSecondIncluded && 
                        <div className="flex justify-center w-full flex-wrap md:flex-nowrap bg-neutral-500">
                        <div className="w-full md:w-1/2 flex flex-col mx-4" style={{ wordWrap: "break-word"}}>
                        <div className="md:hidden text-white -ml-[10px] " style={{fontFamily: "Work Sans"}}>FIRST SESSION</div>
                            <ul className="list-disc">
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
                            <br/>
                            <div style={{color: "white", fontFamily: "Work Sans"}}>IRL:</div>
                            <ul style={{listStyleType: "disc"}}>
                                <Line>
                                Access to The Order private community for digital and IRL events
                                </Line>
                                <Line>Legal rights to negotiate with The Order of Ink and specific tattoo artist to get the physical tattoo or arrange for commercial rights</Line>
                            </ul>
                            

                            </div>
                            <div className="w-full md:w-1/2 flex flex-col mx-4" style={{ wordWrap: "break-word"}}>
                            <div className="md:hidden text-white -ml-[10px] " style={{fontFamily: "Work Sans"}}>SECOND SESSION</div>
                            <ul className="list-disc" >
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
                            <div className="text-white" style={{fontFamily: "Work Sans"}}>IRL:</div>
                            <ul style={{listStyleType: "disc"}}>
                                <Line>
                                Access to physical tattoo giveaways
                                </Line>
                                <Line>
                                Access to The Order private community for digital and IRL events
                                </Line>
                                <Line>Legal rights to negotiate with The Order of Ink and specific tattoo artist to get the physical tattoo or arrange for commercial rights</Line>
                            </ul>
                            </div>
                            </div>}






                    </div>
                </div>
                <div className="w-full md:w-1/3 px-2 mt-1 md:mt-0">
                <div className={`bg-zinc-800 rounded-md ${thirdIncluded ? 'border border-zinc-50' : ''}`}>
                        <div className="flex p-2">
                            <div className="text-zinc-50 w-full flex flex-col justify-center">
                                <img alt="Session Final" src={SessionThree}/>
                                <SessionText className="flex justify-center py-2 text-lg sm:text-xl md:text-4xl text-center">Final Session</SessionText>
                                <SessionText className="flex justify-center py-2 text-lg sm:text-xl md:text-4xl">1/1</SessionText>
                                <SessionSubText className={`flex justify-center mt-6 ${mintInfo?.session === 1 ? 'font-bold' : 'line-through text-zinc-400 text-sm'}`}>Presale Price: 0.4 ETH</SessionSubText>
                                <SessionSubText className={`flex justify-center ${mintInfo?.session > 1 ? 'font-bold' : 'text-sm text-zinc-400'}`}>Public Price: 0.5 ETH</SessionSubText>
                                {allowed >= 0 ? (<SessionSubText className="flex justify-center py-2 text-xs text-amber-500 text-center">A Total of {allowed} NFTs Can be minted from the connected wallet</SessionSubText>) : (<SessionSubText className="flex justify-center py-2 text-xs text-amber-500 text-center">Please connect a Web3 wallet</SessionSubText>)}
                                <SessionSubText className="flex justify-center py-2">Quantity</SessionSubText>
                                <SessionSubText className="flex justify-center">
                                    <QuantitySelector quantity={thirdQuantity} setQuantity={setThirdQuantity}  allowed={allowed} total={firstSecondQuantity+thirdQuantity} />
                                </SessionSubText>
                                
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center text-zinc-50">
                        <SessionButton onClick={() => setThirdIncluded(p => !p)} className={`text-lg sm:text-xl md:text-2xl flex justify-center py-3 rounded-t-md mt-4 ${thirdIncluded ? 'bg-neutral-500' : 'bg-zinc-800'}`} thirdIncluded={thirdIncluded}>What's Included?</SessionButton>
                        </div>



                        {/* Whats included content */}
                        {thirdIncluded && 
                        <div className="flex justify-center w-full flex-wrap md:flex-nowrap bg-neutral-500">
                        <div className="w-full flex flex-col mx-4" style={{ wordWrap: "break-word", maxWidth: "308px"}}>
                            <ul style={{listStyleType: 'disc'}}>
                            <Line>Genesis Collection Order of Ink digital collectible</Line>
                            <Line>One of a kind super rare 1/1 artwork hand drawn by an artist from our collective</Line>
                            <Line>Exclusive access to all The Order of Ink future drops and artist collaborations</Line>
                            <Line>Free mint for future drops</Line>
                            <Line>Private mint window for future drops</Line>
                            <Line>NFT giveaways and airdrops</Line>
                            </ul>
                            <br/>
                            <div style={{color: "white", fontFamily: "Work Sans"}}>IRL:</div>
                            <ul style={{listStyleType: "disc"}}>
                            <Line>1/1 Physical Art Print</Line>
                            <Line>Access to physical tattoo giveaways</Line>
                            <Line>Access to The Order private community for digital and IRL events</Line>
                            <Line>Legal rights to negotiate with The Order of Ink and specific tattoo artist to get the physical tattoo or arrange for commercial rights</Line>
                            </ul>
            

                            </div>
                            
                            </div>}





                    </div>
                </div>
            </div>



        </>


    )
}

export default TierOneLayout

const TitleCol = styled(Col)`

    font-family: 'Alternate Gothic';
    font-style: normal;
    /* font-weight: 400; */
    font-size: 4rem;
    line-height: 1;
    /* identical to box height */

    text-transform: uppercase;

    color: #EBEAEB;
`

const SubtitleCol = styled(Col)`

    font-family: 'Alternate Gothic';
    font-style: normal;
    /* font-weight: 400; */
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
    /* font-weight: 400; */
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
/* font-weight: 400; */
font-size: 14px;
line-height: 153.8%;
/* or 22px */

color: #FFFFFF;
`

const SessionCardOne = styled(Card)`
background: ${props => props.firstSecondIncluded ? 
    'linear-gradient(to bottom, #1E1E1E 60%, #333333 40%)' : 
    '#1E1E1E'};
border-radius: 5px;

border: ${props => props.firstSecondIncluded ? '1px solid white' : 'none'};
`

const SessionCardTwo = styled(Card)`
background: ${props => props.thirdIncluded ? 
    'linear-gradient(to bottom, #1E1E1E 60%, #333333 40%)' : 
    '#1E1E1E'};
border-radius: 5px;

border: ${props => props.thirdIncluded ? '1px solid white' : 'none'};
`

const SessionText = styled.p`

font-family: 'Alternate Gothic';
font-style: normal;
/* font-weight: 400; */
/* font-size: 1.25rem; */
/* line-height: 1; */
text-transform: uppercase;

color: #FFFFFF;
`

const SessionButton = styled.button`

font-family: 'Alternate Gothic';
font-style: normal;
/* font-weight: 400; */

text-transform: uppercase;
border: none;


color: #FFFFFF;
`

const SessionSubText = styled.div`

font-family: 'Work Sans';
font-style: normal;
/* font-weight: 400; */
/* font-size: 14px; */
line-height: 16px;
text-transform: uppercase;

/* color: #FFFFFF; */
`




const Line = styled.li`
    padding-bottom: 10px; /* increases the space between each line */
    color: white;
    font-family: 'Work Sans';
    font-size: 14px;
`


