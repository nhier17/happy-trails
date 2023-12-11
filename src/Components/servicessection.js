import React from "react";
import clock from "../images/clock.svg"
import diaphragm from "../images/diaphragm.svg"
import money from "../images/money.svg"
import teamwork from "../images/teamwork.svg"
import { About,Description,Image } from "../styles";
import styled from "styled-components"
import waterfall from "../images/waterfall.png"


const ServicesSection = () => {
    return(
<Services>
    <Description>
<h2>High <span>quality</span> services</h2>
<Cards>
<Card>
    <div className="icon">
<img src={clock} alt="clock"/>
<h3>Efficient</h3>
    </div>
    <p>We come up with a yearly calendar, starting from beginner friendly as we work our way  to advanced level hikes.   </p>
    
</Card>
<Card>
    <div className="icon">
<img src={teamwork} alt="clock"/>
<h3>Teamwork</h3>
    </div>
    <p>Our goal is to make sure each member is able to submit. Working together as team and pushing each other through the difficulties.   </p>
    
</Card>
<Card>
    <div className="icon">
<img src={diaphragm} alt="clock"/>
<h3>Transport</h3>
    </div>
    <p>Travel in cozy tour vans to and fro destination.</p>
    
</Card>
<Card>
    <div className="icon">
<img src={money} alt="clock"/>
<h3>Affordable</h3>
    </div>
    <p>We come up with pocket friendly prices and offers depending on the destination. Inclusive of transport,snacks,guide and entrance fees.</p>
    
</Card>
</Cards>
    </Description>
    <Image>
        <img src={waterfall} alt="camera"/>
    </Image>
</Services>
    )
}
const Services = styled(About)`
 h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`
const Cards = styled.div`
display: flex;
flex-wrap: wrap;
@media screen {
  justify-content: center;  
}
`
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection