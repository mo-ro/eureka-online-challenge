export interface RecommendedPersonTypes {
  id: number;
  status: "active" | "inactive";
  fullName: string;
  age: number;
  matchingRate: number;
  tags: string[];
  avatar: string;
}
