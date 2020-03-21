/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/core";
import { useTransition, animated } from "react-spring";

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
  const [displayPeople, setDisplayPeople] = useState([]);
  const transitions = useTransition(displayPeople, person => person.id, {
    from: { position: "absolute", maxWidth: 300, width: "100%", opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    setDisplayPeople([]);
    people.forEach((person, index) => {
      judgeCount + index < people.length &&
        people.length - judgeCount - displayCardLimit <= index &&
        setDisplayPeople(prevState => [...prevState, person]);
    });
  }, [people, judgeCount]);

  return (
    <React.Fragment>
      <div css={RecommendedCardsStyle}>
        {transitions.map(
          ({ item, props }, index) =>
            item && (
              <animated.div key={item.id} style={props}>
                <Card
                  isJudged={isJudged}
                  isTop={people.length - judgeCount === index + 1}
                  {...item}
                />
              </animated.div>
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
