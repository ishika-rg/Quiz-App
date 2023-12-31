import { React, useState, useEffect } from "react";
import "./QuizPage.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { FaUserCircle } from "react-icons/fa";
import LoadingIcons from "react-loading-icons";
import Question from "../../components/question/Question";

const QuizPage = ({
  score,
  setScore,
  questions,
  setQuestions,
  fetchQuestions,
}) => {
  const location = useLocation();
  // console.log("username", location.state.user_name);
  // console.log("difficulty", location.state.difficulty);
  // console.log("category", location.state.category);

  const user_name = location.state.user_name;
  // const category = location.state.category;
  // const difficulty = location.state.difficulty;

  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  // console.log(user_name)
  // console.log("questions in quiz page", questions);

  useEffect(() => {
    
    if (questions.length !== 0) {
        // set random options

      setOptions(
        questions &&
          handleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers,
          ])
      );
    } else {
      console.log("Data  not loaded ...");
      
    }
  }, [currQues, questions]);

  // console.log('quiz questions', questions)
  const handleShuffle = (ele) => {
    // console.log("this is handle shuffle function");
    return ele.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz_container">

      <Navbar user={<FaUserCircle />} user_name={user_name} />

      {
      questions.length !== 0 
       ? (
        <>
          <div className="quiz_header">
            <div className="q_no"> Ques : {currQues + 1} / 10 </div>
            <div className="q_category"> {questions[0].category} </div>
          </div>
          <Question
            user_name = {user_name}
            questions={questions}
            setQuestions={setQuestions}
            currQues={currQues}
            setCurrQues={setCurrQues}
            score={score}
            setScore={setScore}
            options={options}
            correct={questions[currQues]?.correct_answer}
          />

        </>
      ) : (
        <>

          <LoadingIcons.Oval
            stroke="#000000"
            fill="#2e2e2e"
            width="400px"
            height="100px"
          />


        {/* {
          setTimeout(() => {
        // navigate("/quiz", { state: { nmail } });
        <LoadingIcons.Oval
            stroke="#000000"
            fill="#2e2e2e"
            width="400px"
            height="100px"
          />
      }, 10000)
    } */}


        </>
      )}
    </div>
  );
};

export default QuizPage;

