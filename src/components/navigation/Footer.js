import OrderOfInkFooter from '../../images/orderofinkfooter.gif'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import iglogo from '../../images/iglogo.png'
import twitterlogo from '../../images/twitterlogo.png'

function Footer() {

    const EmailInput = () => {
        return (
          <div className="flex items-start -mt-16 gap-x-2">
            <input
              type="email"
              className="w-64 p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
            />
            <button className="p-4 bg-slate-300 text-black font-medium hover:bg-slate-200 focus:outline-none">
              <span className="flex items-center justify-center h-full">GET UPDATES</span>
            </button>
          </div>
        );
      }

      
    return (
        <div style={{backgroundImage: `linear-gradient(to right, rgba(0,0,0, 0.7) 0 100%), url(${OrderOfInkFooter})`}} className="relative bg-cover w-4/5 bg-center backdrop-brightness-20">
            <div className="grid grid-rows-1 grid-cols-2 mt-20 pt-16 mx-60">
                <div className="grid grid-rows-5 grid-cols-1 col-span-2 md:col-span-1">
                    <TattoosOfTheFuture className="py-4">Tattoos of the future</TattoosOfTheFuture>
                    <FooterFont><div className="font-extrabold inline-block">Partnerships:</div><a className="inline-block px-2 font-grey underline" href='mailto:info@theorderofink.com?subject=Me&body=Hello!'>info@theorderofink.com</a></FooterFont>
                    <FooterFont className="flex gap-x-4 -mt-20">
                        <a href="https://www.instagram.com/theorderofink/"><SocialIcon src={iglogo}/></a>
                        <a href="https://twitter.com/TheOrderofInk"><SocialIcon src={twitterlogo}/></a>
                    </FooterFont>
                    <FooterFont className="font-slate-400 underline -mt-4">&#9400; Copyright The Order of Ink 2022 - Website by JAX</FooterFont>
                    <NavButton href="https://www.theorderofink.com/terms-conditions" className="text-zinc-50">Terms and Conditions</NavButton>
                    <NavButton href="https://www.theorderofink.com/privacypolicy" className="text-zinc-50">Privacy Policy</NavButton>
                </div>
                <div className="grid grid-rows-6 grid-cols-1 h-1/3 justify-items-start ml-80 my-8 col-span-2 md:col-span-1">
                    <NavButton href="https://www.theorderofink.com/#ourvalues" className="ml-40">About</NavButton>
                    <NavButton className="ml-40" href="https://www.theorderofink.com/#collective">Collective</NavButton>
                    <NavButton href="https://www.theorderofink.com/#thinkmap" className="ml-40">Thinkmap</NavButton>
                    <NavButton href="https://www.theorderofink.com/#partners" className="ml-40">Partners</NavButton>
                    <NavButton href="https://www.theorderofink.com/#team" className="ml-40">Team</NavButton>
                    <NavButton href="https://www.theorderofink.com/faq" className="ml-40">FAQ</NavButton>

                </div>
            </div>
        </div>
    )
}

export default Footer


const NavButton = styled.a`

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
    text-decoration: underline;
    justify-content: start;
`


const TattoosOfTheFuture = styled.div`
font-family: 'Alternate Gothic';
font-size: 48px;

font-style: normal;
font-weight: 400;
color: white;


`

const FooterFont = styled.div`
font-family: 'Work Sans';
color: white;
font-size: 13px;
white-space: nowrap;
overflow-x: auto;
`

const SocialIcon = styled.img`
height: 12%;
width: 20px;
display: inline-block;
`