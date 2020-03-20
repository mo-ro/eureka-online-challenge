/**@jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../settings/theme";
import { Card } from "../components/Card";

export const App: React.FC<{}> = () => (
  <ThemeProvider theme={theme}>
    <Card
      status="active"
      name="aaa"
      age={32}
      matchRate={90}
      tags={["tag"]}
      profImage="https"
    />
  </ThemeProvider>
);
