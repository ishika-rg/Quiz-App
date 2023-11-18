import React from "react";
import "./Question.css";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const Question = ({
  user_name,
  questions,
  setQuestions,
  currQues,
  setCurrQues,
  score,
  setScore,
  options,
  correct,
}) => {

  const navigate = useNavigate()
  const [selected, setSelected] = useState()
  const [selectStyle, setSelectStyle] = useState('')
  const handleCheck = (i) => {

    // setSelected(i)
    setSelected(i)

    if(i === correct){
      setScore(score+1)
    }
    // setSelectStyle('new')
    // console.log("This is handle check button,", i)
  }
  const handleSelect = (i) => {

    // console.log(i, "this is handle select function!!")
    if (selected === i && selected === correct){
      // console.log('correct answer!!!!!!')
      return "selected_btn"

    }
    else if (selected === i && selected !== correct){
      // console.log('not correct answer!!!!!!')
      return "wrong"
    }
    else if(i === correct){
      // console.log('correct answer is .........!!!!!!')
      return "selected_btn"
    }
  }

  const handleSaveNext = () => {
    
    // console.log("this is save and next btn..")
    // console.log(currQues)
    
    if(currQues > 8){
      navigate('/result', {state : {user_name, score}})
    }
    else if(selected){
      setCurrQues(currQues+1)
      setSelected()
    }
    else{
      toast.error('Please select an option first!')

    }
    // console.log("till now, the scroe is : ", score)

  }
  

  const handleQuit = () => {
    // console.log("quit button")
    setCurrQues(0)
    setQuestions([])
    navigate('/')
    
  }
  return (
    <div className="ques_container">
      {<ToastContainer />}

      <div className="ques">
        <h2>
          {questions[currQues].question
            .replaceAll("&#039;", "'")
            .replaceAll("&rsquo;", "'")
            .replaceAll("&shy;", "-")
            .replaceAll("&quot;", '"')
            }
        </h2>
      </div>
      <div className="q_options">
        {options &&
          options.map((i) => (
            <button 
            key={i} 
            // className="option_btn"
            className = {`option_btn ${selected && handleSelect(i)}`}
            disabled = {selected}
            onClick = {() => handleCheck(i)}
            >

              {/* {ele.replaceAll("&#039;", "'").replaceAll("&rsquo;", "'")} */}
              {i}
            </button>
          ))}
      </div>

      <div className="ques_btn">
        <button className="previous_btn"
        onClick = {() => handleQuit()}
        >Quit</button>
        <button className="next_btn"
        onClick = {() => handleSaveNext()}
        >
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default Question;
