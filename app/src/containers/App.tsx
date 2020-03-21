/**@jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../settings/theme";
import { RecommendedCards } from "../components/RecommendedCards";
import { JudgeButtons } from "../components/JudgeButtons";
const peopleJSON = require("../data/people.json");

export const App: React.FC<{}> = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    setPeople(peopleJSON.data);
  }, []);

  const handleJudge = () => {
    console.log("judged");
  };

  const handleLike = () => {
    console.log("like");
    handleJudge();
  };

  const handleDislike = () => {
    console.log("dislike");
    handleJudge();
  };

  return (
    <ThemeProvider theme={theme}>
      <RecommendedCards people={people} />
      <JudgeButtons handleLike={handleLike} handleDisLike={handleDislike} />
    </ThemeProvider>
  );
};
