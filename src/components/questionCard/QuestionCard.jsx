import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";

export default function QuestionCard({
  questionsData,
  score,
  setScore,
  modal,
  setModal,
  count,
  setCount,
}) {
  const [timer, setTimer] = useState(30);
  const [answered, setAnswered] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const selectedAnswer = (e) => {
    console.log(e.currentTarget.value);
    const isCorrect =
      e.currentTarget.value == questionsData[count]?.correct_answer;
    console.log(isCorrect);
    if (isCorrect) setScore(score + 10);
    setCount(count + 1);
    setTimer(30)
    if (count == 9) setModal(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer == 0 && count < 10) {
        setCount(count + 1);
        setTimer(30);
      } else if (count >= 10) {
        setModal(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className="">
      <div>Time Left--{timer}</div>
      <div>
        {count + 1}/10 - {questionsData[count]?.question}
      </div>
      {questionsData[count]?.answers?.map((answer, i) => (
        <Button
          // variant={getButtonStyle(answer)}
          onClick={selectedAnswer}
          key={i}
          value={answer}
        >
          {answer}
        </Button>
      ))}
    </div>
  );
}
