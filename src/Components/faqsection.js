import React from "react";
import styled from "styled-components"
import { About } from "../styles";
import Toggle from "./toggle";
import {LayoutGroup} from "framer-motion"

const FaqSection = () => {
    return(
<Faq>
<h2>Any Questions? <span>FAQ</span></h2>
<LayoutGroup>
<Toggle title="How Do I Start?">
<div className="answer">
<p>You can reach us through our socials and we will be able to share our calendar with you.</p>
</div>
</Toggle>
<Toggle title="Schedule"> 
<div className="answer">
<p>Our yearly schedule runs from January to December. Exploring different terrains around Kenya. </p>
</div>
</Toggle>
<Toggle title="Different payment methods">
<div className="answer">
<p>Payment is done through m-pesa or cash. </p>
</div>
</Toggle>
<Toggle title="Pick up Location">
<div className="answer">
<p>We have two pick up points; KENCOM and Total Energies Embakasi.</p>
</div>
</Toggle>
</LayoutGroup>
</Faq>

    )
}
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
    color: white;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      color: white; 
      padding: 1rem 0rem;
    }
  }
`
export default FaqSection