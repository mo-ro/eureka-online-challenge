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
    backgroundSize: "cover",
    backgroundPosition: "center",

    "& .status": {
      position: "relative",
      "&::before": {
        // content: "",
        display: "block",
        position: "absolute",
        width: 10,
        height: 10,
        borderRadius: "100%",
        backgroundColor: theme.colors.lightGreen,
      },
    },

    "& .name": {
      color: theme.colors.white,
      fontWeight: "bold",
      fontSize: 20,
    },

    "& .age": {
      color: theme.colors.white,
      fontWeight: "bold",
      fontSize: 20,
    },

    "& .tags": {
      display: "flex",
      flexWrap: "wrap",
    },
  });

export const Card: React.FC<CardProps> = ({
  id,
  status,
  fullName,
  age,
  matchingRate,
  tags,
}) => {
  return (
    <div css={cardStyle}>
      <p>{id}</p>
      <p className="status">{status}</p>
      <p className="name">{fullName}</p>
      <p className="age">{age}</p>
      <p className="rate">{matchingRate}</p>
      <ul className="tags">
        {tags.map(tag => (
          <li key={`${id + tag}`} className="tag">
            <p>{tag}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
