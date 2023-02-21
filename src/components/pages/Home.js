import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import TierOneLayout from '../../components/layouts/TierOneLayout';
import TierOneLayoutMobile from '../../components/layouts/TierOneLayoutMobile';
import TierTwoLayout from '../../components/layouts/TierTwoLayout';
import TierTwoLayoutMobile from '../../components/layouts/TierTwoLayoutMobile'
import TierThreeLayout from '../../components/layouts/TierThreeLayout';
import Container from 'react-bootstrap/Container';
import Header from '../../components/navigation/Header';
import Footer from '../../components/navigation/Footer'
import FooterMobile from '../../components/navigation/FooterMobile'
// import Carousel from '../layouts/CarouselLayout'
import { Carousel } from '../toolsets/Carousel'
import HeaderMobile from '../../components/navigation/HeaderMobile'
import CarouselMobile from '../layouts/CarouselLayoutMobile';
import { pack_choices } from '../../components/utils/bitpack';

import { parseUnits } from 'ethers/lib/utils.js';

import { useAccount, useContract, useContractReads, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import inkABI from '../../data/OrderOfInk.json'

import sessionOneKeys from '../../data/session_1_mintkeys.json'


const Home = () => {
    //Selected Images refer to the artists that are selected by the user. Both Tier 2 and 3 layout uses this to determine which artists are highlighted with white border
    const [selectedImages, setSelectedImages] = useState([]);
    const [packedChoices, setPackedChoices] = useState(0);
    // firstSecondQuantity is the quantity of NFTs the user wants to mint for the 1st and 2nd session
    const [firstSecondQuantity, setFirstSecondQuantity] = useState(0)
    // thirdQuantity is the quantity of NFTs the user wants to mint for the Final session
    const [thirdQuantity, setThirdQuantity] = useState(0)
    // Sold Out images will be used by Ryan to determine which artists are sold out. Look at getCombinedArtists in utils, which generates an array of objects that associate
    // the artist with an ID and image. Use the ID to plug into soldOutImages which will identify in TierTwoLayout which images need to be overlayed with "SOLD OUT" 
    const [soldOutImages, setSoldOutImages] = useState([])

    const [mintInfo, setMintInfo] = useState({goldRemaining: 0, blackRemaining: 0, goldPrice: parseUnits("0.5", "ether"), blackPrice: parseUnits("0.123", "ether"), session:1})
    const [minted, setMinted] = useState(0)
    const [freeMinted, setFreeMinted] = useState(0)
    const [allowed, setAllowed] = useState(0)
    const [free, setFree] = useState(0)
    

    const { address, isConnected } = useAccount()

    const contract = {
        address: '0x7B67E3661942FDA6C1D73bBe99856B6a11CdD2EE',
        abi: inkABI,
      }
    
    const { data, isError, isLoading } = useContractReads({
    contracts: [
        {
        ...contract,
        functionName: 'mintInfo',
        args: []
        },
        {
        ...contract,
        functionName: 'balanceOf',
        args: [address]
        },
        {
        ...contract,
        functionName: 'getAux',
        args: [address]
        },
    ],
    enabled: isConnected,
    })

    

    useEffect(()=>{
        console.log(data)
        const [goldRemaining, blackRemaining, goldPrice, blackPrice, session] = data?.[0] || {goldRemaining: 0, blackRemaining: 0, goldPrice: 0.5, blackPrice: 0.5, session:1}
        setMintInfo({goldRemaining: goldRemaining.toNumber(), blackRemaining: blackRemaining.toNumber(), goldPrice, blackPrice, session: session.toNumber()})
        setMinted(data?.[1] || 0)
        setFreeMinted(data?.[2] || 0)
    }, [data])

    useEffect(() => {
        setFree((sessionOneKeys?.[address.toLowerCase()]?.[1]?.[1] || 0) - freeMinted)
        setAllowed(sessionOneKeys?.[address.toLowerCase()]?.[1]?.[2] - minted || 0)
    }, [address, freeMinted, minted])

    // Check to see if desktop or mobile

    const [width, setWindowWidth] = useState()

    useEffect(() => {

        updateDimensions();

        window.addEventListener("resize", updateDimensions);

        return () => window.removeEventListener("resize",updateDimensions);

    }, [])

    useEffect(() => {
        console.log(selectedImages);
        let _packedChoices = pack_choices(selectedImages);
        setPackedChoices(_packedChoices < 32766 ? _packedChoices : 0);
        
    }, [selectedImages])

    useEffect(() => {
        console.log(packedChoices);  
    }, [packedChoices])

    const updateDimensions = () => {
        const innerWidth = window.innerWidth
        setWindowWidth(innerWidth)
        console.log(innerWidth)
    }

    const responsive = {
        showTopNavMenu: width > 1023
    }

    ///////////////////////////////////


    return (
        <PageLayout>
            {responsive.showTopNavMenu ? <Header/> : <HeaderMobile/>}
            <Carousel/>
            <LargeContainer>
            <TierOneLayout free={free} allowed={allowed} mintInfo={mintInfo} firstSecondQuantity={firstSecondQuantity} setFirstSecondQuantity={setFirstSecondQuantity} thirdQuantity={thirdQuantity} setThirdQuantity={setThirdQuantity}/>
            <TierTwoLayout selectedImages={selectedImages} setSelectedImages={setSelectedImages} soldOutImages={soldOutImages}/>
        <TierThreeLayout packedChoices={packedChoices} mintInfo={mintInfo} free={free} allowed={allowed} selectedImages={selectedImages} setSelectedImages={setSelectedImages} firstSecondQuantity={firstSecondQuantity} setFirstSecondQuantity={setFirstSecondQuantity} thirdQuantity={thirdQuantity} setThirdQuantity={setThirdQuantity}/>
        </LargeContainer>
        {responsive.showTopNavMenu ? <Footer/> : <FooterMobile/>}
    </PageLayout>
        
    );
};

export default Home;

const PageLayout = styled.div`
width: 100%;
background-color: black;
`


const LargeContainer = styled(Container)`
max-width: 900px; 
margin: 3rem auto;
padding: 1rem;
width: 80vw;
`
