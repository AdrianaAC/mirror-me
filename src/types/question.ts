export type QuestionOption = {
  label: string;
  value: number;
};

export type Question = {
  id: string;
  category: "energy" | "decision" | "social" | "work" | "emotion";
  prompt: string;
  helperText?: string;
  options: QuestionOption[];
};
