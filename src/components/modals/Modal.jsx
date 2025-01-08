import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useNavigate } from 'react-router-dom';

export default function Modal({score,amount}) {
  const navigate = useNavigate();

  const handleStartAgain = () => {
    navigate('/')
  }
 
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle><h1 className='text-3xl'>Congratulations 🎉</h1></CardTitle>
        <CardDescription><h2 className='text-xl'>You have completed the test.</h2></CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className='text-2xl'>Your score: {score} / {amount * 10} </h2>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleStartAgain} >Start Again</Button>
      </CardFooter>
    </Card>
      
    </div>
  )
}
