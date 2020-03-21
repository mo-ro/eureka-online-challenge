/**@jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx, Global, css } from "@emotion/core";
import emotionReset from "emotion-reset";
import { ThemeProvider } from "emotion-theming";

import { theme } from "../settings/theme";
import { RecommendedCards } from "../components/RecommendedCards";
import { JudgeButtons } from "../components/JudgeButtons";
const peopleJSON = require("../data/people.json");

export const App: React.FC<{}> = () => {
  const [people, setPeople] = useState([]);
  const [judgeCount, setJudgeCount] = useState(0);
  useEffect(() => {
    setPeople(peopleJSON.data);
  }, []);

  const handleJudge = () => {
    setJudgeCount(prevState => prevState + 1);
    // setIsJudged(true);
  };

  const handleLike = () => {
    handleJudge();
  };

  const handleDislike = () => {
    handleJudge();
  };

  return (
    <React.Fragment>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <ThemeProvider theme={theme}>
        <RecommendedCards judgeCount={judgeCount} people={people} />
        <JudgeButtons handleDisLike={handleDislike} handleLike={handleLike} />
      </ThemeProvider>
    </React.Fragment>
  );
};
