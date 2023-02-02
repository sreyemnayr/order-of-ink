import styled from 'styled-components'
import SessionOne from '../../images/FirstSession.png'
import SessionTwo from '../../images/SecondSession.png'
import SessionThree from '../../images/ThirdSession.png'
import QuantitySelector from '../toolsets/QuantitySelector'
import React, {useState, useEffect} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function TierOneLayout({extended, setExtended}) {

    const [firstSecondIncluded, setFirstSecondIncluded] = useState(false)
    const [thirdIncluded, setThirdIncluded] = useState(false)

    useEffect(() => {
        changeExtended()
    }, [firstSecondIncluded, thirdIncluded])



    const changeExtended = () => {
        if (firstSecondIncluded || thirdIncluded) {
            setExtended(true)
        } else {
            setExtended(false)
        }
    }

    return (
        <SessionLargeBox>
            <HowToMint>How To Mint</HowToMint>
            <StepOne>Step 1</StepOne>
            <BookYourSession>Choose Your Tier</BookYourSession>
            <SessionInfo>Our NFT tattoo designs are divided into sessions -- like tattoo sessions. You can choose if you’d like to mint First or Second Sessions* consisting of editions of our artwork or Final Sessions which are 1/1s. When you choose to mint a First/Second Session (which are both priced the same), you will be randomly assigned one of them.</SessionInfo>
            <FirstSecondSessionBox firstSecondIncluded={firstSecondIncluded}>
                <FirstSession src={SessionOne}/>
                <SecondSession src={SessionTwo}/>
            </FirstSecondSessionBox>
            <ThirdSessionBox thirdIncluded={thirdIncluded}>
                <ThirdSession src={SessionThree}/>
            </ThirdSessionBox>
            <FirstSessionText>1/15 "First Session"</FirstSessionText>
            <SecondSessionText>1/8 "Second Session"</SecondSessionText>
            <ThirdSessionText>1/1 "Final Session"</ThirdSessionText>
            <FirstSecondSessionPrice>Presale Price: 0.08 ETH Public Price: 0.123 ETH</FirstSecondSessionPrice>
            <ThirdSessionPrice>Presale Price: 0.4 ETH Public Price: 0.5 ETH</ThirdSessionPrice>
            <FirstSecondQuantity>Quantity</FirstSecondQuantity>
            <ThirdQuantity>Quantity</ThirdQuantity>
            <div style={{position: "absolute", top: "943px", left: "216px"}}>
                <QuantitySelector/>
            </div>
            <div style={{position: "absolute", top: "943px", right: "38.38px"}}>
                <QuantitySelector/>
            </div>
            <FirstSecondWhatsIncluded onClick={() => setFirstSecondIncluded(firstSecondIncluded => !firstSecondIncluded)}>What's Included?</FirstSecondWhatsIncluded>
            {firstSecondIncluded && 
            <>
            <FirstSecondUnderline/>
            <FirstSecondIncludedText>
                    <Col md={6} style={{ wordWrap: "break-word", maxWidth: "331px", textAlign: "left"}}>
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
                    <br/>
                    <br/>
                    IRL:
                    <ul style={{listStyleType: "disc"}}>
                        <Line>
                        Access to The Order private community for digital and IRL events
                        </Line>
                    </ul>
                    

                    </Col>
                    <Col md={6} style={{ wordWrap: "break-word", maxWidth: "308px", textAlign: "left" }}>
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
                    IRL:
                    <ul style={{listStyleType: "disc"}}>
                        <Line>
                        Access to physical tattoo giveaways
                        </Line>
                        <Line>
                        Access to The Order private community for digital and IRL events
                        </Line>
                    </ul>
                    </Col>

            </FirstSecondIncludedText>
            </>}
            <ThirdWhatsIncluded onClick={() => setThirdIncluded(thirdIncluded => !thirdIncluded)}>What's Included?</ThirdWhatsIncluded>
            {thirdIncluded && 
            <>
            <ThirdUnderline/>
            <ThirdIncludedText>
                    <Col md={12} style={{ wordWrap: "break-word", maxWidth: "331px", textAlign: "left"}}>
                    <ul style={{listStyleType: 'disc'}}>
                        <Line>
                        Genesis Collection Order of Ink digital collectible
                        </Line>
                        <Line>
                        One of a kind super rare 1/1 artwork hand drawn by an artist from our collective
                        </Line>
                        <Line>
                        Exclusive access to all The Order of Ink future drops and artist collaborations
                        </Line>
                        <Line>Free mint for future drops</Line>
                        <Line>Private mint window for future drops</Line>
                        <Line>NFT giveaways and airdrops</Line>
        
                    </ul>
                    <div style={{marginLeft: "18px"}}>IRL:</div>
                    <ul style={{listStyleType: "disc"}}>
                        <Line>
                        1/1 Physical Art Print
                        </Line>
                        <Line>
                        Access to physical tattoo giveaways
                        </Line>
                        <Line>
                        Access to The Order private community for digital and IRL events
                        </Line>
                    </ul>
                    

                    </Col>
                    
            </ThirdIncludedText>
            </>}


        </SessionLargeBox>
    )
}

export default TierOneLayout

const Line = styled.li`
    padding-bottom: 10px; /* increases the space between each line */
`

const FirstSecondUnderline = styled.div`
position: absolute;
width: 135px;
height: 0px;
left: 281px;
top: 1054px;

border: 1px solid #EBEAEB;
`

