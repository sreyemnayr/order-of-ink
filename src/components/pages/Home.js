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
import Carousel from '../layouts/CarouselLayout'
import HeaderMobile from '../../components/navigation/HeaderMobile'
import CarouselMobile from '../layouts/CarouselLayoutMobile';


const Home = () => {
    //Selected Images refer to the artists that are selected by the user. Both Tier 2 and 3 layout uses this to determine which artists are highlighted with white border
    const [selectedImages, setSelectedImages] = useState([]);
    // firstSecondQuantity is the quantity of NFTs the user wants to mint for the 1st and 2nd session
    const [firstSecondQuantity, setFirstSecondQuantity] = useState(0)
    // thirdQuantity is the quantity of NFTs the user wants to mint for the Final session
    const [thirdQuantity, setThirdQuantity] = useState(0)
    // Sold Out images will be used by Ryan to determine which artists are sold out. Look at getCombinedArtists in utils, which generates an array of objects that associate
    // the artist with an ID and image. Use the ID to plug into soldOutImages which will identify in TierTwoLayout which images need to be overlayed with "SOLD OUT" 
    const [soldOutImages, setSoldOutImages] = useState([])

    // Check to see if desktop or mobile

    const [width, setWindowWidth] = useState()

    useEffect(() => {

        updateDimensions();

        window.addEventListener("resize", updateDimensions);

        return () => window.removeEventListener("resize",updateDimensions);

    }, [])

    const updateDimensions = () => {
        const innerWidth = window.innerWidth
        setWindowWidth(innerWidth)
        console.log(innerWidth)
    }

    const responsive = {
        showTopNavMenu: width > 1073
    }

    ///////////////////////////////////


    return (
        <>
        {
        (responsive.showTopNavMenu) ? (
            <PageLayout>
                <Header />
                <Carousel/>
                <LargeContainer>
                    <TierOneLayout firstSecondQuantity={firstSecondQuantity} setFirstSecondQuantity={setFirstSecondQuantity} thirdQuantity={thirdQuantity} setThirdQuantity={setThirdQuantity} responsive={responsive.showTopNavMenu}/>
                    <TierTwoLayout selectedImages={selectedImages} setSelectedImages={setSelectedImages} soldOutImages={soldOutImages}/>
                    <TierThreeLayout selectedImages={selectedImages} setSelectedImages={setSelectedImages} firstSecondQuantity={firstSecondQuantity} setFirstSecondQuantity={setFirstSecondQuantity} thirdQuantity={thirdQuantity} setThirdQuantity={setThirdQuantity} responsive={responsive.showTopNavMenu}/>
                </LargeContainer>
                <Footer/>
            </PageLayout>

        ) : (
            <PageLayoutMobile>
                <HeaderMobile />
                <CarouselMobile/>
                <LargeContainerMobile>
                    <TierOneLayoutMobile firstSecondQuantity={firstSecondQuantity} setFirstSecondQuantity={setFirstSecondQuantity} thirdQuantity={thirdQuantity} setThirdQuantity={setThirdQuantity} responsive={responsive.showTopNavMenu}/>
                    <TierTwoLayoutMobile selectedImages={selectedImages} setSelectedImages={setSelectedImages} soldOutImages={soldOutImages}/>
                    <TierThreeLayout selectedImages={selectedImages} setSelectedImages={setSelectedImages} firstSecondQuantity={firstSecondQuantity} setFirstSecondQuantity={setFirstSecondQuantity} thirdQuantity={thirdQuantity} setThirdQuantity={setThirdQuantity} responsive={responsive.showTopNavMenu}/>
                </LargeContainerMobile>
                <FooterMobile/>
            </PageLayoutMobile>
        )
    }
    </>
        
    );
};

export default Home;

const PageLayout = styled.div`
width: 100%;
background-color: black;
`
const PageLayoutMobile = styled.div`
    padding: 0px;

    position: absolute;
    width: 100vw;

    /* lilac */

    background-color: black;
    
`;


const LargeContainer = styled(Container)`
max-width: 1200px; margin: 3rem auto;
`

const LargeContainerMobile = styled(Container)`
width: 100vw; 
margin: 3rem auto;
padding: 2rem;
`