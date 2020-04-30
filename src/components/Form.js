import React from "react";
import { useForm } from "./useForm";
import { FormErrors } from "./FormErrors";

function Form() {
  const [values, errors, handleChange, handleSubmit] = useForm(
    {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    FormErrors
  );

  return (
    <div className="wrap-contact100">
      <p className="form-message">Fill in your details</p>
      <form
        onSubmit={handleSubmit}
        className="contact100-form"
        autoComplete="off"
      >
        <div
          className={
            errors.firstname ? "border-error wrap-input100" : "wrap-input100"
          }
        >
          <input
            className="input100"
            type="text"
            value={values.firstname}
            placeholder="Firstname"
            name="firstname"
            onChange={handleChange}
          />
          <span className="focus-input100"></span>
        </div>
        {errors.firstname && <p className="error">{errors.firstname}</p>}

        <div
          className={
            errors.lastname ? "border-error wrap-input100" : "wrap-input100"
          }
        >
          <input
            className="input100"
            type="text"
            value={values.lastname}
            placeholder="Lastname"
            name="lastname"
            onChange={handleChange}
          />
          <span className="focus-input100"></span>
        </div>
        {errors.lastname && <p className="error">{errors.lastname}</p>}

        <div
          className={
            errors.email ? "border-error wrap-input100" : "wrap-input100"
          }
        >
          <input
            className="input100"
            type="text"
            value={values.email}
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <span className="focus-input100"></span>
        </div>
        {errors.email && <p className="error">{errors.email}</p>}

        <div
          className={
            errors.password ? "border-error wrap-input100" : "wrap-input100"
          }
        >
          <input
            className="input100"
            type="password"
            value={values.password}
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <span className="focus-input100"></span>
        </div>
        {errors.password && <p className="error">{errors.password}</p>}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
