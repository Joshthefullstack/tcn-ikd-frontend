import React, { useState } from "react";
import { FormInput, SelectInput } from "./Form";
import { Form, Row, Button } from "react-bootstrap";
import style from "../../styles/Registration.module.css";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    txtFirstName: { value: "", error: "" },
    txtLastName: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    confirmPassword: { value: "", error: "" },
    phoneNumber: { value: "", error: "" },
    ddlGender: { value: "0", error: "" },
    ddlAgeBracket: { value: "0", error: "" },
    ddlAttendantType: { value: "0", error: "" },
    ddlOccupation: { value: "0", error: "" },
  });

  const checkVal = ({ name, value }) => {
    if (name.startsWith("txt")) {
      if (value.trim().length < 4) {
        return `Invalid ${name.slice(3)}`;
      }
      return "";
    }

    if (name.startsWith("ddl")) {
      if (value === "0") {
        return `Invalid ${name.slice(3)}`;
      }
      return "";
    }

    if (name === "email") {
      if (
        value.trim().length < 5 ||
        !value.includes("@") ||
        !value.includes(".")
      ) {
        return `Invalid ${name}`;
      }
      return "";
    }

    if (name === "password") {
      if (value.trim().length < 6) {
        return `Invalid ${name}`;
      }
      return "";
    }

    if (name === "phoneNumber") {
      if (value.trim().length < 11) {
        return `Invalid ${name}`;
      }
      return "";
    }

    if (name === "confirmPassword") {
      if (value.trim().length < 6) {
        return `Invalid ${name}`;
      }
      if (formData.password.value.trim() !== value.trim()) {
        return `Passwords aren't matching`;
      }
      return "";
    }

    return "Unknown Error";
  };

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

      const error = checkVal({ name, value });
      if (error !== "") {
        updatedFormData[name].error = error;
        hasError = true;
        setFormData(updatedFormData);
      }
    });

    if (!hasError) {
      const ftDetails = Object.fromEntries(
        Object.entries(updatedFormData).map(([key, { value }]) => [key, value])
      );
      console.log(ftDetails);
    } else {
      return;
    }
  };

  const genderOptions = ["--Please Select a Gender--", "Male", "Female"];
  const ageBracketOptions = [
    "--Please Select an Age Bracket--",
    "0-18",
    "19-30",
    "31-50",
    "51-70",
    "71+",
  ];
  const attendantTypeOptions = [
    "--Please Select an Attendant Type--",
    "New Member",
    "Visiting",
    "Undecided",
    "TCN Member (Another Campus)",
  ];
  const occupationOptions = [
    "--Please Select an Occupation--",
    "Look up List from BE",
  ];
  return (
    <div>
      <Form>
        <Row className="mb-2">
          <FormInput
            controlId={"formGridFirstName"}
            label={"First Name"}
            placeholder={"Enter First Name"}
            formData={formData.txtFirstName.value}
            handleChange={handleChange}
            name={"txtFirstName"}
            type={'text'}
            error={formData.txtFirstName.error}
          />

          <FormInput
            controlId={"formGridLastName"}
            label={"Last Name"}
            placeholder={"Enter Last Name"}
            formData={formData.txtLastName.value}
            handleChange={handleChange}
            name={"txtLastName"}
            type={'text'}
            error={formData.txtLastName.error}
          />
        </Row>

        <Row className="mb-2">
          <FormInput
            controlId={"formGridEmail"}
            label={"Email"}
            placeholder={"Enter Email"}
            formData={formData.email.value}
            handleChange={handleChange}
            name={"email"}
            type={'email'}
            error={formData.email.error}
          />

          <FormInput
            controlId={"formGridPhoneNumber"}
            label={"Phone Number"}
            placeholder={"Enter Phone Number"}
            formData={formData.phoneNumber.value}
            handleChange={handleChange}
            name={"phoneNumber"}
            type={'text'}
            error={formData.phoneNumber.error}
          />
        </Row>

        <Row>
          <FormInput
            controlId={"formGridPassword"}
            label={"Password"}
            placeholder={"Enter Password"}
            formData={formData.password.value}
            handleChange={handleChange}
            name={"password"}
            type={"password"}
            error={formData.password.error}
          />


          <FormInput
            controlId={"formGridConfirmPassword"}
            label={"Confirm Password"}
            placeholder={"Confirm Password"}
            formData={formData.confirmPassword.value}
            handleChange={handleChange}
            name={"confirmPassword"}
            type={"password"}
            error={formData.confirmPassword.error}
          />
        </Row>

        <Row className="mb-2 mt-2">
          <SelectInput
            controlId={"formGridGender"}
            label={"Gender"}
            options={genderOptions}
            formData={formData.ddlGender.value}
            handleChange={handleChange}
            name={"ddlGender"}
            error={formData.ddlGender.error}
          />
          <SelectInput
            controlId={"formGridAgeBracket"}
            label={"Age Bracket"}
            options={ageBracketOptions}
            formData={formData.ddlAgeBracket.value}
            handleChange={handleChange}
            name={"ddlAgeBracket"}
            error={formData.ddlAgeBracket.error}
          />

        </Row>

        <Row className="mb-2">
          <SelectInput
            controlId={"formGridAttendantType"}
            label={"Attendant Type"}
            options={attendantTypeOptions}
            formData={formData.ddlAttendantType.value}
            handleChange={handleChange}
            name={"ddlAttendantType"}
            error={formData.ddlAttendantType.error}
          />

          <SelectInput
            controlId={"formGridOccupation"}
            label={"Occupation"}
            options={occupationOptions}
            formData={formData.ddlOccupation.value}
            handleChange={handleChange}
            name={"ddlOccupation"}
            error={formData.ddlOccupation.error}
          />
        </Row>

        <div className={style.extra_container}>
          <Button variant="primary" onClick={handleButtonClick}>
            Register
          </Button>
          <p>
            Already registered? <Link to="/login">Login</Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default RegistrationForm;
