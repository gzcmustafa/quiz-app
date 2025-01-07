import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../../api/api'
import QuestionCard from '../../components/questionCard/QuestionCard'
import Modal from '@/components/modals/Modal'

export default function Quiz() {
    const {difficulty,amount} = useParams()
    const [questionsData, setQuestionsData] = useState([])
    const [score,setScore] = useState(0)
    const [count,setCount] = useState(0)
    const [modal,setModal] = useState(false)

    useEffect(() => {
        const getData = async() => {
            const data = await api.fetchQuizData(difficulty,amount)
            setQuestionsData(data)
        }
     getData();
    },[])

    console.log(questionsData)

  return (
    <div>
        {
          modal ? <Modal/> : 
          <QuestionCard
            questionsData={questionsData}
            score={score}
            setScore={setScore}
            count={count}
            setCount={setCount}
            modal={modal}
            setModal={setModal}
        />
        }
    </div>
  )
}
