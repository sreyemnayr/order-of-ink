import OrderOfInkFooter from '../../images/orderofinkfooter.gif'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import iglogo from '../../images/iglogo.png'
import twitterlogo from '../../images/twitterlogo.png'

function FooterMobile() {

    const EmailInput = () => {
        return (
          <div className="flex items-start gap-x-2 py-4">
            <input
              type="email"
              className="w-52 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email address"
            />
            <button className="py-3 px-5 bg-slate-300 text-black font-medium hover:bg-slate-200 focus:outline-none">
              <span className="flex items-center justify-center h-full">GET UPDATES</span>
            </button>
          </div>
        );
      }

      
    return (
        <div style={{backgroundImage: `linear-gradient(to right, rgba(0,0,0, 0.7) 0 100%), url(${OrderOfInkFooter})`}} className="relative bg-cover bg-center backdrop-brightness-20">
            <div className="grid grid-rows-11 grid-cols-1 mt-20 py-6 mx-10">
                    <TattoosOfTheFuture className="py-4">Tattoos of the future</TattoosOfTheFuture>
                    <FooterFont><div className="font-extrabold inline-block">Partnerships:</div><a className="inline-block px-2 font-grey underline" href='mailto:info@theorderofink.com?subject=Me&body=Hello!'>info@theorderofink.com</a></FooterFont>
                    <EmailInput/>
                    <FooterFont className="flex gap-x-3"><SocialIcon src={iglogo}/><SocialIcon src={twitterlogo}/></FooterFont>
                    <FooterFont className="font-slate-400 underline py-8">&#9400; Copyright The Order of Ink 2022 - Website by JAX</FooterFont>
                    <NavButton className="flex items-start py-1">About</NavButton>
                    <NavButton className="flex items-start py-1">Collective</NavButton>
                    <NavButton className="flex items-start py-1">Thinkmap</NavButton>
                    <NavButton className="flex items-start py-1">Partners</NavButton>
                    <NavButton className="flex items-start py-1">Team</NavButton>
                    <NavButton className="flex items-start py-1">FAQ</NavButton>
            </div>
        </div>
    )
}

export default FooterMobile


const NavButton = styled.button`

    font-family: 'Work Sans';
    color: white;
    font-size: 10px;
    z-index: 1;
    background-color: transparent;
    border: none;
    font-weight: bold;
    &:hover {
        color: grey;
    }
    text-decoration: underline;
    align-items: start;
`


const TattoosOfTheFuture = styled.div`
font-family: 'Alternate Gothic';
font-size: 24px;

font-style: normal;
font-weight: 400;
color: white;


`

const FooterFont = styled.div`
font-family: 'Work Sans';
color: white;
font-size: 10px;
white-space: nowrap;
overflow-x: auto;
`

const SocialIcon = styled.img`
height: 100%;
width: 20px;
display: inline-block;
`