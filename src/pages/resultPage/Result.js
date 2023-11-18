import React from "react";
import "./Result.css";
import { useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Result = ({ sc, setSc }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const final_score = location.state.score;
  const user_name = location.state.user_name;
  // console.log(final_score);

  const corr = final_score;
  const incorrect = 10 - corr;

  const handleRestart = () => {
    // console.log(corr)
    setSc(0);
    navigate("/");
  };

  return (
    <div className="result_container">
      <Navbar user={<FaUserCircle />} user_name={user_name} />
      <p className="top">Your score : {final_score} </p>
      <div className="progress_detail">
        <div className="correct_info">
          <p>correct answers : </p>
          <CircularProgressbar
            value={corr * 10}
            text={`${corr} / 10`}
            background={true}
            styles={{
              root: {
                width: 130,
                height: 150,
                fontWeight: "bold",
              },
              path: {
                // stroke: `rgba(62, 152, 199, ${correct})`,
                stroke: "green",
              },
              // Customize the text
              text: {
                // Text color
                fill: "green",
                // Text size
                fontSize: "16px",
              },
              // Customize background - only used when the `background` prop is true
              background: {
                fill: "#e8eaec",
              },
            }}
          />
          ;
        </div>
        <div className="incorrect_info">
          <p>wrong answers : </p>

          <CircularProgressbar
            value={incorrect * 10}
            text={`${incorrect} / 10`}
            background={true}
            styles={{
              root: {
                width: 130,
                height: 150,
                fontWeight: "bold",
              },
              path: {
                // stroke: `rgba(62, 152, 199, ${correct})`,
                stroke: "#f01e1e",
              },
              // Customize the text
              text: {
                // Text color
                fill: "#f01e1e",
                // Text size
                fontSize: "16px",
              },
              // Customize background - only used when the `background` prop is true
              background: {
                fill: "#e8eaec",
              },
            }}
          />
        </div>
      </div>

      <button className="restart_btn" onClick={handleRestart}>
        Play Quiz
      </button>
    </div>
  );
};

export default Result;
