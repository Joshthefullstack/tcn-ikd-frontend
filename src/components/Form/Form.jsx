import { Form, Col } from "react-bootstrap";
import style from "../../styles/Registration.module.css";

export const FormInput = ({
  controlId,
  label,
  placeholder,
  formData,
  handleChange,
  name,
  type,
  error
}) => {
  return (
    <Form.Group as={Col} controlId={controlId}>
      <Form.Label>{label}</Form.Label>

      <Form.Control
        type={type}
        placeholder={placeholder}
        value={formData}
        onChange={handleChange}
        name={name}
      />
      {error.length > 0 ? (
        <p className={style.error}>{error}</p>
      ) : (
        ""
      )}
    </Form.Group>
  );
};

export const SelectInput = ({
  controlId,
  label,
  options,
  formData,
  handleChange,
  name,
  error
}) => {
  return (
    <Form.Group as={Col} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Select
        value={formData}
        onChange={handleChange}
        name={name}
        aria-label="Default select example"
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </Form.Select>
      {error.length > 0 ? (
        <p className={style.error}>{error}</p>
      ) : (
        ""
      )}
    </Form.Group>
  );
};
