import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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

  const getButtonStyle = (answer) => {
    if (showCorrect) {
      if (answer === questionsData[count]?.correct_answer) return "bg-green-500"; 
      if (answer === selectedAnswer) return "bg-red-500"; 
    }
    return ; 
  };

  return (
    <div className="">
      <div>Time Left--{timer}</div>
      <div>
        {count + 1}/10 - {questionsData[count]?.question}
      </div>
      {questionsData[count]?.answers?.map((answer, i) => (
        <Button
          className={getButtonStyle(answer)} 
          onClick={handleAnswer}
          key={i}
          value={answer}
          disabled={answered} 
        >
          {answer}
        </Button>
      ))}
    </div>
  );
}
