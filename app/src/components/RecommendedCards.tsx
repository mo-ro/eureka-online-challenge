/** @jsx jsx */
import * as React from "react";
import { jsx, css } from "@emotion/core";
import { Card } from "./Card";
import { RecommendedPersonTypes } from "../types/RecommendedPersonTypes";

interface RecommendedCardsProps {
  people: RecommendedPersonTypes[];
  judgeCount: number;
  isJudged: boolean;
  handleLike: () => void;
  handleDisLike: () => void;
}

const RecommendedCardsStyle = css({
  height: 400,
  maxWidth: 300,
  width: "100%",
});

export const RecommendedCards: React.FC<RecommendedCardsProps> = ({
  people,
  judgeCount,
  isJudged,
  handleLike,
  handleDisLike,
}) => {
  const displayCardLimit = 5;
  return (
    <React.Fragment>
      <div css={RecommendedCardsStyle}>
        {people.map(
          (person, index) =>
            judgeCount + index < people.length &&
            people.length - judgeCount - displayCardLimit <= index && (
              <React.Fragment>
                <Card
                  key={person.id}
                  isJudged={isJudged}
                  isTop={people.length - judgeCount === index + 1}
                  {...person}
                />
                {console.log(index)}
              </React.Fragment>
            ),
        )}
      </div>
      <div>
        <div onClick={handleDisLike}>Dislike</div>
        <div onClick={handleLike}>Like</div>
      </div>
    </React.Fragment>
  );
};
