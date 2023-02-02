import OrderOfInkHeader from '../../images/The-order-of-Ink_Mint-Page_Header.png'
import styled from 'styled-components'

function Header() {
    return (
        <HeaderImage src={OrderOfInkHeader} />
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