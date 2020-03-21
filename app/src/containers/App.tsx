/**@jsx jsx */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { jsx } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../settings/theme";
import { RecommendedCards } from "../components/RecommendedCards";
const peopleJSON = require("../data/people.json");

export const App: React.FC<{}> = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    setPeople(peopleJSON.data);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <RecommendedCards people={people} />
    </ThemeProvider>
  );
};
