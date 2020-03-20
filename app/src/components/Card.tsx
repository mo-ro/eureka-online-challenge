import * as React from "react";
import {css} from "@emotion/core";

interface CardProps {
  status: "active" | "inactive";
  name: string;
  age: number;
  matchRate: number;
  tags: string[];
  profImage: string;
}

export const Card: React.FC<CardProps> = () => (
  <div className="card"></div>
);

