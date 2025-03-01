import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../../api/api'
import QuestionCard from '../../components/question/QuestionCard'
import Modal from '@/components/modals/Modal'


export default function Quiz() {
    const {difficulty,amount,category,type} = useParams()
    const [questionsData, setQuestionsData] = useState([])
    const [score,setScore] = useState(0)
    const [count,setCount] = useState(0)
    const [modal,setModal] = useState(false)

    useEffect(() => {
        const getData = async() => {
            const data = await api.fetchQuizData(difficulty, amount,category,type)
            setQuestionsData(data)
        }
     getData();
    },[])

    console.log(amount)
    console.log(count)

  return (
    <div>
        {
          modal ? <Modal amount={amount} score={score}/> : 
          <QuestionCard
            amount={amount}
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
