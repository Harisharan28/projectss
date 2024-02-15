import React from 'react'
import { Button } from '../../globalStyles'
import { CiMail,CiPhone } from "react-icons/ci";
// import { FaInstagram,FaTwitter,FaYoutube,FaLinkedin,} from 'react-icons/fa'
import {FooterContainer,FooterSubscription,FooterSubHeading,
    FooterSubText,Form,FormInput,FooterLinksContainer,
    FooterLinksWrapper,FooterLinksItems,FooterLinkTitle,FooterLink,
SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,FooterSublink,SocialLogosubtext} from './Footer.elements'
import logo from '../../images/Asset_logo.png'


const Footer = () =>{
    return(
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                Discover how the ECI impacts lives through faith, community, and service.<br/> Join us on this transformative journey!
                </FooterSubHeading>
                <FooterSubText>
               Prayer Request
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Enter Email Address"/>
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                <FooterLinksItems>
                <SocialLogo to="/">
                        <img src={logo}/>
                    </SocialLogo>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Explore</FooterLinkTitle>
                        <FooterLink to="/">About Us</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Events</FooterLink>
                        <FooterLink to="/">Contact us</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Support</FooterLinkTitle>
                        <FooterLink to="/">Terms & Conditions</FooterLink>
                        <FooterLink to="/">Privacy Policy</FooterLink>
                        <FooterLink to="/">FAQ</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLink to="/"><CiMail/>
                         <FooterSublink> Tamilanban@evangelicalchurchofindia.com</FooterSublink
                         ></FooterLink>
                        <FooterLink to="/"><CiPhone />
                        <FooterSublink>
                        +91 76395 33348
                        </FooterSublink></FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                       <SocialLogosubtext>
                        {/* <br/><br/><br/> */}
                       </SocialLogosubtext>
                    </SocialLogo>
                     <SocialIcons>
                        {/* <SocialIconLink to="/" target="_blank" aria-label="Mail">
                            <CiMail/>
                            <FooterSublink>
                            Tamilanban@evangelicalchurchofindia.com
                            </FooterSublink>
                        </SocialIconLink> */}
                        
                        {/* <SocialIconLink to="/" target="_blank" aria-label="FaLinkedin">
                        <CiPhone />
                        <FooterSublink>
                        +91 76395 33348
                        </FooterSublink>
                        </SocialIconLink> */}
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer