import React from "react";
import style from "../styles/Registration.module.css";
import logo from "../assets/_6rtmJ20_400x400-removebg-preview.png";
import RegistrationForm from "../components/Form/RegistrationForm";

const Registration = () => {

  return (
    <div className={style.containers}>
      <div className={style.first_half}>
        <img src={logo} alt="" />
      </div>
      <div className={style.second_half}>
        <h1 className={style.title}>First Timers Registration</h1>
          <RegistrationForm/>
      </div>
    </div>
  );
};

export default Registration;