const ThirdUnderline = styled.div`
position: absolute;
width: 135px;
height: 0px;
right: 104px;
top: 1054px;

border: 1px solid #EBEAEB;
`

const FirstSecondIncludedText = styled.div`
    height: 303px;
    width: 662px;
    top: 1061px;
    left: 16px;
    position: absolute;
    display: flex;
    flex-direction: row;
    font-family: Work Sans;
    color: white;
    font-size: 14px;
    line-height: 16px;
`


const ThirdIncludedText = styled.div`
    height: 303px;
    width: 331px;
    top: 1061px;
    right: 16px;
    position: absolute;
    display: flex;
    flex-direction: row;
    font-family: Work Sans;
    color: white;
    font-size: 14px;
    line-height: 16px;
`


const SessionLargeBox = styled.div`
    top: 1514px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 1050px;
    height: 669px;
    position: absolute;
    
`

const FirstSecondSessionBox = styled.div`
    position: absolute;
    width: 697px;
    height: ${props => props.firstSecondIncluded ? '1021px' : '669px'};
    
    
    top: 403px;
    left: 0px;
    background: ${props => props.firstSecondIncluded ? 
        'linear-gradient(to bottom, #1E1E1E 60%, #333333 40%)' : 
        '#1E1E1E'};
    border-radius: 5px;

    border: ${props => props.firstSecondIncluded ? '1px solid white' : 'none'};


`

const FirstSession = styled.img`
position: absolute;
width: 330px;
height: 330px;
left: 13px;
top: 7px;

border-radius: 5px;
`



const SecondSession = styled.img`
position: absolute;
width: 330px;
height: 330px;
right: 13px;
top: 7px;

border-radius: 5px;
`

const ThirdSessionBox = styled.div`
position: absolute;
width: 343px;
height: 669px;
top: 403px;
right: 0px;
height: ${props => props.thirdIncluded ? '1021px' : '669px'};

background: ${props => props.thirdIncluded ? 
    'linear-gradient(to bottom, #1E1E1E 60%, #333333 40%)' : 
    '#1E1E1E'};

border-radius: 5px;

border: ${props => props.thirdIncluded ? '1px solid white' : 'none'}
`

const ThirdSession = styled.img`
position: absolute;
width: 330px;
height: 330px;
left: 7px;
top: 7px;

border-radius: 5px;
`

const HowToMint = styled.div`
    position: absolute;
    width: 274px;
    height: 76px;
    left: 0px;
    top: 0px;

    font-family: 'Alternate Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 63px;
    line-height: 76px;
    /* identical to box height */

    text-transform: uppercase;

    color: #EBEAEB;
`

const StepOne = styled.div`
    position: absolute;
    width: 106px;
    height: 58px;

    top: 131px;
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

const BookYourSession = styled.div`
    position: absolute;
    width: 310px;
    height: 48px;
    top: 189px;
    left: 0px;

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

const SessionInfo = styled.div`
position: absolute;
width: 520px;
height: 150px;
left: 0px;
top: 245px;
text-align: left;

/* Body text */
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 153.8%;
/* or 22px */

color: #FFFFFF;
`

const FirstSessionText = styled.div`
position: absolute;
width: 231px;
height: 38px;
left: 68px;
top: 777px;

font-family: 'Alternate Gothic';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 38px;
text-transform: uppercase;

color: #FFFFFF;
`

const SecondSessionText = styled.div`
position: absolute;
width: 251px;
height: 38px;
right: 406px;
top: 777px;

font-family: 'Alternate Gothic';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 38px;
text-transform: uppercase;

color: #FFFFFF;
`

const ThirdSessionText = styled.div`
position: absolute;
width: 251px;
height: 38px;
right: 46px;
top: 777px;

font-family: 'Alternate Gothic';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 38px;
text-transform: uppercase;

color: #FFFFFF;
`

const FirstSecondSessionPrice = styled.div`
position: absolute;
width: 178px;
height: 32px;
left: 260px;
top: 836px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;
text-transform: uppercase;

color: #FFFFFF;
`

const ThirdSessionPrice = styled.div`
position: absolute;
width: 178px;
height: 32px;
right: 84px;
top: 836px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;
text-transform: uppercase;

color: #FFFFFF;
`

const FirstSecondQuantity = styled.div`
position: absolute;
width: 69px;
height: 16px;
left: 314px;
top: 914px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;
text-transform: uppercase;

color: #FFFFFF;
`

const ThirdQuantity = styled.div`
position: absolute;
width: 69px;
height: 16px;
right: 137px;
top: 914px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;
text-transform: uppercase;

color: #FFFFFF;
`

const FirstSecondWhatsIncluded = styled.button`
position: absolute;
width: 160px;
height: 25px;
left: 270px;
top: 1025px;

background: none;
color: white;
border: none;

font-family: 'Alternate Gothic';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 25px;
text-align: center;
text-transform: uppercase;
cursor: pointer;

color: #FFFFFF;
`

const ThirdWhatsIncluded = styled.button`
position: absolute;
width: 160px;
height: 25px;
right: 90px;
top: 1025px;

background: none;
color: white;
border: none;

font-family: 'Alternate Gothic';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 25px;
text-align: center;
text-transform: uppercase;
cursor: pointer;


color: #FFFFFF;
`