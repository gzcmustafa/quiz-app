import React, { useState } from 'react'
import { Lightbulb } from 'lucide-react';
import BtnLevel from '../../components/button/BtnLevel';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const difficulty = ["easy", "medium", "hard"];
  const [difficultySelect, setDifficultySelect]= useState("");
  const navigate = useNavigate();

  console.log(difficultySelect)
  const TOTAL_QUESTION = 10;

  const startQuiz = () => {
    if(difficultySelect){
       navigate(`/quiz/${difficultySelect}/${TOTAL_QUESTION}`)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-r from-orange-600 to-rose-900">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -left-4 top-1/4 w-24 h-24 bg-white rounded-full blur-xl animate-pulse" />
      <div className="absolute right-10 top-1/3 w-32 h-32 bg-white rounded-full blur-xl animate-pulse delay-700" />
      <div className="absolute left-1/3 bottom-1/4 w-40 h-40 bg-white rounded-full blur-xl animate-pulse delay-1000" />
      
      {/* Question mark decorations */}
      <div className="absolute top-20 left-20 text-6xl text-white font-bold">?</div>
      <div className="absolute top-40 right-32 text-8xl text-white font-bold rotate-12">?</div>
      <div className="absolute bottom-20 left-1/4 text-7xl text-white font-bold -rotate-12">?</div>
      <div className="absolute top-1/3 right-1/4 text-5xl text-white font-bold rotate-45">?</div>
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 left-1/3 w-12 h-12 border-2 border-white rounded-lg rotate-45 animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border-2 border-white rounded-full animate-float delay-500" />
      <div className="absolute top-1/2 left-1/4 w-10 h-10 border-2 border-white rotate-12 animate-float delay-1000" />
    </div>

    {/* Main content */}
    <div className="relative z-10 max-w-2xl mx-auto text-center px-6 h-screen flex flex-col items-center justify-center">
      <div className="mb-8 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-teal-400 rounded-full blur opacity-30 animate-pulse"></div>
        <Lightbulb color="#aeff00"className="w-20 h-20 text-white relative" />
      </div>
      
      <h1 className="text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
        Quiz App
      </h1>
      
      <p className="text-xl text-purple-100 mb-12">
        Challenge yourself with our interactive quizzes and learn something new today!
      </p>
      
      <button className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-200"></div>
        <div onClick={startQuiz} className="relative px-12 py-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg text-white font-semibold transition-all duration-200 hover:bg-opacity-15">
          Start Quiz
        </div>
      </button>

     <BtnLevel data={difficulty} setDifficultySelect={setDifficultySelect}></BtnLevel>
     

    </div>
  </div>
  )
}
