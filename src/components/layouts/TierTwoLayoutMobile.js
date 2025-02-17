import styled from 'styled-components'
import SessionOne from '../../images/FirstSession.png'
import SessionTwo from '../../images/SecondSession.png'
import SessionThree from '../../images/ThirdSession.png'
import QuantitySelector from '../toolsets/QuantitySelector'
import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { handleImageClick } from '../../hooks/handleImageClick'
import { getCombinedArtists } from '../utils/getCombinedArtists'



function TierTwoLayoutMobile({selectedImages, setSelectedImages, soldOutImages}) {

    const [combinedArtists, setCombinedArtists] = useState([])

    useEffect(() => {
        const artists = getCombinedArtists()
        console.log(artists)
        setCombinedArtists(artists)
    }, [])


    const handleImageClick = (id) => {
        if (selectedImages.length < 5 || selectedImages.includes(id)) {
        if (selectedImages.includes(id)) {
            const index = selectedImages.indexOf(id);
            const newSelectedImages = [...selectedImages];
            newSelectedImages.splice(index, 1);
            setSelectedImages(newSelectedImages);
        } else {
            setSelectedImages([...selectedImages, id]);
        }
        }
    };

    const handleRandom = () => {
        const randomButtons = [];
        const usedIndexes = [];
    
        for (let i = 0; i < 5; i++) {
          const randomIndex = Math.floor(Math.random() * 14);
          if (!usedIndexes.includes(randomIndex)) {
            randomButtons.push(randomIndex);
            usedIndexes.push(randomIndex);
          } else {
            i--;
          }
        }
        setSelectedImages(randomButtons);
      };

        const ImageButtonMobile = ({ image, id, onClick, selected, soldOut }) => {
            return (
              <div
                onClick={() => onClick(id)}
                className="h-[45vw] sm:h-[30vw] md:h-[22vw]"
                style={{
                  border: selected ? '1px solid white' : 'none',
                  borderRadius: '5px',
                  // width:  '192px',
                  // height: '192px',
                  width: '100%',
                  // height: '192px',
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  cursor: 'pointer',
         
                  boxSizing: "border-box"
                }}
              >
                  {soldOut && <div class="w-full h-full flex justify-center items-center backdrop-brightness-50">
                        <span class="text-white text-2xl w-1/2 text-center" style={{fontFamily: "Alternate Gothic"}}>SOLD OUT</span>
                </div>}
              </div>
            );
    }

    

    
    return (
        <>
            <br/>
            <br/>
            <br/>
            <Row>
                <SubtitleCol>
                    Step 2
                </SubtitleCol>
            </Row>
            <br/>
            <Row>
                <BookYourSessionCol>
                    Select your Artist <p>Preferences</p>
                </BookYourSessionCol>
            </Row>
            <br/>
            <Row>
                <SessionInfoCol className="sm:w-full md:w-1/2">
                We have 14 artists as part of our genesis collection. Our specialized mint process was created to keep the fun of a blind reveal while giving you some options for selecting the type of art you’d like to receive. You will be able to mint specific artists’ work until they are no longer available (minted out). You can also opt out of this decision by selecting “surprise me” below.
                
                </SessionInfoCol>
            </Row>
            <br/>
            <br/>
            <SubSubtitleCol className="flex justify-center">Select 3-5 artists below to mint their work.*</SubSubtitleCol>
            <br/>
            <br/>
            <div className="w-full" >
                <div className="grid grid-rows-9 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center flex gap-2">
                {combinedArtists.map((artist) => {
                        return (
                        <ImageButtonMobile image={artist.image}
                        id={artist.id}
                        onClick={handleImageClick}
                        selected={selectedImages.includes(artist.id)}
                        soldOut={soldOutImages.includes(artist.id)}/>
                        )
                    })}
                <div className="col-span-2 row-span-1 flex items-center justify-center mt-7">
                    <div className="grid grid-rows-2 grid-cols-1">
                    <SurpriseMe onClick={() => handleRandom()}>SURPRISE ME!</SurpriseMe>
                    <SelectForMe className="flex justify-center py-2">Select Artist for Me</SelectForMe>
                    
                    </div>
                    {/* <SelectForMe>Select Artist For Me</SelectForMe> */}
                </div>
                <Disclaimer className="col-span-2 row-span-1 flex py-6">Disclaimer: Our system is set up to give you the maximum information available about which artists’ work are still available. In the event that our site is overloaded or not updating properly, there may be errors that happen. We will do our best to make sure you can mint the artists you want but cannot guarantee actual results due to the fast moving nature of this process</Disclaimer>
                </div>
            </div>
            
            

        </>
    )
}

export default TierTwoLayoutMobile

// 3026px



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

const SubSubtitleCol = styled(Col)`

    font-family: 'Alternate Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;

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




const SurpriseMe = styled.button`
width: 346px;
height: 64px;


cursor: pointer;

background: #333333;
border: 2px solid #FFFFFF;
border-radius: 5px;
font-family: 'Alternate Gothic';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 38px;

text-transform: uppercase;

color: #FFFFFF;

`

const SelectForMe = styled.div`

font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

text-transform: uppercase;

color: #FFFFFF;
`

const Disclaimer = styled.div`



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

