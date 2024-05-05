import Styles, { Typography } from "@/styles";
import React, { FC } from "react";
import { ServicesWrapper } from "./servicesHero.s";
import { Card } from "@/components/common/card";
import { services } from "@/mock/services";
interface IServices {}

export const ServicesHero: FC<IServices> = () => {
  console.log();
  return (
    <Styles.Container>
      <Typography.H1 style={{ color: "#252f40", textAlign: "center" }}>
        Услуги
      </Typography.H1 >

      <ServicesWrapper>
        {services.map((el) => {
          return (
            <>
              <Card data={el} />
            </>
          );
        })}
      </ServicesWrapper>
    </Styles.Container>
  );
};
