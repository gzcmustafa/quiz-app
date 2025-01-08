import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export default function QuestionCard({
  questionsData,
  score,
  setScore,
  modal,
  setModal,
  count,
  setCount,
  amount,
}) {
  const [timer, setTimer] = useState(30);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showCorrect, setShowCorrect] = useState(false);

  const handleAnswer = (e) => {
    if (answered) return;
    const clickedAnswer = e.currentTarget.value;
    const isCorrect = clickedAnswer == questionsData[count]?.correct_answer;

    setSelectedAnswer(clickedAnswer);
    setShowCorrect(true);

    if (isCorrect) {
      setScore(score + 10);
    }

    setAnswered(true);

    setTimeout(() => {
      setCount(count + 1);
      setTimer(30);
      setAnswered(false);
      setShowCorrect(false);
      setSelectedAnswer(null);
      if (count == 9) setModal(true);
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer == 0 && count < amount) {
        setCount(count + 1);
        setTimer(30);
      } else if (count >= amount) {
        setModal(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const getButtonStyle = (answer) => {
    if (showCorrect) {
      if (answer === questionsData[count]?.correct_answer) {
        return "bg-emerald-500 hover:bg-emerald-600 text-white";
      }
      if (answer === selectedAnswer) {
        return "bg-rose-500 hover:bg-rose-600 text-white";
      }
    }
    return "bg-gray-800 hover:bg-gray-700 text-white border-2 border-indigo-500/20";
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="mb-8">
        <span className="bg-indigo-600 text-white text-2xl font-bold p-6 rounded-full shadow-lg shadow-indigo-500/50">
          {timer}
        </span>
      </div>

      <div className="bg-gray-800 relative shadow-2xl rounded-2xl p-8 max-w-4xl w-full mx-4 border border-indigo-500/20">
        <div className="absolute -top-5 right-4">
          <span className="bg-indigo-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
            {count + 1}/{amount}
          </span>
        </div>

        <div className="text-white text-xl font-medium mb-8 mt-4">
          {questionsData[count]?.question}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questionsData[count]?.answers?.map((answer, i) => (
            <Button
              key={i}
              value={answer}
              onClick={handleAnswer}
              disabled={answered}
              className={`${getButtonStyle(answer)} p-6 text-lg font-medium w-full justify-between transition-all duration-300 transform hover:scale-102 hover:shadow-lg`}
            >
              <span className="flex-1 text-left">{answer}</span>
              {showCorrect && (
                <span className="ml-2"> 
                  {answer === questionsData[count]?.correct_answer ? (
                    <Check className="h-6 w-6 text-white" />
                  ) : (
                    <X className="h-6 w-6 text-white" />
                  )}
                </span>
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
