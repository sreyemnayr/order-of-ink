import styled from 'styled-components'
import SessionOne from '../../images/FirstSession.png'
import SessionTwo from '../../images/SecondSession.png'
import SessionThree from '../../images/ThirdSession.png'
import QuantitySelector from '../toolsets/QuantitySelector'
import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ArtistOne from '../../images/ArtistOne.png'
import ArtistTwo from '../../images/ArtistTwo.png'
import ArtistThree from '../../images/ArtistThree.png'
import ArtistFour from '../../images/ArtistFour.png'
import ArtistFive from '../../images/ArtistFive.png'
import ArtistSix from '../../images/ArtistSix.png'
import ArtistSeven from '../../images/ArtistSeven.png'
import ArtistEight from '../../images/ArtistEight.png'
import ArtistNine from '../../images/ArtistNine.png'
import ArtistTen from '../../images/ArtistTen.png'
import ArtistEleven from '../../images/ArtistEleven.png'
import ArtistTwelve from '../../images/ArtistTwelve.png'
import ArtistThirteen from '../../images/ArtistThirteen.png'
import ArtistFourteen from '../../images/ArtistFourteen.png'

function TierTwoLayout({extended}) {

    const Artists = [ArtistOne, ArtistTwo, ArtistThree, ArtistFour, ArtistFive, ArtistSix, ArtistSeven, ArtistEight, ArtistNine, ArtistTen, ArtistEleven, ArtistTwelve, ArtistThirteen, ArtistFourteen]

    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageClick = (image) => {
        if (selectedImages.length < 3 || selectedImages.includes(image)) {
        if (selectedImages.includes(image)) {
            const index = selectedImages.indexOf(image);
            const newSelectedImages = [...selectedImages];
            newSelectedImages.splice(index, 1);
            setSelectedImages(newSelectedImages);
        } else {
            setSelectedImages([...selectedImages, image]);
        }
        }
    };

    const handleRandom = () => {
        const randomButtons = [];
        const usedIndexes = [];
    
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * Artists.length);
          if (!usedIndexes.includes(randomIndex)) {
            randomButtons.push(Artists[randomIndex]);
            usedIndexes.push(randomIndex);
          } else {
            i--;
          }
        }
        setSelectedImages(randomButtons);
      };

    const ImageButton = ({ image, onClick, selected }) => {
        return (
          <div
            onClick={() => onClick(image)}
            style={{
              border: selected ? '1px solid white' : 'none',
              borderRadius: '5px',
              width: '257px',
              height: '257px',
              display: 'inline-block',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer',
              marginBottom: selected ? "-2px" : "3px",
              marginLeft: "3px",
              marginRight: "3px",
              
            
              boxSizing: "border-box"
            }}
          />
        );
    }

    

    
    return (
        <SessionLargeBox extended={extended}>
            <StepTwo>Step 2</StepTwo>
            <ArtistPrefs>Select Your Artist Preferences</ArtistPrefs>
            <SessionInfo>We have 14 artists as part of our genesis collection. Our specialized mint process was created to keep the fun of a blind reveal while giving you some options for selecting the type of art you’d like to receive. You will be able to mint specific artists’ work until they are no longer available (minted out). You can also opt out of this decision by selecting “surprise me” below.</SessionInfo>
            <SelectArtists>Select 3-5 artists below to mint their work.</SelectArtists>
            <ArtistSelectionBox>
                {Artists.map((image) => {
                    return (
                       <ImageButton image={image}
                       onClick={handleImageClick}
                       selected={selectedImages.includes(image)}/>
                      )
                })}

                
            </ArtistSelectionBox>
            <SurpriseMe onClick={() => handleRandom()}>SURPRISE ME!</SurpriseMe>
            <SelectForMe>Select Artist For Me</SelectForMe>
            <Disclaimer>*Disclaimer: Our system is set up to give you the maximum information available about which artists’ work are still available. In the event that our site is overloaded or not updating properly, there may be errors that happen. We will do our best to make sure you can mint the artists you want but cannot guarantee actual results due to the fast moving nature of this process.</Disclaimer>

        </SessionLargeBox>
    )
}

export default TierTwoLayout

// 3026px



const SessionLargeBox = styled.div`
    top: ${props => props.extended ? "3026px" : "2744px"};
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 1050px;
    height: 669px;
    position: absolute;
    
`

const ArtistPrefs = styled.div`
    position: absolute;
    width: 380px;
    height: 48px;
    top: 58px;
    left: 0px;
    text-align: left;

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
top: 181px;
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

const StepTwo = styled.div`
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

const SelectArtists = styled.div`
position: absolute;
width: 686px;
height: 26px;
left: 179px;
top: 351px;

font-family: 'Alternate Gothic';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 38px;
text-align: center;
text-transform: uppercase;

color: #FFFFFF;
`

const ArtistSelectionBox = styled.div`

height: 1245px;
top: 459px;
width: 1062px;
position: absolute;
text-align: left

`

const SurpriseMe = styled.button`
position: absolute;
width: 264px;
height: 64px;
left: 660px;
top: 1362px;

cursor: pointer;

background: #333333;
border: 2px solid #FFFFFF;
border-radius: 5px;
font-family: 'Alternate Gothic';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 38px;
text-align: center;
text-transform: uppercase;

color: #FFFFFF;

`

const SelectForMe = styled.div`

position: absolute;
width: 521px;
height: 26px;
left: 531px;
top: 1444px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;
text-transform: uppercase;

color: #FFFFFF;
`

const Disclaimer = styled.div`
position: absolute;
width: 1050px;
height: 26px;
left: 0px;
top: 1578px;

/* Body text */
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 153.8%;
/* or 22px */

color: #FFFFFF;
text-align: left;
`



// const ImageButton = ({ src }) => (
//   <StyledButton onClick={() => handleClick(index)}>
//     <StyledImage src={src} />
//   </StyledButton>
// );