import {BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Introduce from "./pages/homepage/HomePage"
import Quiz from "./pages/quiz/Quiz"
import PageContainer from "./containers/PageContainer"
import HomePage from "./pages/homepage/HomePage"


function App() {


  return (
    <>
    
        <Router>
            <Routes>
             <Route path="/" element={<HomePage/>}/>
              <Route path="/quiz/:difficulty/:amount" element={<Quiz/>}/>
              <Route/>
            </Routes>
          </Router>

    </>
  )
}

export default App
