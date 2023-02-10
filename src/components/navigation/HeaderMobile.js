import OrderOfInkHeader from '../../images/The-order-of-Ink_Mint-Page_Header.png'
import styled from 'styled-components'
import {useState} from 'react'

function HeaderMobile() {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
        
        <HeaderContainer style={{backgroundImage: `url(${OrderOfInkHeader})`}} className="relative bg-cover bg-center h-screen"> 
        <nav className="p-8 md:flex-row md:space-x-6">
            <CloseButton className="float-right cursor-pointer" onClick={() => setShowNav(false)}>&times;</CloseButton>
            <Hamburger onClick={() => setShowNav(p => !p)} className="float-right z-1 cursor-pointer">
                <div className="w-8 h-0.5 bg-white"></div>
                <div className="w-8 h-0.5 bg-white mt-2"></div>
            </Hamburger>
            
        </nav>
        <ConnectWallet className="absolute flex justify-center inset-x-0 bottom-12 px-4 py-2">CONNECT WALLET</ConnectWallet>
        <SneakPeak className="absolute flex justify-center inset-x-0 bottom-0">Sneak Peek</SneakPeak>
        </HeaderContainer>
        {showNav && (
            <NavModal className="z-50 bg-black">
                <ModalContainer className="flex flex-col items-center bg-black mt-80">
                    <CloseButton className="cursor-pointer text-white px-4" onClick={() => setShowNav(false)}>&times;</CloseButton>
                    <NavButton>Home</NavButton>
                    <NavButton>About</NavButton>
                    <NavButton>Thinkmap</NavButton>
                    <NavButton>Partners</NavButton>
                    <NavButton>Team</NavButton>
                </ModalContainer>
            </NavModal>
        )}
        </>

    )
}

export default HeaderMobile

const HeaderContainer = styled.div`
  position: absolute;
  height: 404px;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 5;
  background-image: url(${OrderOfInkHeader})

`

const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 360px;
  height: 394px;
`

const Hamburger = styled.div`
`

const NavModal = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`

const ModalContainer = styled.div`
    padding: 4rem;
    vh: 100;
`

const CloseButton = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    font-size: 2rem;
`

const NavButton = styled.button`
    font-family: 'Work Sans';
    color: white;
    font-size: 16px;
    z-index: 1;
    background-color: transparent;
    border: none;
    font-weight: bold;
    &:hover {
        color: grey;
    }
`

const ConnectWallet = styled.button`
    background: #333333;
    border-radius: 5px;
    font-family: 'Alternate Gothic';
    color: white;
  font-size: 16px;
  line-height: 19px;
  width: 40%;

  text-align: center;
  margin: auto;
`;

const SneakPeak = styled.div`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  color: #FFFFFF;
  paddingBottom: -10px;
`;