import styled from 'styled-components'
import MintBoxExample from '../../images/MintBoxExample.png'
import QuantitySelectorSmall from './QuantitySelectorSmall'

function MintBox() {

    const Artists = ['Architex', 'Esteban', 'Neat Art', 'Johanna', 'Esteban', 'Architex', 'Esteban', 'Neat Art', 'Johanna', 'Esteban', 'Architex', 'Esteban', 'Neat Art', 'Johanna', 'Esteban']

    return (
        <FullBox>
            <ExampleImage src={MintBoxExample}/>
            <MintDetails>Mint Details</MintDetails>
            <SelectorOne>
                <QuantitySelectorSmall/>
            </SelectorOne>
            <SelectorTwo>
                <QuantitySelectorSmall/>
            </SelectorTwo>
            <FirstSecondSession>First/Second Session</FirstSecondSession>
            <FinalSession>Final Session</FinalSession>
            <ArtistLabel>Artists</ArtistLabel>
            <ArtistBox>
                {Artists.map((artist) => {
                    return (
                        <ArtistButton>{artist}</ArtistButton>
                    )
                })}
            </ArtistBox>
            <Total>Total</Total>
            <TotalAmount> ETH</TotalAmount>
            <MintButton>Mint</MintButton>
            


        </FullBox>
    )
}

export default MintBox;


const ArtistBox = styled.div`
height: 77px;
width: 436px;
top: 278px;
left: 576px;
position: absolute;

`

const ArtistButton = styled.button`
background: #111111;
border: none;
border-radius: 5px;
height: 21px;
width: 81px;
margin: 3px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
/* identical to box height */
text-align: center;
text-transform: uppercase;

color: #FFFFFF;
`

const FullBox = styled.div`

position: absolute;
width: 1050px;
height: 573px;
left: 0px;
top: 157px;

background: #333333;

`

const ExampleImage = styled.img`
position: absolute;
top: 28px;
left: 25px;
border-radius: 5px;
height: 517px;
width: 517px;
`

const MintDetails = styled.div`
position: absolute;
right: 137px;
top: 33px;
height: 60px;
width: 224px;

font-family: 'Alternate Gothic';
font-style: normal;
font-weight: 400;
font-size: 50px;
line-height: 60px;
/* identical to box height */
text-align: center;
text-transform: uppercase;

color: #EBEAEB;
`

const SelectorOne = styled.div`
top: 112px;
right: 25px;
position: absolute;
`

const SelectorTwo = styled.div`
top: 171px;
right: 25px;
position: absolute;
`

const FirstSecondSession = styled.div`
font-family: 'Alternate Gothic';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 31px;
text-transform: uppercase;

color: #FFFFFF;

position: absolute;
top: 112px;
left: 576px;
`

const FinalSession = styled.div`
font-family: 'Alternate Gothic';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 31px;
text-transform: uppercase;

color: #FFFFFF;

position: absolute;
top: 171px;
left: 576px;
`

const ArtistLabel = styled.div`
font-family: 'Alternate Gothic';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 31px;
text-transform: uppercase;

color: #FFFFFF;

position: absolute;
top: 230px;
left: 576px;
`

const Total = styled.div`
position: absolute;
left: 764px;
top: 383px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
text-align: center;
text-transform: uppercase;

color: #EBEAEB;
`

const TotalAmount = styled.div`
position: absolute;
width: 116px;
height: 77px;
left: 743px;
top: 416px;

font-family: 'Alternate Gothic';
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 77px;
/* identical to box height */
text-align: center;
text-transform: uppercase;

color: #FFFFFF;
`

const MintButton = styled.button`

position: absolute;
left: 673px;
top: 493px;
height: 57px;
width: 255px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 38px;
/* identical to box height */
text-align: center;
text-transform: uppercase;
cursor: pointer;

color: #111111;

background: #D9D9D9;
border-radius: 5px;
`

