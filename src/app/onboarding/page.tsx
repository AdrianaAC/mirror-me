"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import { questions } from "@/lib/questions";
import { buildProfile } from "@/lib/profile-builder";

export default function OnboardingPage() {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const currentQuestion = questions[currentIndex];
  const currentValue = answers[currentQuestion.id];

  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);

  const isLastQuestion = currentIndex === questions.length - 1;

  function handleSelect(value: number) {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  }

  function handleNext() {
    if (currentValue === undefined) return;

    const updatedAnswers = {
      ...answers,
      [currentQuestion.id]: currentValue,
    };

    if (isLastQuestion) {
      const profile = buildProfile(updatedAnswers);
      sessionStorage.setItem(
        "mirrorme_answers",
        JSON.stringify(updatedAnswers),
      );
      sessionStorage.setItem("mirrorme_profile", JSON.stringify(profile));
      router.push("/profile");
      return;
    }

    setAnswers(updatedAnswers);
    setCurrentIndex((prev) => prev + 1);
  }

  function handleBack() {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  }

  return (
    <main className="container-app min-h-screen py-10 md:py-14">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
            MirrorMe Onboarding
          </p>
          <h1 className="mt-2 text-3xl font-black md:text-4xl">
            Build your first mirror profile
          </h1>
        </div>

        <div className="text-right">
          <p className="muted text-sm">Question</p>
          <p className="text-lg font-bold">
            {currentIndex + 1} / {questions.length}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <ProgressBar current={answeredCount} total={questions.length} />
      </div>

      <QuestionCard
        question={currentQuestion}
        selectedValue={currentValue}
        onSelect={handleSelect}
      />

      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={handleBack}
          className="secondary-button"
          disabled={currentIndex === 0}
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="primary-button"
          disabled={currentValue === undefined}
        >
          {isLastQuestion ? "Generate profile" : "Next question"}
        </button>
      </div>
    </main>
  );
}
