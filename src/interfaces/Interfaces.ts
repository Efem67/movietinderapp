export interface optionConfig {
  option: "accept" | "reject";
  movieId: string;
}

export interface importDataConfig {
  id: string;
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
}
