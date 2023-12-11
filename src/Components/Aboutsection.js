import React from "react";
// create 7 divs wrapped inside each other
import {motion} from "framer-motion"
import { About,Description,Hide,Image } from "../styles";
import { titleAnim,fade,photoAnim } from "../animation";
import Wave from "./wave";
import styled from "styled-components"
import satima from "../images/satima.jpg"
import {useNavigate} from "react-router-dom"

const AboutSection = () =>{  
let navigate = useNavigate();
const routeChange = () =>{
    let path = "/contact"
    navigate(path);
}
    return(
        <Background variants={photoAnim}>
    <About>
    <Description>
        <motion.div>
        <Hide>
        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
        </Hide>
        <Hide>
        <motion.h2 variants={titleAnim}>your <span>hiking  </span> adventure</motion.h2> 
        </Hide>
        <Hide>
        <motion.h2 variants={titleAnim}>an experience.</motion.h2>
        </Hide>
   </motion.div>
        <motion.p variants={fade}>Contact us for  hiking adventures around kenya from beginner friendly to advanced. Hiking is better together #Tembea Kenya.</motion.p>
        <motion.button onClick={routeChange} variants={fade}>Contact Us</motion.button>
</Description>
<Image>

</Image>
<Wave/>
        </About>
       </Background> 
    )
};
const Background = styled.div`
background-image: url(${satima});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

export default AboutSection;