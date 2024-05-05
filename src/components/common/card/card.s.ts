import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 367px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .cardImage {
    width: 430px;
    height: 200px;
    border-radius: 14px;
    object-fit: cover;
  }
  h5 {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  h6 {
    text-align: center;
  }
  .cardButton {
    color: var(--White, #fff);
    font-weight: 600;
    font-size: 16px;
    padding: 16px 32px;
    margin-top: 15px;
    margin-bottom: 20px;
    border-radius: var(--main-border);
    background-image: var(--gradient),
      linear-gradient(239deg, #0094ff -1.81%, #cd02ee 89.62%);
  }
`;
