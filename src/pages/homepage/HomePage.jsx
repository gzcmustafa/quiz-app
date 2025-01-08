import React, { useState } from 'react'
import { Lightbulb } from 'lucide-react';
import BtnLevel from '../../components/buttonLevel/BtnLevel';
import { useNavigate } from 'react-router-dom';
import Category from '@/components/categoryCard/Category';
import TotalQuestion from '@/components/amountQuestion/TotalQuestion';
import QuestionType from '@/components/question/QuestionType';

export default function HomePage() {
  const difficulty = ["easy", "medium", "hard"];
  const [difficultySelect, setDifficultySelect]= useState("");
  const [selectType, setSelectType] = useState("")
  const[category,setCategory] = useState()
  const [totalQuestion,setTotalQuestion] = useState("")

  const questionTypes = ["multiple","..."]
  const amountsQuestion = [
    0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
  ]
  const categories = [
    { id: 9, name: "General Knowledge" },
    { id: 10, name: "Entertainment: Books" },
    { id: 11, name: "Entertainment: Film" },
    { id: 12, name: "Entertainment: Music" },
    { id: 13, name: "Entertainment: Musicals & Theatres" },
    { id: 14, name: "Entertainment: Television" },
    { id: 15, name: "Entertainment: Video Games" },
    { id: 16, name: "Entertainment: Board Games" },
    { id: 17, name: "Science & Nature" },
    { id: 18, name: "Science: Computers" },
    { id: 19, name: "Science: Mathematics" },
    { id: 20, name: "Mythology" },
    { id: 21, name: "Sports" },
    { id: 22, name: "Geography" },
    { id: 23, name: "History" },
    { id: 24, name: "Politics" },
    { id: 25, name: "Art" },
    { id: 26, name: "Celebrities" },
    { id: 27, name: "Animals" },
    { id: 28, name: "Vehicles" },
    { id: 29, name: "Entertainment: Comics" },
    { id: 30, name: "Science: Gadgets" },
    { id: 31, name: "Entertainment: Japanese Anime & Manga" },
    { id: 32, name: "Entertainment: Cartoon & Animations" }
  ];

  const navigate = useNavigate();

  
  

  const startQuiz = () => {
    if(difficultySelect && (selectType === "multiple") && (totalQuestion > 1) && category ){
       navigate(`/quiz/${totalQuestion}/${category}/${difficultySelect}/${selectType}`)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden overflow-x-hidden bg-gradient-to-r from-orange-600 to-rose-900">
  
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -left-4 top-1/4 w-24 h-24 bg-white rounded-full blur-xl animate-pulse" />
      <div className="absolute right-10 top-1/3 w-20 h-20 bg-white rounded-full blur-xl animate-pulse delay-700" />
      <div className="absolute left-1/5 bottom-1/4 w-24 h-24 bg-white rounded-full blur-xl animate-pulse delay-1000" />
      

      <div className="absolute top-20 left-20 text-6xl text-white font-bold">?</div>
      <div className="absolute top-40 right-32 text-8xl text-white font-bold rotate-12">?</div>
      <div className="absolute bottom-20 left-1/4 text-7xl text-white font-bold -rotate-12">?</div>
      <div className="absolute top-1/3 right-1/4 text-5xl text-white font-bold rotate-45">?</div>
      
   
      <div className="absolute top-1/4 left-1/3 w-12 h-12 border-2 border-white rounded-lg rotate-45 animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border-2 border-white rounded-full animate-float delay-500" />
      <div className="absolute top-1/2 left-1/4 w-10 h-10 border-2 border-white rotate-12 animate-float delay-1000" />
    </div>

   
    <div className="relative z-10 max-w-2xl mx-auto text-center px-6 h-screen flex flex-col items-center justify-center">
      <div className=" mb-2 mt-4 md:mb-8 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-teal-400 rounded-full blur opacity-30 animate-pulse"></div>
        <Lightbulb color="#aeff00"className="w-20 h-20 text-white relative" />
      </div>
      
      <h1 className="text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
        Quiz App
      </h1>
      
      <p className="text-xl text-white mb-12">
        Challenge yourself with our interactive quizzes and learn something new today!
      </p>
      
      <button className="relative group">
        <div className="absolute -inset-1  bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur  group-hover:opacity-10  transition duration-200"></div>
        <div onClick={startQuiz} className="relative px-12 py-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg text-white font-semibold transition-all duration-200 hover:bg-opacity-15">
          Start Quiz
        </div>
      </button>

      <div className=' mt-5 flex flex-col justify-center items-center gap-2 md:flex md:flex-row md:justify-center md:items-center md:mb-0 md:pt-10 md:gap-4'>
      <Category  data={categories} setCategory={setCategory}/>
      <TotalQuestion data={amountsQuestion} setTotalQuestion={setTotalQuestion}/>
      <QuestionType data={questionTypes} setSelectType={setSelectType}/>
      </div>
      <BtnLevel data={difficulty} setDifficultySelect={setDifficultySelect}></BtnLevel>


    </div>
  </div>
  )
}
