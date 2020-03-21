/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { RecommendedPersonTypes } from "../types/RecommendedPersonTypes";

type CardProps = RecommendedPersonTypes;

const cardStyle = theme =>
  css({
    backgroundColor: theme.colors.white,
    height: 400,
    borderRadius: 10,
    maxWidth: 300,
    position: "absolute",
    width: "100%",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, .2)",

    "& .name": {
      // color: theme.colors.white,
      fontWeight: "bold",
      fontSize: 20,
    },
  });

export const Card: React.FC<CardProps> = ({ name, age }) => (
  <div css={cardStyle}>
    <p className="name">{name}</p>
    <p>{age}</p>
  </div>
);
