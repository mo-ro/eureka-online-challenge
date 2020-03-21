/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/core";
import { useTransition, animated } from "react-spring";

import { Card } from "./Card";
import { RecommendedPersonTypes } from "../types/RecommendedPersonTypes";
import { JudgeButtons } from "./JudgeButtons";

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
}) => {
  const displayCardLimit = 5;
  const [judgeCount, setJudgeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [displayPeople, setDisplayPeople] = useState([]);
  const transitions = useTransition(displayPeople, person => person.id, {
    from: { position: "absolute", maxWidth: 300, width: "100%", opacity: 1 },
    enter: { opacity: 1, transform: "translateX(0%) rotate(0deg)" },
    leave: {
      opacity: 0,
      transform: isLiked
        ? "translateX(100%) rotate(30deg)"
        : "translateX(-100%) rotate(-30deg)",
    },
  });

  const handleJudge = () => {
    setJudgeCount(prevState => prevState + 1);
  };

  const handleLike = () => {
    setIsLiked(true);
    handleJudge();
  };

  const handleDislike = () => {
    setIsLiked(false);
    handleJudge();
  };

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
          ({ item, props }) =>
            item && (
              <animated.div key={item.id} style={props}>
                <Card {...item} />
              </animated.div>
            ),
        )}
      </div>
      <JudgeButtons handleDisLike={handleDislike} handleLike={handleLike} />
    </React.Fragment>
  );
};
