/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

import { RecommendedPersonTypes } from "../types/RecommendedPersonTypes";

type CardProps = RecommendedPersonTypes;

const cardStyle = theme =>
  css({
    backgroundColor: theme.colors.white,
    height: 600,
    borderRadius: 10,
    boxSizing: "border-box",
    display: "flex",
    maxWidth: 400,
    position: "absolute",
    width: "100%",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, .08)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: 12,

    "& .status": {
      width: 10,
      height: 10,
      borderRadius: "100%",
      backgroundColor: theme.colors.lightGreen,
      marginRight: 8,
      "&.-active": {
        backgroundColor: theme.colors.lightGreen,
      },
      "&.-inactive": {
        backgroundColor: theme.colors.yellow,
      },
    },

    "& .profile": {
      backgroundColor: theme.colors.white,
      boxSizing: "border-box",
      borderRadius: 12,
      alignSelf: "flex-end",
      width: "100%",
      padding: 18,
    },

    "& .upper": {
      display: "flex",
      alignItems: "center",
      marginBottom: 8,
    },

    "& .name": {
      // fontWeight: "bold",
      fontSize: 16,
      marginRight: 8,
    },

    "& .age": {
      // fontWeight: "bold",
      marginRight: 8,
      fontSize: 16,
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
  avatar,
  tags,
}) => {
  return (
    <div
      css={cardStyle}
      style={{ backgroundImage: `url("${avatar + id}.jpg")` }}
    >
      <div className="profile">
        <div className="upper">
          <div
            className={`status ${
              status === "active" ? "-active" : "-inactive"
            }`}
          ></div>
          <p className="name">{fullName}</p>
          <p className="age">{age}歳</p>
          <p className="rate">{matchingRate}%</p>
        </div>
        <ul className="tags">
          {tags.map(tag => (
            <li key={`${id + tag}`} className="tag">
              <p>{tag}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
