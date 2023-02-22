import styled from 'styled-components'
import MintBoxExample from '../../images/sneakpeek_gif.gif'
import QuantitySelector from './QuantitySelector'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { getCombinedArtists } from '../utils/getCombinedArtists'
import react, {useState, useEffect} from 'react'
import { formatUnits } from 'ethers/lib/utils.js';
import { getTotalPrice } from '../utils/getTotalPrice'
import { saveAddress } from "@sharemint/sdk";

import sessionOneKeys from '../../data/session_1_mintkeys.json'

import { useAccount, useContract, useContractReads, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import inkABI from '../../data/OrderOfInk.json'

const contract = {
    address: '0x7B67E3661942FDA6C1D73bBe99856B6a11CdD2EE',
    abi: inkABI,
  }

function MintBox({selectedImages, setSelectedImages, firstSecondQuantity, setFirstSecondQuantity, thirdQuantity, setThirdQuantity, free, allowed, mintInfo, packedChoices, paused}) {

    const [combinedArtists, setCombinedArtists] = useState([])
    const { address, isConnected } = useAccount()
    

    const { config } = usePrepareContractWrite({
        ...contract,
        functionName: 'getInked',
        args: [
            sessionOneKeys?.[address?.toLowerCase()]?.[0],
            sessionOneKeys?.[address?.toLowerCase()]?.[1],
            firstSecondQuantity,
            thirdQuantity,
            packedChoices,
        ],
        overrides: {
            value: mintInfo.blackPrice.mul(firstSecondQuantity).add(mintInfo.goldPrice.mul(thirdQuantity))
        }
    })

    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [txHash, setTxHash] = useState(null)

    const {
        data:txData,
        write,
        isLoading:txIsLoading,
        isError:txIsError,
        error:txError,
        isSuccess:txIsSuccess,
    } = useContractWrite({
        ...config,
        onSuccess(data) {
            setTxHash(data.hash)
        },
        onError(error) {
            setErrorMessage(error.message)
        }
    })

    const { data: pendingTxData, status: txStatus} = useWaitForTransaction({
        hash: txData?.hash,
        onError(error) {
            console.log(error)
            setErrorMessage(error.message)
        },
        onSuccess(data){
            saveAddress({ slug: "the-order-of-ink", transactionHash: data.hash });
        }
    })



    useEffect(()=>{
        console.log(txData);
    }, [txData]);

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
                            <p style={{fontSize: "14px", fontFamily: "Work Sans", marginTop: "-15px"}}>{formatUnits(mintInfo.blackPrice, "ether")} ETH</p>
                        </div>
                        <div className="flex justify-end">
                            <QuantitySelector free={free} quantity={firstSecondQuantity} setQuantity={setFirstSecondQuantity} allowed={allowed} total={firstSecondQuantity+thirdQuantity}  />
                        </div>
                        <div style={{fontSize: "26px", paddingLeft: "2rem", marginTop: "-5px"}}>
                            FINAL SESSION
                            <p style={{fontSize: "14px", fontFamily: "Work Sans", marginTop: "-15px"}}>{formatUnits(mintInfo.goldPrice, "ether")} ETH</p>
                        </div>
                        <div className="flex justify-end">
                            <QuantitySelector quantity={thirdQuantity} setQuantity={setThirdQuantity} allowed={allowed} total={firstSecondQuantity+thirdQuantity} />
                        </div>
                        <div style={{fontSize: "26px", paddingLeft: "2rem", marginTop: "-5px"}}>
                            ARTISTS
                        </div>
                        
                        <div className="flex justify-center lg:col-span-2 w-full">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex w-full gap-2 pl-[2rem]">
                            {combinedArtists.map((artist) => {
                                return (
                                    <ArtistButton key={`artist_light_${artist.id}`} className={`w-full p-1 bg-zinc-800 text-zinc-50 ring-1 ring-zinc-50 ${
                                        selectedImages.includes(artist.id) ? 'opacity-100' : 'opacity-25'
                                    }`} onClick={() => handleImageClick(artist.id)}>{artist.name}</ArtistButton>
                                    
                                    
                                )
                            })}
                            </div>
                        </div>
                        
                        <div className="flex justify-center col-span-2 pt-4">
                            <p style={{fontSize: "24px", fontFamily: "Work Sans", marginBottom: "10px"}}>TOTAL: {firstSecondQuantity + thirdQuantity + free} NFTs</p>
                        </div>
                        <div style={{fontSize: "64px"}} className="flex justify-center col-span-2">
                            <p>{formatUnits(mintInfo.blackPrice.mul(firstSecondQuantity).add(mintInfo.goldPrice.mul(thirdQuantity)), "ether")} ETH</p> 
                        </div>
                        <div className="flex justify-center col-span-2 pt-4">
                            {paused ? 
                                (<div className='text-zinc-50'>Minting is Currently Paused</div>) :
                                selectedImages.length < 3 ? (<div className='text-zinc-50'>Please select 3+ Artists</div>) :
                                (<MintButton onClick={()=> {write?.()}}>Mint</MintButton>)
                            }
                            {txStatus === "loading" && (
                            <div className='text-zinc-50'>Your mint is awaiting verification! <a target="_blank" rel="noreferrer" href={`https://etherscan.io/tx/${txHash}`}>View on Etherscan</a></div>
                            )}
                            {txStatus === "error" && (
                                <div className='text-zinc-50'>ERROR: {errorMessage}</div>
                            )}
                            {txStatus === "success" && (
                                <div className='text-zinc-50'>SUCCESS! <a target="_blank" rel="noreferrer" href={`https://etherscan.io/tx/${txHash}`}>View on Etherscan</a></div>
                            )}
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

