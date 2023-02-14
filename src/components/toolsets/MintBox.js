import styled from 'styled-components'
import MintBoxExample from '../../images/MintBoxExample.png'
import QuantitySelector from './QuantitySelector'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { getCombinedArtists } from '../utils/getCombinedArtists'
import react, {useState, useEffect} from 'react'
import { getTotalPrice } from '../utils/getTotalPrice'

function MintBox({selectedImages, setSelectedImages, firstSecondQuantity, setFirstSecondQuantity, thirdQuantity, setThirdQuantity}) {

    const [combinedArtists, setCombinedArtists] = useState([])

    useEffect(() => {
        const artists = getCombinedArtists()
        console.log(artists)
        setCombinedArtists(artists)
    }, [])

    const handleImageClick = (id) => {
        if (selectedImages.length < 15 || selectedImages.includes(id)) {
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


    return (
        <>
        <SubSubtitleCol className="flex justify-center">
            <FullBox>
                <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 align-items-center p-1">
      
                    <ExampleImage src={MintBoxExample}/>
                    <div className="grid grid-rows-3 grid-cols-2 flex">
                        
                        <div style={{fontSize: "48px"}} className="flex justify-center col-span-2">
                            Mint Details
                        </div>
                        <div style={{fontSize: "26px", paddingLeft: "2rem", marginTop: "-5px"}}>
                            FIRST/SECOND SESSION
                            <p style={{fontSize: "14px", fontFamily: "Work Sans", marginTop: "-15px"}}>0.08 ETH</p>
                        </div>
                        <div className="flex justify-end">
                            <QuantitySelector quantity={firstSecondQuantity} setQuantity={setFirstSecondQuantity}/>
                        </div>
                        <div style={{fontSize: "26px", paddingLeft: "2rem", marginTop: "-5px"}}>
                            FINAL SESSION
                            <p style={{fontSize: "14px", fontFamily: "Work Sans", marginTop: "-15px"}}>0.4 ETH</p>
                        </div>
                        <div className="flex justify-end">
                            <QuantitySelector quantity={thirdQuantity} setQuantity={setThirdQuantity}/>
                        </div>
                        <div style={{fontSize: "26px", paddingLeft: "2rem", marginTop: "-5px"}}>
                            ARTISTS
                        </div>
                        
                        <div className="flex justify-center lg:col-span-2 w-full">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex w-full gap-2 pl-[2rem]">
                            {combinedArtists.map((artist) => {
                                return (
                                    <ArtistButton className={`w-full p-1 bg-zinc-800 text-zinc-50 ring-1 ring-zinc-50 ${
                                        selectedImages.includes(artist.id) ? 'opacity-100' : 'opacity-25'
                                    }`} onClick={() => handleImageClick(artist.id)}>{artist.name}</ArtistButton>
                                    
                                    
                                )
                            })}
                            </div>
                        </div>
                        <br/>
                        <div className="flex justify-center col-span-2 pt-4">
                            <p style={{fontSize: "24px", fontFamily: "Work Sans", marginBottom: "10px"}}>TOTAL</p>
                        </div>
                        <div style={{fontSize: "64px"}} className="flex justify-center col-span-2">
                            <p>{getTotalPrice(firstSecondQuantity, thirdQuantity)} ETH</p>
                        </div>
                        <br/>
                        <div className="flex justify-center col-span-2 pt-8">
                            <MintButton>Mint</MintButton>
                        </div>
                        
    
    

                    </div>
                    
            
                </div>
            </FullBox>
        </SubSubtitleCol>
        
        </>
    )
}

export default MintBox;


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



const ArtistButton = styled.button`

border: none;
border-radius: 5px;


font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
/* identical to box height */
text-align: center;
text-transform: uppercase;


`

const ArtistButtonSelected = styled.button`
background: #111111;
border: 1px solid white;
border-radius: 5px;

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

padding: 2rem;


background: #333333;

`

const ExampleImage = styled.img`
border-radius: 5px;

`



const MintButton = styled.button`

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

