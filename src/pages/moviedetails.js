import React, {useState,useEffect} from "react";
import styled from "styled-components"
import {useLocation} from "react-router-dom"
import { MovieState } from "../moviesstate";
import {motion} from "framer-motion"
import { pageAnimation} from "../animation";


const MovieDetail = () =>{
    const location = useLocation();
    const url =location.pathname;
    const [movies] = useState(MovieState)
    const [movie,setMovie] = useState(null)

    useEffect(() =>{
const currentMovie = movies.filter((stateMovie) => stateMovie.url === url) ;
setMovie(currentMovie[0])
    } ,[movies,url]);

    return(
        <>
        {movie && (
<Details exit="exit" variants={pageAnimation} initial="hidden" animate="show">
    <HeadLine>
    <h2>{movie.title}</h2>
    <img src={movie.mainImg} alt="main"/>
    </HeadLine>
   <Awards>
    {movie.awards.map((award) => (
        <Award
         title={award.title}
        description={award.description}
        key={award.title}
        />
    ))}
   </Awards>
   <ImageDisplay>
    <img src={movie.secondaryImg} alt=""/>
   </ImageDisplay>
</Details>
        )};
</>
    )
}
const Details = styled.div`
  color: white;
`;
const HeadLine = styled.div`

  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 0%;
    left: 40%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 75%;
    height: 75%;
    margin-left: 5rem;
    object-fit: cover;
  }
`
const Awards = styled(motion.div)`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media screen {
    display: block;
    margin: 2rem 2rem;
  }
 `
const Award = ({title,description}) => {
return (
    <AwardStyle>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
    </AwardStyle>
)
}
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`
const ImageDisplay = styled.div`
  min-height: 50vh;
  
  img {
    margin-left: 5rem;
    width: 75%;
    height: 75%;
    object-fit: cover;
  }
`;


export default MovieDetail