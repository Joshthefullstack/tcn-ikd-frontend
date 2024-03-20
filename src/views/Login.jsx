import React, { useState } from 'react'
import { Form, Row, Col, Button } from "react-bootstrap"
import style from "../styles/Login.module.css";
import logo from "../assets/_6rtmJ20_400x400-removebg-preview.png";
import { Link } from "react-router-dom";

const Login = () => {

  const [loginForm, setLoginForm] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" }
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: { ...loginForm[name], value } });
  }

  const handleButtonClick = () => {
    let hasError = false;
    const updatedLoginForm = { ...loginForm };

    Object.keys(updatedLoginForm).forEach((key) => {
      const { value } = updatedLoginForm[key];

      if(key === "email") {
        if(!value.includes("@") && !value.includes(".com")){
          updatedLoginForm[key].error = "Invalid email";
          hasError = true;
        }
      }

      if (!value.trim() || value === "0") {
        updatedLoginForm[key].error = `${key} is required`;
        hasError = true;
      } else {
        updatedLoginForm[key].error = "";
      }
    });

    if (hasError) {
      setLoginForm(updatedLoginForm);
      return;
    }

    console.log(updatedLoginForm);
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
                value={loginForm.email.value}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={loginForm.password.value}
                onChange={handleChange}
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