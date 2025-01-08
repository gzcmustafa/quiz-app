
const shuffleArray = (array) => {
    return [...array].sort(()=> Math.random() - 0.5)
}

export const fetchQuizData = async (difficulty, amount,category,type) => {
    const url=`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
    const data = await (await fetch(url)).json();
    return data.results.map((dt)=>({
        ...dt,
        answers:shuffleArray([...dt.incorrect_answers, dt.correct_answer])
    }))
}