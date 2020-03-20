/** @jsx jsx */
import * as React from "react";
import { jsx, css } from "@emotion/core";

interface CardProps {
  status: "active" | "inactive";
  name: string;
  age: number;
  matchRate: number;
  tags: string[];
  profImage: string;
}

const cardStyle = theme =>
  css({
    backgroundColor: theme.colors.white,
    height: 400,
    borderRadius: 10,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, .2)",
  });

export const Card: React.FC<CardProps> = () => {
  return <div css={cardStyle}></div>;
};
