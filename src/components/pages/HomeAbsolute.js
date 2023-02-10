import OrderOfInkHeader from '../../images/The-order-of-Ink_Mint-Page_Header.png'
import { useState } from 'react'
import styled from 'styled-components'
//import Carousel from '../layouts/CarouselLayout'
import Carousel from 'react-bootstrap/Carousel'
import ImageOne from '../../images/Johanna 1.png'
import ImageTwo from '../../images/Katusza 1.png'
import ImageThree from '../../images/Merry 1.png'
import ImageFour from '../../images/Merry 2.png'
import TierOneLayout from '../layouts/TierOneLayout'
import TierTwoLayout from '../layouts/TierTwoLayout'
import TierThreeLayout from '../layouts/TierThreeLayout'



function HomeAbsolute() {

    const [extended, setExtended] = useState(false)

    
    return (
        <PageLayout>
            <HeaderImage src={OrderOfInkHeader}></HeaderImage>
            <NavRow>
                <NavButton>Home</NavButton>
                <NavButton>About</NavButton>
                <NavButton>Thinkmap</NavButton>
                <NavButton>Partners</NavButton>
                <NavButton>Team</NavButton>
            </NavRow>
            <ConnectWallet>CONNECT WALLET</ConnectWallet>
            <SneakPeak>Sneak Peak</SneakPeak>
            <CustomCarousel indicators={false} prevLabel={null} nextLabel={null}
            >
                <Carousel.Item>
                    <CarouselImage
                    src={ImageOne}
                    />
                    <CarouselImage
                    src={ImageTwo}
                    />
                    <CarouselImage
                    src={ImageThree}
                    />
                    <CarouselImage
                    src={ImageFour}
                    />
                </Carousel.Item>
            </CustomCarousel>
            
            <TierOneLayout extended={extended} setExtended={setExtended}/>
            <TierTwoLayout extended={extended}/>
            <TierThreeLayout extended={extended}/>



        </PageLayout>
    )
}

export default HomeAbsolute

const HeaderImage = styled.img`
    position: absolute;
    width: 100%;
    height: 1080px;
    left: 0px;
    top: 0px;
    z-index: 0;
`

const PageLayout = styled.div`
    width: 100%;
    height: ${props => props.extended ? "6496px" : "6094px" };
    background-color: black;
`

const Navigation = styled.div`
    height: 126px;
    width: 100%;
    color: black;
    z-index: 1;
`

const NavRow = styled.div`
    top: 62px;
    left: 77px;
    display: flex;
    flex-direction: row;
    line-spacing: 25px;
    position: absolute;
`

const NavButton = styled.button`

    font-family: 'Work Sans';
    color: white;
    font-size: 14px;
    z-index: 1;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-weight: bold;
    padding-left: 10px;
    padding-right: 10px;

    &:hover {
        color: grey;
    }
`

const ConnectWallet = styled.button`
    background: #333333;
    border-radius: 5px;
    font-family: Alternate Gothic;
    top: 62px;
    right: 77px;
    color: white;
    font-size: 32px;
    z-index: 1;
    position: absolute;
    line-height: 38px;
    width: 264px;
    height: 64px;
    text-align: center;
    cursor: pointer;
`

const SneakPeak = styled.div`
    position: absolute;
    width: 150px;
    height: 37px;
    left: 45%;
    top: 1032px;

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-transform: uppercase;

    color: #FFFFFF;
`

const CustomCarousel = styled(Carousel)`
  position: absolute;
  top: 1082px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const CarouselImage = styled.img`
    width: 320px;
    height: 320px;
    padding: 0.5rem;
    margin: 0 auto;
    object-fit: cover;
    
`

