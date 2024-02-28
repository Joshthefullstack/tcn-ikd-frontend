import React, { useState } from 'react'
import { Form, Row, Col, Button } from "react-bootstrap"
import style from "../styles/Login.module.css";
import logo from "../assets/_6rtmJ20_400x400-removebg-preview.png";
import { Link } from "react-router-dom";

const Login = () => {

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  }

  const handleButtonClick = () => {
    const loginDetails = {
      email: emailValue,
      password: passwordValue,
    }
    console.log(loginDetails);
  }
  
  return (
    <div>
      <div className={style.containers}>
      <div className={style.first_half}>
        <img src={logo} alt="" />
      </div>
      <div className={style.second_half}>
        <h1 className={style.title}>First Timers Login</h1>
        <Form>

        <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter First Email"
                value={emailValue}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={passwordValue}
                onChange={handlePasswordChange}
              />
            </Form.Group>

        <div className={style.extra_container}>
          <Button variant="primary" onClick={handleButtonClick}>
            Login
          </Button>
          <p>Yet to be registered? <Link to="/">Register</Link></p>
        </div>
        </Form>
      </div>
    </div>
    </div>
  )
}

export default Login