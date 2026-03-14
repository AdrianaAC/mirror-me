import type { MirrorProfile } from "@/types/profile";

type AnswersMap = Record<string, number>;

function average(values: number[]) {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function getSocialEnergy(score: number): MirrorProfile["socialEnergy"] {
  if (score <= -0.75) return "low";
  if (score >= 0.75) return "high";
  return "balanced";
}

function getDecisionStyle(score: number): MirrorProfile["decisionStyle"] {
  if (score <= -0.75) return "intuitive";
  if (score >= 0.75) return "analytical";
  return "balanced";
}

function getRiskStyle(score: number): MirrorProfile["riskStyle"] {
  if (score <= -0.75) return "security-first";
  if (score >= 0.75) return "risk-tolerant";
  return "balanced";
}

function getWorkStyle(score: number): MirrorProfile["workStyle"] {
  if (score <= -0.75) return "structured";
  if (score >= 0.75) return "exploratory";
  return "balanced";
}

function getEmotionalStyle(score: number): MirrorProfile["emotionalStyle"] {
  if (score <= -0.75) return "reserved";
  if (score >= 0.75) return "expressive";
  return "balanced";
}

function buildSummary(profile: Omit<MirrorProfile, "summary">) {
  const parts = [
    `You seem to have ${profile.socialEnergy} social energy.`,
    `Your decision-making style appears ${profile.decisionStyle}.`,
    `Your relationship with risk is ${profile.riskStyle}.`,
    `Your preferred work style is ${profile.workStyle}.`,
    `Emotionally, you come across as ${profile.emotionalStyle}.`,
  ];

  return parts.join(" ");
}

export function buildProfile(answers: AnswersMap): MirrorProfile {
  const socialScore = average([
    answers.social_recharge ?? 0,
    answers.people_energy ?? 0,
  ]);

  const decisionScore = average([
    answers.decision_making ?? 0,
    answers.problem_solving ?? 0,
  ]);

  const riskScore = average([
    answers.risk_preference ?? 0,
    answers.life_change ?? 0,
  ]);

  const workScore = average([
    answers.work_structure ?? 0,
    answers.problem_solving ?? 0,
  ]);

  const emotionalScore = average([
    answers.emotion_expression ?? 0,
  ]);

  const profileWithoutSummary = {
    socialEnergy: getSocialEnergy(socialScore),
    decisionStyle: getDecisionStyle(decisionScore),
    riskStyle: getRiskStyle(riskScore),
    workStyle: getWorkStyle(workScore),
    emotionalStyle: getEmotionalStyle(emotionalScore),
  };

  return {
    ...profileWithoutSummary,
    summary: buildSummary(profileWithoutSummary),
  };
}
