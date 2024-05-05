import React from "react";
import { FC } from "react";
import Styles, { Typography } from "@/styles";
import {
  ColItem,
  ColWrapper,
  LeftSection,
  LeftSectionItem,
  OurtaskWrapper,
  RightSectionMainAbout,
 
} from "./Ourtasks.s.ts";

interface IOurtasks {}

export const Ourtasks: FC<IOurtasks> = (props) => {
  return (
    <Styles.Container>
      <OurtaskWrapper>
        <Styles.Row
          size={{ xs: 12, lg: 6 }}
          difference={{ xs: 0, lg: 12 }}
          gap={24}
        >
          <LeftSection>
            <Typography.H2 style={{ marginBottom: "28px" }}>
              Наши задачи
            </Typography.H2>
            <LeftSectionItem>
              <Typography.H6>Проектирование -</Typography.H6>
              <Typography.ABOUTPTITLE>
                проектирование малой и средней мощности, план расположения
                оборудований и кабелей, подготовка документации по дизельной
                генераторной установки, расчет мощности электроустановок,
                расчеты и планы питающих сетей, расчет электрических щитов,
                расчет нагрузки, планы заземления контура, система снабжение
                топливом, система автоматизации и пожарной безопасности.
              </Typography.ABOUTPTITLE>
            </LeftSectionItem>
            <LeftSectionItem>
              <Typography.H6>Поставка -</Typography.H6>
              <Typography.ABOUTPTITLE>
                подготовка генератора, проверка генератора на заводе у
                производителя, подготовка необходимого транспорта и
                товаросопроводительного документа, таможенная очистка,
                сертификация поставленных товаров
              </Typography.ABOUTPTITLE>
            </LeftSectionItem>
            <LeftSectionItem>
              <Typography.H6>Установка – </Typography.H6>
              <Typography.ABOUTPTITLE>
                установка, монтаж и настройка. Подготовка и обучение персонала
                по работе с генератором.
              </Typography.ABOUTPTITLE>
            </LeftSectionItem>
            <LeftSectionItem>
              <Typography.H6>Сервисное обслуживание - </Typography.H6>
              <Typography.ABOUTPTITLE>
                предоставляем вам поддержку в различных областях, таких как
                техническое обслуживание, ремонт, поставка запасных частей,
                монтаж и пуско-наладка системы. Благодаря быстрому реагированию
                мы предлагаем решения для вашего бизнеса с минимальными
                простоями. Механические и электрические изменения в работе по
                приведению объекта в соответствие со стандартами, Монтаж,
                пуско-наладочные работы, ремонтные работы, Работы по
                техническому обслуживанию, Модификации включения питания.
              </Typography.ABOUTPTITLE>
            </LeftSectionItem>
            <ColWrapper>
              <ColItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                >
                  <path
                    d="M23.5697 13.0755C23.5697 6.84532 18.515 1.79065 12.2848 1.79065C6.05467 1.79065 1 6.84532 1 13.0755C1 19.3057 6.05467 24.3603 12.2848 24.3603C18.515 24.3603 23.5697 19.3057 23.5697 13.0755Z"
                    stroke="#31C65B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M17.9272 8.37329L10.0278 17.7773L6.6424 14.0157"
                    stroke="#31C65B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <Typography.PARAGRAPH>Поставка</Typography.PARAGRAPH>
              </ColItem>
              <ColItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                >
                  <path
                    d="M23.5697 13.0755C23.5697 6.84532 18.515 1.79065 12.2848 1.79065C6.05467 1.79065 1 6.84532 1 13.0755C1 19.3057 6.05467 24.3603 12.2848 24.3603C18.515 24.3603 23.5697 19.3057 23.5697 13.0755Z"
                    stroke="#31C65B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M17.9272 8.37329L10.0278 17.7773L6.6424 14.0157"
                    stroke="#31C65B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <Typography.PARAGRAPH>Установка</Typography.PARAGRAPH>
              </ColItem>
              <ColItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                >
                  <path
                    d="M23.5697 13.0755C23.5697 6.84532 18.515 1.79065 12.2848 1.79065C6.05467 1.79065 1 6.84532 1 13.0755C1 19.3057 6.05467 24.3603 12.2848 24.3603C18.515 24.3603 23.5697 19.3057 23.5697 13.0755Z"
                    stroke="#31C65B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M17.9272 8.37329L10.0278 17.7773L6.6424 14.0157"
                    stroke="#31C65B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <Typography.PARAGRAPH>
                  Сервисное обслуживание
                </Typography.PARAGRAPH>
              </ColItem>
            </ColWrapper>
          </LeftSection>
        </Styles.Row>
        <Styles.Row
          size={{ xs: 12, lg: 6 }}
          difference={{ xs: 0, lg: 12 }}
          gap={24}
        >
          <RightSectionMainAbout>
            <img src="/images/about/mainLeft.png" alt="image" />
            <img src="/images/about/mainRight.png" alt="image" />
          </RightSectionMainAbout>
        </Styles.Row>
      </OurtaskWrapper>
    </Styles.Container>
  );
};
