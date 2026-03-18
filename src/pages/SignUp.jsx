import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function SignUp({setSession}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  console.log(formData);

  function handleChange(event) {
    // event.preventDefault()
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone_number: formData.phoneNumber,
        },
      },
    });

    if (error) {
      alert(error.message);
      return;
    } else {
      alert("Check your email for a verification link");
    }
  }

  return (
    <div>
      <div className="cotainer">
        <div className="row">
          <div className="login">
            <div className="login__container">
              <div className="login__intro">
                <h2 className="login__title">Sign up</h2>
                <p className="login__para">
                  Create an account and find out about your favorite movies.
                </p>
              </div>
              <form className="login__form" onSubmit={handleSubmit}>
                <ul className="login__credentials--wrapper">
                  <li className="login__credentials">
                    <label htmlFor="first_name" className="credential__label">
                      First Name:{" "}
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      className="credential"
                      placeholder="First Name"
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li className="login__credentials">
                    <label htmlFor="last_name" className="credential__label">
                      Last Name:{" "}
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      className="credential"
                      placeholder="Last Name"
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li className="login__credentials">
                    <label htmlFor="phone-number" className="credential__label">
                      Phone Number:{" "}
                    </label>
                    <input
                      name="phoneNumber"
                      type="tel"
                      className="credential"
                      placeholder="Phone Number"
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li className="login__credentials">
                    <label htmlFor="email" className="credential__label">
                      Email:{" "}
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="credential"
                      placeholder="Email"
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li className="login__credentials">
                    <label htmlFor="password" className="credential__label">
                      Password:{" "}
                    </label>
                    <input
                      name="password"
                      type="password"
                      className="credential"
                      placeholder="Password"
                      onChange={handleChange}
                      required
                    />
                  </li>
                </ul>
                <button className="login__submit--button" type="submit">
                  Create Account
                </button>
              </form>
              <div className="signup__section">
                <p className="signup__label">Already have an account?</p>
                <Link to="/login">
                  <span className="signup__link">Back to Login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
