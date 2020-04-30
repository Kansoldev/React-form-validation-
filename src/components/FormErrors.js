function FormErrors(values) {
  let error = {};

  if (!values.firstname) {
    error.firstname = "Please enter your firstname";
  } else if (!/^[a-zA-Z]*$/i.test(values.firstname)) {
    error.firstname = "Please use a valid firstname";
  }

  if (!values.lastname) {
    error.lastname = "Please enter your lastname";
  } else if (!/^[a-zA-Z]/i.test(values.lastname)) {
    error.lastname = "Please use a valid lastname";
  }

  if (!values.email) {
    error.email = "Please enter your email address";
  } else if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(values.email)) {
    error.email = "Please enter a valid email address";
  }

  if (!values.password) {
    error.password = "Please enter your password";
  } else if (!/^[A-Za-z0-9_]\w{7,14}$/.test(values.password)) {
    error.password = "Please enter a password of at least 7 characters";
  }

  return error;
}

export { FormErrors };
