import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import {motion} from "framer-motion"
import { pageAnimation, fade,photoAnim,lineAnim,slider, sliderContainer } from "../animation";
import hiking3 from "../images/hiking3.jpg"
import hiking2 from "../images/hiking2.jpg"
import ngare from "../images/ngare.jpg"
import elephant from "../images/Elephant-Hill.jpg"
import longonot from "../images/longonot.jpg"


const OurWork = () => {
    return (
    
<Work
 variants={pageAnimation} 
 initial="hidden" 
 animate="show"
  exit="exit" 
  style={{background: "white"}}
  >
    <motion.div variants={sliderContainer}>
    <Frame1 variants={slider}></Frame1>
    <Frame2 variants={slider}></Frame2>
    <Frame3 variants={slider}></Frame3>
    <Frame4 variants={slider}></Frame4>
    </motion.div>

      <Movie>
        <motion.h2 variants={fade}>Menengai Crater</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/menengai-crater">
          <Hide>
        <motion.img variants={photoAnim} src={hiking3} alt="athlete"/>
        </Hide>
        </Link>
    </Movie>

    <Movie>
        <h2>Kijabe Hill</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/kijabe-hill">
        <img src={hiking2} alt="athlete"/>
        </Link>
    </Movie>

    <Movie>
        <h2>Elephant Hill</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to ="/work/elephant-hill">
        <img src={elephant} alt="athlete"/>
        </Link>
    </Movie>

    <Movie>
        <h2>Ngare Ndare</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/ngare-ndare">
        <img src={ngare} alt="avengers"/>
        </Link>
      </Movie>

      <Movie>
        <h2>Mt.Longonot</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/mt-longonot">
        <img src={longonot} alt="avengers"/>
        </Link>
      </Movie>
   
</Work>

    )
}
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`
const Movie = styled(motion.div)`
  padding-bottom: 10rem;

.line {
  width: 80%;
  height: 0.5rem;
  background: #23d997;
  margin-bottom: 3rem;
}
img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
}
`
const Hide= styled.div`
overflow: hidden;
`
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork