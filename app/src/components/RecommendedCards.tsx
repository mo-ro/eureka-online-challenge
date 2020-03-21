/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/core";
import { useTransition, animated } from "react-spring";

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
  const displayCardLimit = 5;
  const [displayPeople, setDisplayPeople] = useState([]);
  const transitions = useTransition(displayPeople, person => person.id, {
    from: { position: "absolute", maxWidth: 300, width: "100%", opacity: 1 },
    enter: { opacity: 1, transform: "translateX(0%) rotate(0deg)" },
    leave: { opacity: 0, transform: "translateX(100%) rotate(30deg)" },
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
          ({ item, props }) =>
            item && (
              <animated.div key={item.id} style={props}>
                <Card {...item} />
              </animated.div>
            ),
        )}
      </div>
    </React.Fragment>
  );
};
