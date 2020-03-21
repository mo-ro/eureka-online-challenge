import * as React from "react";
import { Card } from "./Card";
import { RecommendedPersonTypes } from "../types/RecommendedPersonTypes";

interface RecommendedCardsProps {
  people: RecommendedPersonTypes[];
}

export const RecommendedCards: React.FC<RecommendedCardsProps> = ({
  people,
}) => (
  <div>
    {people.map(person => (
      <Card key={person.id} {...person} />
    ))}
  </div>
);
