import { useState } from "react";
import React from "react";
import style from "../styles/Registration.module.css";
import logo from "../assets/_6rtmJ20_400x400-removebg-preview.png";
import women_hugging from "../assets/wond.jpg"
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Registration = () => {

  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   phoneNumber: "",
  //   gender: "0",
  //   ageBracket: "0",
  //   attendantType: "0",
  //   occupation: "0",
  // });
  // const [error, setError] = useState("");

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleButtonClick = () => {
  //   const { firstName, lastName, email, password, phoneNumber, gender, ageBracket, attendantType, occupation } = formData;

  //   if(firstName.length < 2 || firstName.length > 50){
  //      setError("First Name must be between 2 and 50 characters");
  //      return
  //   }

  //   if(lastName.length < 2 || lastName.length > 50){
  //      setError("Last Name must be between 2 and 50 characters");
  //      return
  //   }

  //   if(!email.includes("@") || !email.includes(".com")){
  //     return setError("Invalid Email");
  //   }

  //   if(password.length < 6){
  //     return setError("Password should have at least 6 characters");
  //   };

  //   if(phoneNumber.length < 11 || phoneNumber.length > 11){
  //     return setError("Phone number must be 11 characters");
  //   };

  //   if(gender === "0"){
  //     return setError("Please select gender");
  //   }

  //   if(ageBracket === "0"){
  //     return setError("Please select age bracket");
  //   }

  //   if(attendantType === "0"){
  //     return("Please select attendant type");
  //   }

  //   if(occupation === "0"){
  //     return("Please select occupation");
  //   }


  //   const ftDetails = { firstName, lastName, email, password, phoneNumber, gender, ageBracket, attendantType, occupation };
  //   console.log(ftDetails);
  //   setError("");

  // }

  const [formData, setFormData] = useState({
    firstName: { value: "", error: "" },
    lastName: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    phoneNumber: { value: "", error: "" },
    gender: { value: "0", error: "" },
    ageBracket: { value: "0", error: "" },
    attendantType: { value: "0", error: "" },
    occupation: { value: "0", error: "" },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: { ...formData[name], value } });
  };

  const handleButtonClick = () => {
    let hasError = false;
    const updatedFormData = { ...formData };

    Object.keys(updatedFormData).forEach((key) => {
      const { value } = updatedFormData[key];
      if (!value.trim() || value === "0") {
        updatedFormData[key].error = `${key} is required`;
        hasError = true;
      } else {
        updatedFormData[key].error = "";
      }
    });

    if (hasError) {
      setFormData(updatedFormData);
      return;
    }

    const ftDetails = Object.fromEntries(Object.entries(updatedFormData).map(([key, { value }]) => [key, value]));
    console.log(ftDetails);
  };


  return (
    <div className={style.containers}>
      <div className={style.first_half}>
        <img src={logo} alt="" />
      </div>
      {/* <img src={women_hugging} alt="" /> */}
      <div className={style.second_half}>
        <h1 className={style.title}>First Timers Registration</h1>
        <Form>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={formData.firstName.value}
                onChange={handleChange}
              />
              {formData.firstName.error.length > 0 ? <p className={style.error}>{formData.firstName.error}</p> : ""}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={formData.lastName.value}
                onChange={handleChange}
              />
              {formData.lastName.error.length > 0 ? <p className={style.error}>{formData.lastName.error}</p> : ""}
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
              />
              {formData.email.error.length > 0 ? <p className={style.error}>{formData.email.error}</p> : ""}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={formData.password.value}
                onChange={handleChange}
              />
              {formData.password.error.length > 0 ? <p className={style.error}>{formData.password.error}</p> : ""}
            </Form.Group>
          </Row>

          <Form.Group className="mb-4" as={Col} controlId="formGridPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              value={formData.phoneNumber.value}
              onChange={handleChange}
            />
            {formData.phoneNumber.error.length > 0 ? <p className={style.error}>{formData.phoneNumber.error}</p> : ""}
          </Form.Group>

          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridGender">
              <Form.Select
                value={formData.gender.value}
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option value="0">Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </Form.Select>
              {formData.gender.error.length > 0 ? <p className={style.error}>{formData.gender.error}</p> : ""}
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAgeBracket">
              <Form.Select
                value={formData.ageBracket.value}
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option value="0">Age Bracket</option>
                <option value="1">18 - 30</option>
                <option value="2">31 - 50</option>
                <option value="3">51 - 70</option>
              </Form.Select>
              {formData.ageBracket.error.length > 0 ? <p className={style.error}>{formData.ageBracket.error}</p> : ""}
            </Form.Group>
          </Row>

          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridAttendantType">
              <Form.Select
                value={formData.attendantType.value}
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option value="0">Attendant Type</option>
                <option value="1">New Member</option>
                <option value="1">Visiting</option>
                <option value="1">Undecided</option>
                <option value="1">TCN Member (Another Campus)</option>
              </Form.Select>
              {formData.attendantType.error.length > 0 ? <p className={style.error}>{formData.attendantType.error}</p> : ""}
            </Form.Group>
            <Form.Group as={Col} controlId="formGridOccupation">
              <Form.Select
                value={formData.occupation.value}
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option value="0">Occupation</option>
                <option value="1">Look up list from the BE</option>
              </Form.Select>
              {formData.occupation.error.length > 0 ? <p className={style.error}>{formData.occupation.error}</p> : ""}
            </Form.Group>
          </Row>


        <div className={style.extra_container}>
          <Button variant="primary" onClick={handleButtonClick}>
            Register
          </Button>
          <p>Already registered? <Link to="/login">Login</Link></p>
        </div>
        </Form>
      </div>
    </div>
  );
};

export default Registration;

// 1. First Name
// 2. Last Name
// 3. Gender
// 4. Age Bracket
// 5. Phone number
// 6. Occupation
// 7. Attendant Type (New Member, Visiting, Undecided, TCN Member)
// 8. Attendance Count
// 9. Status (Integrated , Not Integrated)
// 10. Date

// What about email?
// Are we going to be updating the date from the backend?
// When are they going to input their passwords?
