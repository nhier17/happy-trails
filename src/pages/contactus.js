import React from "react";
import {motion} from "framer-motion"
import { pageAnimation,titleAnim } from "../animation";
import styled from "styled-components"
import phone from "../images/phone.svg"
import instagram from "../images/Instagram.jpg"
import mail from "../images/mail.png"

const ContactUs = () => {
    return (
<ContactStyle
exit="exit" 
variants={pageAnimation} 
initial="hidden" 
animate="show"
style={{background: "white"}}
>
    <Title>
                
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>  
        
    </Title>
    <motion.div>
        
        <Social variants={titleAnim}>
        <Container>
          <Vcard>
            <div className="icon">
        <img src={phone} alt='phone'/>
<h2>+254795642609.</h2>
</div>
</Vcard>
</Container>
        </Social>
             <Social variants={titleAnim}>
        <Container>
          <Vcard>
            <div className="icon">
        <img src={instagram} alt='phone'/>
<h2>traylhikes.</h2>
</div>
</Vcard>
</Container>
        </Social>
  
        <Social variants={titleAnim}>
        
        <Container>
          <Vcard>
            <div className="icon">
        <img src={mail} alt='phone'/>
<h2>nhiermaker17@gmail.com</h2>
</div>
</Vcard>
</Container>

        </Social>
    
    </motion.div>
</ContactStyle>
    )
}
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media screen{
    padding: 2rem;
    font-size: 0.1rem;
  }
`
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
@media screen {
 margin-top: 5rem;   
}
`
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    font-size: 2rem;
    margin: 2rem;
  }
`;
const Container = styled.div`
display: flex;
flex-wrap: wrap;
img{
  width: 50px;
  height: 50px;
  object-fit: cover;
}
`
const Vcard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h2 {
      margin-left: 0.1rem;
      background: white;
      color: black;
      padding: 0.1rem;
    }
  }
`;
export default ContactUs