import React, { FC, useState } from "react";
import { CardWrapper } from "./card.s.ts";
import { Typography } from "@/styles";
import components from "@/components";

interface CardProps {
  data: {
    img: string;
    title: string;
    description: string;
    html: string;
  };
}
export const Card: FC<CardProps> = (props) => {
  const Common = components.common;

  const [openType, setOpenType] = useState(false);
  const [open, setOpen] = useState<{
    img: any;
    title: string | null;
    description: string | null;
    html: string | null;
  }>({
    img: null,
    title: null,
    description: null,
    html: null,
  });

  return (
    <CardWrapper>
      <img className="cardImage" src={props.data?.img} alt="card image" />
      <Typography.H5>{props.data?.title}</Typography.H5>
      <Typography.PARAGRAPH>{props.data?.description}</Typography.PARAGRAPH>
      <button
        className="cardButton"
        onClick={() => {
          setOpen({
            img: props.data?.img,
            title: props.data?.title,
            description: props.data.description,
            html: props.data?.html,
          });
          setOpenType(true);
        }}
      >
        Подробнее
      </button>
      <Common.Modal open={openType} handleClose={() => setOpenType(false)}>
        <img
          src={open?.img}
          alt="img"
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover",
            borderRadius: "16px",
            objectPosition: "center",
          }}
        />
        <Typography.H3 align="center">{open?.title}</Typography.H3>
        <Typography.LEAD_TEXT color="dark200" align="center">
          <div dangerouslySetInnerHTML={{ __html: open.html as string }} />
        </Typography.LEAD_TEXT>
      </Common.Modal>
    </CardWrapper>
  );
};
