import Styles, { Typography } from "@/styles";
import React, { FC } from "react";
import { PortifolioIMgWrapper, ShowList, ShowListItem } from "./portifolio.s";

interface IPortifolios {}

export const PortifolioServices: FC<IPortifolios> = () => {
  return (
    <Styles.Container>
      <PortifolioIMgWrapper>
        <Typography.H2 style={{ textAlign: "center" }}>Портфолио</Typography.H2>
        <ShowList>
          <ShowListItem>
            <img src="/images/services/portfolio1.png" alt="portifolio img" />
            <img src="/images/services/portfolio2.png" alt=" portifolio img" />
          </ShowListItem>
          <ShowListItem>
            <img src="/images/services/portfolio3.png" alt="portifolio img" />
          </ShowListItem>
          <ShowListItem>
            <img src="/images/services/portfolio4.png" alt="portifolio img" />
            <img src="/images/services/portfolio5.png" alt=" portifolio img" />
          </ShowListItem>
        </ShowList>
      </PortifolioIMgWrapper>
    </Styles.Container>
  );
};
