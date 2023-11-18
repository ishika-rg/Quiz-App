import React from "react";
import "./Home.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../assests/hero.avif";

const Home = () => {
  const [nmail, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const inputname = (e) => {
    let u_name = e.target.value;
    setUserName(u_name);
  };
  const inputemail = (e) => {
    let val = e.target.value;
    // console.log(val)
    setEmail(val);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (userName == "") {
      toast.error("Please enter all details!");
    } else if (!mailformat.test(nmail)) {
      toast.error("Please enter valid email address!!");
    } else {
      toast.success("Successfully registered!!");
      // console.log(nmail)
      // console.log("registered mail :", nmail);

      setTimeout(() => {
        navigate("/quiz", { state: { nmail } });
      }, 1000);
    }
  };
  return (
    <>
      <Navbar />
      <div className="home">
        {<ToastContainer />}
        <form className="homeForm" onSubmit={(e) => submitHandler(e)}>
          <label>Enter your name :</label>
          <input type="text" value={userName} onChange={(e) => inputname(e)} />
          <label>Enter your email address :</label>
          <input type="email" value={nmail} onChange={(e) => inputemail(e)} />
          <button type="submit">Submit</button>
        </form>

        <div className="hero_img">
          <img src={Hero} />
        </div>
      </div>
    </>
  );
};

export default Home;
