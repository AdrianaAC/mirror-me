import clsx from "clsx";
import type { Question } from "@/types/question";

type Props = {
  question: Question;
  selectedValue?: number;
  onSelect: (value: number) => void;
};

export default function QuestionCard({
  question,
  selectedValue,
  onSelect,
}: Props) {
  return (
    <section className="card p-6 md:p-8">
      <div className="mb-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
          {question.category}
        </p>

        <h2 className="text-2xl font-bold leading-tight md:text-3xl">
          {question.prompt}
        </h2>

        {question.helperText ? (
          <p className="muted mt-3 text-sm">{question.helperText}</p>
        ) : null}
      </div>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.label}
            type="button"
            onClick={() => onSelect(option.value)}
            className={clsx("answer-button", {
              selected: selectedValue === option.value,
            })}
          >
            <span className="font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
