/** @jsx jsx */
import * as React from "react";
import { jsx, css } from "@emotion/core";
import { Card } from "./Card";
import { RecommendedPersonTypes } from "../types/RecommendedPersonTypes";

interface RecommendedCardsProps {
  people: RecommendedPersonTypes[];
  judgeCount: number;
}

const RecommendedCardsStyle = css({
  height: 400,
  maxWidth: 300,
  width: "100%",
});

export const RecommendedCards: React.FC<RecommendedCardsProps> = ({
  people,
  judgeCount,
}) => {
  const showCardNum = 5;
  return (
    <div css={RecommendedCardsStyle}>
      {people.map(
        (person, index) =>
          judgeCount + index < people.length &&
          people.length - judgeCount - showCardNum < index && (
            <Card key={person.id} {...person} />
          ),
      )}
    </div>
  );
};
