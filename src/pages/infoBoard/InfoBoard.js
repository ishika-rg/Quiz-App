import React from "react";
import {useState, useEffect} from 'react'
import "./InfoBoard.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import Categories from "../../data/Categories";
import Navbar from "../../components/navbar/Navbar";

const InfoBoard = ( {fetchQuestions} ) => {
  const location = useLocation();
  const navigate = useNavigate()
  const [category, setCategory] = useState(9)
  const [difficulty, setDifficulty] = useState('easy')


  const user_name = location.state.nmail.split("@")[0];

  // console.log("categories are : ", Categories);
  // console.log(location.state.nmail);

  // useEffect(() => {

  //   handleSubmit();

  // }, [])
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('submit button clicked!!')
    if(category && difficulty) {
      fetchQuestions(category, difficulty)

    }

    // console.log("name of user is ", user_name)

    navigate('/test_quiz', {state : {user_name, category, difficulty}})


  }

// console.log('selected values are : ', category, difficulty)
  return (
    <>
      <Navbar user={<FaUserCircle />}  user_name = {user_name}/>

      <div className="container">
        <div className="info_container">
          <h1>Test your skills with QuizzBuzz !!!</h1>

          <form onSubmit = { (e) => handleSubmit(e) }>
            <label>Select category :</label>
            <select 
            value = {category}
            onChange = {(e) => setCategory(e.target.value)} >
              {/* <option>Docker</option> */}
              {Categories.map((ele) => (
                <option key={ele.value} value={ele.value}>
                  {ele.category}
                </option>
              ))}
            </select>

            <label>Select difficulty :</label>
            <select 
            value = {difficulty}
            onChange={(e) => setDifficulty( 
              e.target.value) }>
              <option value='easy'>Easy</option>
              <option value = 'medium'>Medium</option>
              <option value = 'hard'>Hard</option>
            </select>

            <button className="start">Start Quiz</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InfoBoard;
