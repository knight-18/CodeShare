import React, { useState } from "react";
import "./Form.css";
import FormSignup from "../Signup/FormSignup";
import FormLogin from "./FormLogin";
import FormSuccess from "../../components/FormSuccess/FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        {!isSubmitted ? <FormLogin submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  );
};

export default Form;
