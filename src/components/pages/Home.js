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
import Carousel from '../layouts/CarouselLayout'
import HeaderMobile from '../../components/navigation/HeaderMobile'
import CarouselMobile from '../layouts/CarouselLayoutMobile';


const Home = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [firstSecondQuantity, setFirstSecondQuantity] = useState(0)
    const [thirdQuantity, setThirdQuantity] = useState(0)

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


    return (
        <>
        {
        (responsive.showTopNavMenu) ? (
            <PageLayout>
                <Header />
                <Carousel/>
                <LargeContainer>
                    <TierOneLayout firstSecondQuantity={firstSecondQuantity} setFirstSecondQuantity={setFirstSecondQuantity} thirdQuantity={thirdQuantity} setThirdQuantity={setThirdQuantity} responsive={responsive.showTopNavMenu}/>
                    <TierTwoLayout selectedImages={selectedImages} setSelectedImages={setSelectedImages} responsive={responsive.showTopNavMenu}/>
                    <TierThreeLayout selectedImages={selectedImages} setSelectedImages={setSelectedImages} firstSecondQuantity={firstSecondQuantity} setFirstSecondQuantity={setFirstSecondQuantity} thirdQuantity={thirdQuantity} setThirdQuantity={setThirdQuantity} responsive={responsive.showTopNavMenu}/>
                </LargeContainer>
            </PageLayout>

        ) : (
            <PageLayoutMobile>
                <HeaderMobile />
                <CarouselMobile/>
                <LargeContainerMobile>
                    <TierOneLayoutMobile firstSecondQuantity={firstSecondQuantity} setFirstSecondQuantity={setFirstSecondQuantity} thirdQuantity={thirdQuantity} setThirdQuantity={setThirdQuantity} responsive={responsive.showTopNavMenu}/>
                    <TierTwoLayoutMobile selectedImages={selectedImages} setSelectedImages={setSelectedImages} responsive={responsive.showTopNavMenu}/>
                    <TierThreeLayout selectedImages={selectedImages} setSelectedImages={setSelectedImages} firstSecondQuantity={firstSecondQuantity} setFirstSecondQuantity={setFirstSecondQuantity} thirdQuantity={thirdQuantity} setThirdQuantity={setThirdQuantity} responsive={responsive.showTopNavMenu}/>
                </LargeContainerMobile>
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