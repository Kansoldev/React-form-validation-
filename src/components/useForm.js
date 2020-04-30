import { useState, useEffect } from "react";

function useForm(state, validate) {
  const [Inputs, setInputs] = useState(state);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      if (Object.keys(errors).length === 0) {
        alert("Form Validation Successful!");
        setSubmitted(false);
        setInputs({ firstname: "", lastname: "", email: "", password: "" });
      }
    }
  }, [submitted, errors]);

  const handleChange = (e) => {
    setInputs({ ...Inputs, [e.target.name]: e.target.value });

    const validationErrors = validate(Inputs);

    setErrors(validationErrors);

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(Inputs);

    setErrors(validationErrors);

    setSubmitted(true);
  };

  return [Inputs, errors, handleChange, handleSubmit, submitted];
}

export { useForm };
