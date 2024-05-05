import React from "react";
import { FC } from "react";
import Styles, { Typography } from "@/styles";
import {
  AboutHeader,
  LeftItem,
  LeftItemTitle,
  LeftSection,
  Navlist,
  RightSection,
} from "./achievements.s";

interface IAchievements {}

export const Achievements: FC<IAchievements> = (props) => {
  return (
    <Styles.Container>
      <AboutHeader>
        <Styles.Row
          size={{ xs: 12, lg: 6 }}
          difference={{ xs: 0, lg: 12 }}
          gap={24}
        >
          <LeftSection>
            <img
              className="leftImg"
              width={600}
              height={380}
              src="/images/about/about.webp"
              alt="image"
            />
            <LeftItem>
              <LeftItemTitle>
                <Typography.H1 align="center" color="white">
                  500 K
                </Typography.H1>
                <Typography.H5 color="white">Daily Active Users</Typography.H5>
              </LeftItemTitle>
              <img
                src="/images/about/leftItemRight.webp"
                alt="a photo of an employee at work"
              />
            </LeftItem>
          </LeftSection>
        </Styles.Row>
        <Styles.Row
          size={{ xs: 18, lg: 6 }}
          difference={{ xs: 0, lg: 12 }}
          gap={24}
        >
          <RightSection>
            <Typography.H4 style={{ fontWeight: "600" }}>
              О компании
            </Typography.H4>
            <br />
            <Typography.ABOUTPTITLE>
              Наша компания успешно реализовала в Узбекистане более 50 проектов
              под ключ с ориентированным на клиента подходом, инженерными
              решениями и оптимальными проектными возможностями с
              проектированием, поставкой, установкой и после продажным
              обслуживанием оборудования; Absolute Energy будет продолжать
              удовлетворять потребности своих клиентов с такой же серьезностью и
              решимостью в будущем, как и в прошлом.
            </Typography.ABOUTPTITLE>
            <br />
            <Typography.ABOUTPTITLE>
              Специалисты нашей компании отлично разбираются в особенностях
              работы ДГУ таких брендов, как ALIMAR, RID, GEKO, NK Powers,
              Olympian, Volvo Penta, Cummins, AKSA, GEKSAN, FG Wilson,
              Caterpillar, а также других известных производителей.
            </Typography.ABOUTPTITLE>
            <br />
            <Typography.ABOUTPTITLE>
              Сервисные специалисты нашей компании производят капитальный ремонт
              ДГУ любой сложности, а также техническое обслуживание генераторных
              установок в соответствии с рекомендациями завода-изготовителя и с
              учетом реальных особенностей местной эксплуатации.
            </Typography.ABOUTPTITLE>
            <br />
            <Typography.ABOUTPTITLE>
              На сегодняшний день компания произвела ремонт более 1100 ДГУ в
              Республике Узбекистан и обслуживает более 900 ДГУ по всей
              Республике Узбекистан.
            </Typography.ABOUTPTITLE>
            <br />
            <Typography.H5
              style={{
                fontWeight: "normal",
                lineHeight: "normal",
              }}
            >
              Предлагаем Вашему вниманию следующие услуги:
            </Typography.H5>
            <br />
            <Navlist>
              <ul>
                <li style={{ color: "#9b9fa7" }}>
                  Поставка, монтаж и пуско-наладка дизель-генераторных
                  установок;
                </li>
                <li style={{ color: "#9b9fa7" }}>
                  Гарантийное обслуживание поставленных ДГУ;
                </li>
                <li style={{ color: "#9b9fa7" }}>
                  Комплексная диагностика дизельных и бензиновых электростанций;
                </li>
                <li style={{ color: "#9b9fa7" }}>
                  Поставка расходных материалов и запасных частей;{" "}
                </li>
                <li style={{ color: "#9b9fa7" }}>
                  Капитальный ремонта дизельных генераторов;
                </li>
                <li style={{ color: "#9b9fa7" }}>
                  Нагрузочные испытание дизель-генераторных установок;
                </li>
                <li style={{ color: "#9b9fa7" }}>
                  Техническое обслуживание дизель-генераторных установок;
                </li>
                <li style={{ color: "#9b9fa7" }}>
                  Модернизация и автоматизация дизельных электроустановок{" "}
                </li>
              </ul>
            </Navlist>
          </RightSection>
        </Styles.Row>
      </AboutHeader>
    </Styles.Container>
  );
};
