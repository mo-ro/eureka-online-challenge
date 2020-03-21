/**@jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx, Global, css } from "@emotion/core";
import emotionReset from "emotion-reset";
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
    <React.Fragment>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <ThemeProvider theme={theme}>
        <RecommendedCards people={people} />
      </ThemeProvider>
    </React.Fragment>
  );
};
