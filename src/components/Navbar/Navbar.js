import React,{useState,useEffect} from "react"
import {FaBars,FaTimes} from "react-icons/fa"
// import {IconContext} from "react-icons/lib"
import { Button } from "../../globalStyles"
import './Navbar.css'
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
 } from "./Navbar.elements"
 import logo from '../../images/Asset_logo.png'


const Navbar = () =>{
    const [click,setClick] = useState(false)
    const [button,setButton] = useState(true)
    const handleClick = () => setClick(!click)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(()=>{
       showButton() 
    },[])

    window.addEventListener("resize",showButton)

    return (
        <>
        {/* <IconContext.Provider value={{ color:"#fff" }}> */}
            <Nav>
              <NavbarContainer>
                <NavLogo to ="/">
                    {/* <NavIcon/> */}
                    <img src={logo}className="logo" />
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes/>:<FaBars/>}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to="/">
                        <NavLogo to ="/">
                            Home
                        </NavLogo>
                            </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/about">
                        <NavLogo to ="/about">
                        About
                        </NavLogo>
                           
                            </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/Prayer_Request">
                        <NavLogo to ="/Prayer_Request">
                            Prayer Request
                        </NavLogo>
                            </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/Testimonial">
                        <NavLogo to ="/Testimonial">
                            Testimonials
                        </NavLogo>
                            </NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to="/sign-up">
                                <Button primary >CONTACT US</Button>
                            </NavBtnLink>
                        ):(
                            <NavBtnLink to="/sign-up">
                                <Button fontBig primary>
                                CONTACT US
                                </Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                </NavMenu>
               </NavbarContainer>
            </Nav>
        {/* </IconContext.Provider> */}
        </>
    )
}

export default Navbar