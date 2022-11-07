/** @format */

import React, { useEffect, useState } from "react";

import "./App.css";
import zuri from "./images/zuri.png";
import hng from "./images/hng.png";
import i4g from "./images/I4G.png";

const Contact = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "Firstname is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required!";
    }
    if (!values.message) {
      errors.message = "message is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };
  return (
    <React.Fragment>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="heading">Contact Me</h1>
          <p className="top-paragraph">
            Hi there,Contact me to ask me about anything you have in mind
          </p>

          <div className="first-last-name">
            <div className="first">
              <label>First name</label>
              <input
                className="input1"
                type="text"
                name="firstname"
                id="input1"
                placeholder="Enter your first name"
                value={formValues.firstname}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.firstname}</p>

            <div className="last">
              <label>Last name</label>
              <input
                className="input2"
                type="text"
                name="lastname"
                id=""
                placeholder="Enter your last name"
                value={formValues.lastname}
                onChange={handleChange}
              />
            </div>
          </div>
          <p>{formErrors.lastname}</p>

          <div className="email">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="yourname@email.com"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>

          <div className="message">
            <label>Message</label>
            <input
              type="text"
              name="message"
              id=""
              placeholder="Send me a message and i'll reply you as soon as possible"
              value={formValues.message}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.message}</p>

          <div className="check">
            <input type="checkbox" name="" id="" />
            <p className="check-pargraph">
              you agree to providing your data to Salifu Williams Eneojo who may
              conatact you
            </p>
          </div>
        </div>

        <button className="send" type="submit">
          send message
        </button>
      </form>

      {/* FOOTER */}
      <footer className="footer">
        <img src={zuri} alt="zuri" className="zuri" />
        <img src={hng} alt="hng" className="hng" />
        <img src={i4g} alt="i4g" className="i4g" />
      </footer>
    </React.Fragment>
  );
};

export default Contact;
