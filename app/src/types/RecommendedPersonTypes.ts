export interface RecommendedPersonTypes {
  status: "active" | "inactive";
  name: string;
  age: number;
  matchRate: number;
  tags: string[];
  profImage: string;
}
