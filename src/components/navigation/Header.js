import OrderOfInkHeader from '../../images/The-order-of-Ink_Mint-Page_Header.png'
import styled from 'styled-components'

function Header() {
    return (
        <div style={{backgroundImage: `url(${OrderOfInkHeader})`}} className="relative bg-cover bg-center h-screen">
            <nav className="py-12 px-14 md:flex-row md:space-x-6">
                <NavButton>Home</NavButton>
                <NavButton>About</NavButton>
                <NavButton>Thinkmap</NavButton>
                <NavButton>Partners</NavButton>
                <NavButton>Team</NavButton>
                <ConnectWallet className="float-right">CONNECT WALLET</ConnectWallet>
            </nav>
            <SneakPeak className="absolute flex justify-center inset-x-0 bottom-0 h-16 ...">Sneak Peek</SneakPeak>
        </div>
    )
}

export default Header

const HeaderImage = styled.img`
    position: absolute;
    width: 1920px;
    height: 1080px;
    left: 0px;
    top: 0px;

`

const NavButton = styled.button`

    font-family: 'Work Sans';
    color: white;
    font-size: 13px;
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
    font-family: Alternate Gothic;
    color: white;
    font-size: 32px;
    z-index: 1;
    line-height: 38px;
    width: 264px;
    height: 64px;
    text-align: center;
    cursor: pointer;
`


const SneakPeak = styled.div`

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-transform: uppercase;

    color: #FFFFFF;
`
