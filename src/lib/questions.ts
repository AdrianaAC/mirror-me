import type { Question } from "@/types/question";

export const questions: Question[] = [
  {
    id: "social_recharge",
    category: "social",
    prompt: "After an exhausting week, what recharges you the most?",
    helperText: "Pick the option that feels most naturally true.",
    options: [
      { label: "Being alone and fully unplugging", value: -2 },
      { label: "Quiet time with one or two close people", value: -1 },
      { label: "A mix of alone time and light social plans", value: 0 },
      { label: "Seeing friends and doing something fun", value: 1 },
      { label: "A lively social plan with lots of people", value: 2 },
    ],
  },
  {
    id: "decision_making",
    category: "decision",
    prompt: "When making an important decision, what do you trust first?",
    options: [
      { label: "My gut feeling almost immediately", value: -2 },
      { label: "My instincts, then some reflection", value: -1 },
      { label: "A balance of instinct and reasoning", value: 0 },
      { label: "Reasoning, with some room for instinct", value: 1 },
      { label: "Logic, evidence, and structured analysis", value: 2 },
    ],
  },
  {
    id: "risk_preference",
    category: "decision",
    prompt: "Which statement feels most like you?",
    options: [
      { label: "I avoid risk whenever possible", value: -2 },
      { label: "I prefer safe and predictable paths", value: -1 },
      { label: "I weigh both security and opportunity", value: 0 },
      { label: "I accept risk when the reward feels meaningful", value: 1 },
      { label: "I am energized by bold leaps and uncertainty", value: 2 },
    ],
  },
  {
    id: "work_structure",
    category: "work",
    prompt: "What kind of work environment helps you perform best?",
    options: [
      { label: "Very clear structure, routines, and expectations", value: -2 },
      { label: "Mostly structured, with some flexibility", value: -1 },
      { label: "A balanced environment", value: 0 },
      { label: "Flexible and open, with light guidance", value: 1 },
      { label: "Highly autonomous and self-directed", value: 2 },
    ],
  },
  {
    id: "emotion_expression",
    category: "emotion",
    prompt: "How do you usually handle strong emotions?",
    options: [
      { label: "I keep them to myself almost completely", value: -2 },
      { label: "I process them privately first", value: -1 },
      { label: "It depends on the situation", value: 0 },
      { label: "I usually talk them through with someone", value: 1 },
      { label: "I express them openly and immediately", value: 2 },
    ],
  },
  {
    id: "people_energy",
    category: "social",
    prompt: "In group settings, you usually...",
    options: [
      { label: "Observe more than participate", value: -2 },
      { label: "Speak when I have something meaningful to add", value: -1 },
      { label: "Adapt depending on the group", value: 0 },
      { label: "Engage easily and contribute often", value: 1 },
      { label: "Naturally take up space and energize the group", value: 2 },
    ],
  },
  {
    id: "problem_solving",
    category: "work",
    prompt: "When you hit a hard problem, your first instinct is to...",
    options: [
      { label: "Step back and feel my way through it", value: -2 },
      { label: "Reflect informally before acting", value: -1 },
      { label: "Think and test a bit at the same time", value: 0 },
      { label: "Break it into parts and analyze it", value: 1 },
      { label: "Create a structured plan before moving", value: 2 },
    ],
  },
  {
    id: "life_change",
    category: "energy",
    prompt: "How do you feel about major life changes?",
    options: [
      { label: "I find them very destabilizing", value: -2 },
      { label: "I need time and certainty to adapt", value: -1 },
      { label: "I can adapt with the right support", value: 0 },
      { label: "I often welcome change if it has purpose", value: 1 },
      { label: "I actively seek reinvention and new chapters", value: 2 },
    ],
  },
];
