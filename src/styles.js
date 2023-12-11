import styled from "styled-components"



export const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
@media screen{
  display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`
export const Description = styled.div`
 flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media screen {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`
export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    border-radius: 8px;
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`
export const Hide =styled.div`
overflow: hidden;
`