import {React , useState} from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/homePage/Home";
import InfoBoard from "./pages/infoBoard/InfoBoard";
import Result from "./pages/resultPage/Result";

import { Routes, Route } from "react-router-dom";
import QuizPage from "./pages/quizPage/QuizPage";

function App() {

  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0)


  const fetchQuestions = async(category , difficulty ) => {

    // console.log("Quiz Questions are fetched here!!! ");

    // const response = await axios.get(`https://opentdb.com/api.php?amount=10
    // &category=${category}&difficulty=${difficulty}&type=multiple`)

    const response = await axios.get(`https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`)


    // console.log('the fetched data are:', response.data.results)
    setQuestions(response.data.results)

    // console.log(setQuestions)
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route
          path="/quiz"
          element={<InfoBoard fetchQuestions={fetchQuestions} />}
        ></Route>

        <Route path="/test_quiz" 
        element={<QuizPage 
          score = {score}
          setScore = {setScore}
          questions = {questions}
          setQuestions = {setQuestions}
          fetchQuestions={fetchQuestions}
        
        
        />}>

        </Route>

        <Route path="/result"
        element = {<Result 
        sc = {score}
        setSc = {setScore} 
        />} ></Route>

      </Routes>
    </div>
  );
}

export default App;
