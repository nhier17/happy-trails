import React from "react";
import ServicesSection from "../Components/servicessection";

//create pages section for components
import AboutSection from "../Components/Aboutsection";
import FaqSection from "../Components/faqsection";
import {motion} from "framer-motion"
import { pageAnimation } from "../animation";



const About = () => {

    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
<AboutSection/>
<ServicesSection/>
<FaqSection/>
        </motion.div>
    )
}
export default About