import styled from "styled-components";

export const AboutHeader = styled.div`
  display: flex;
`;

export const LeftItem = styled.div`
  && {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  img {
    width: calc(60% - 12px);
    height: 200px;
    border-radius: 32px;
    object-fit: cover;
  }
`;

export const LeftItemTitle = styled.div`
  && {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 52px 20px;
    border-radius: 32px;
    background-color: #cd02ee;
  }
`;

export const LeftSection = styled.section`
  && {
    padding-top: 59px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    .leftImg {
      width: 600px;
      height: 380px;
      border-radius: 32px;
    }
  }
`;

export const RightSection = styled.section`
  display: flex;
  flex-direction: column;
`;
export const Navlist = styled.nav`
  margin-left: 30px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  li {
    color: dark200;
  }
`;
