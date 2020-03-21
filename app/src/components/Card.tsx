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

export const Card: React.FC<CardProps> = ({
  id,
  status,
  fullName,
  age,
  matchingRate,
  tags,
  avatar,
}) => (
  <div css={cardStyle}>
    <p>{status}</p>
    <p className="name">{fullName}</p>
    <p>{age}</p>
    <p>{matchingRate}</p>
    {tags.map(tag => (
      <p key={`${id + tag}`}>{tag}</p>
    ))}
    <img src={`${avatar + id}.jpg`} alt="" />
  </div>
);
