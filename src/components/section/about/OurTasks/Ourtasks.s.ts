import styled from "styled-components";

export const OurtaskWrapper = styled.section`
  display: flex;
  gap: 50px;
`;

export const LeftSection = styled.div`
display: flex;
flex-direction: column;
`

export const LeftSectionItem = styled.div`
h6{
    display: inline;
    line-height: normal;
   
}

`

export const RightSectionMainAbout = styled.div`
padding-top: 70px;
  display: flex;
  
  gap: 50px;
  img {
    width: calc(50% - 16px);
    height: 450px;
    object-fit: cover;
    object-position: center;
    border-radius: 34px;
  }
`;


export const ColWrapper = styled.div`
margin-top: 30px;
display: flex;
flex-direction: column;
gap: 15px;
margin-bottom: 50px;
`

export const ColItem = styled.div`
display: flex;
align-items: center;
gap: 15px;
`