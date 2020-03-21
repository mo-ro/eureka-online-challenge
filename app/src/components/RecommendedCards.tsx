/** @jsx jsx */
import * as React from "react";
import { jsx, css } from "@emotion/core";
import { Card } from "./Card";
import { RecommendedPersonTypes } from "../types/RecommendedPersonTypes";

interface RecommendedCardsProps {
  people: RecommendedPersonTypes[];
}

const RecommendedCardsStyle = css({
  height: 400,
  maxWidth: 300,
  width: "100%",
});

export const RecommendedCards: React.FC<RecommendedCardsProps> = ({
  people,
}) => (
  <div css={RecommendedCardsStyle}>
    {people.map(person => (
      <Card key={person.id} {...person} />
    ))}
  </div>
);
