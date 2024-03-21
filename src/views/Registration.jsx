import { useState, useEffect } from "react";
import React from "react";
import style from "../styles/Registration.module.css";
import logo from "../assets/_6rtmJ20_400x400-removebg-preview.png";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { Axios } from "axios";
import RegistrationForm from "../components/Form/RegistrationForm";

const Registration = () => {

  const [formData, setFormData] = useState({
    txtFirstName: { value: "", error: "" },
    txtLastName: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    confirmPassword: { value: "", error: ""},
    phoneNumber: { value: "", error: "" },
    ddlGender: { value: "0", error: "" },
    ddlAgeBracket: { value: "0", error: "" },
    ddlAttendantType: { value: "0", error: "" },
    ddlOccupation: { value: "0", error: "" },
  });

  const checkVal = ({ name, value }) => {
    if (name.startsWith("txt")) {
      if(value.trim().length < 4){
        return `Invalid ${name.slice(3)}`
      }
      return ""
    }
    
    if(name.startsWith("ddl")){
      if(value === '0'){
        return `Invalid ${name.slice(3)}`
      }
      return ""
    }

    if(name === "email"){
      if(value.trim().length < 5 || !value.includes("@") || !value.includes(".")){
        return `Invalid ${name}`;
      }
      return "";
    }

    if(name === "password"){
      if(value.trim().length < 6){
        return `Invalid ${name}`
      }
      return "";
    }

    if(name === "phoneNumber"){
      if(value.trim().length < 11){
        return `Invalid ${name}`
      }
      return "";
    }

    if(name === "confirmPassword"){
      if(value.trim().length < 6){
       return `Invalid ${name}` 
      }
      if(formData.password.value.trim() !== value.trim()){
        return `Passwords aren't matching`;
      }
      return ""
    }

    return "Unknown Error"
  }

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    const error = checkVal({ name, value });
    setFormData({ ...formData, [name]: { ...formData[name], value, error } });
  };

  const handleButtonClick = () => {
    let hasError = false;
    const updatedFormData = { ...formData };

    Object.keys(updatedFormData).forEach((name) => {
      const { value } = updatedFormData[name];

      const error = checkVal({name, value});
      if(error !== ""){
        updatedFormData[name].error = error;
        hasError = true;
        setFormData(updatedFormData)
      }
    });

    if(!hasError){
      const ftDetails = Object.fromEntries(Object.entries(updatedFormData).map(([key, { value }]) => [key, value]));
      console.log(ftDetails);
    } else{
      return;
    }
  };


  return (
    <div className={style.containers}>
      <div className={style.first_half}>
        <img src={logo} alt="" />
      </div>
      <div className={style.second_half}>
        <h1 className={style.title}>First Timers Registration</h1>
        {/* <Form>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={formData.txtFirstName.value}
                onChange={handleChange}
                name={"txtFirstName"}
              />
              {formData.txtFirstName.error.length > 0 ? <p className={style.error}>{formData.txtFirstName.error}</p> : ""}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={formData.txtLastName.value}
                onChange={handleChange}
                name={"txtLastName"}
              />
              {formData.txtLastName.error.length > 0 ? <p className={style.error}>{formData.txtLastName.error}</p> : ""}
            </Form.Group>
          </Row>

          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={formData.email.value}
                onChange={handleChange}
                name={"email"}
              />
              {formData.email.error.length > 0 ? <p className={style.error}>{formData.email.error}</p> : ""}
            </Form.Group>

          <Form.Group className="mb-4" as={Col} controlId="formGridPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              value={formData.phoneNumber.value}
              onChange={handleChange}
              name={"phoneNumber"}
            />
            {formData.phoneNumber.error.length > 0 ? <p className={style.error}>{formData.phoneNumber.error}</p> : ""}
          </Form.Group>

          </Row>

          <Row>
          <Form.Group as={Col} className="mb-4" controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={formData.password.value}
                onChange={handleChange}
                name={"password"}
              />
              {formData.password.error.length > 0 ? <p className={style.error}>{formData.password.error}</p> : ""}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword.value}
                onChange={handleChange}
                name={"confirmPassword"}
              />
              {formData.confirmPassword.error.length > 0 ? <p className={style.error}>{formData.confirmPassword.error}</p> : ""}
            </Form.Group>
          </Row>


          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridGender">
              <Form.Select
                value={formData.ddlGender.value}
                onChange={handleChange}
                name={"ddlGender"}
                aria-label="Default select example"
              >
                <option value="0">Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </Form.Select>
              {formData.ddlGender.error.length > 0 ? <p className={style.error}>{formData.ddlGender.error}</p> : ""}
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAgeBracket">
              <Form.Select
                value={formData.ddlAgeBracket.value}
                onChange={handleChange}
                name={"ddlAgeBracket"}
                aria-label="Default select example"
              >
                <option value="0">Age Bracket</option>
                <option value="1">18 - 30</option>
                <option value="2">31 - 50</option>
                <option value="3">51 - 70</option>
              </Form.Select>
              {formData.ddlAgeBracket.error.length > 0 ? <p className={style.error}>{formData.ddlAgeBracket.error}</p> : ""}
            </Form.Group>
          </Row>

          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridAttendantType">
              <Form.Select
                value={formData.ddlAttendantType.value}
                onChange={handleChange}
                name={"ddlAttendantType"}
                aria-label="Default select example"
              >
                <option value="0">Attendant Type</option>
                <option value="1">New Member</option>
                <option value="2">Visiting</option>
                <option value="3">Undecided</option>
                <option value="4">TCN Member (Another Campus)</option>
              </Form.Select>
              {formData.ddlAttendantType.error.length > 0 ? <p className={style.error}>{formData.ddlAttendantType.error}</p> : ""}
            </Form.Group>
            <Form.Group as={Col} controlId="formGridOccupation">
              <Form.Select
                value={formData.ddlOccupation.value}
                onChange={handleChange}
                name={"ddlOccupation"}
                aria-label="Default select example"
              >
                <option value="0">Occupation</option>
                <option value="1">Look up list from the BE</option>
              </Form.Select>
              {formData.ddlOccupation.error.length > 0 ? <p className={style.error}>{formData.ddlOccupation.error}</p> : ""}
            </Form.Group>
          </Row>


        <div className={style.extra_container}>
          <Button variant="primary" onClick={handleButtonClick}>
            Register
          </Button>
          <p>Already registered? <Link to="/login">Login</Link></p>
        </div>
        </Form> */}

        <RegistrationForm/>
      </div>
    </div>
  );
};

export default Registration;

