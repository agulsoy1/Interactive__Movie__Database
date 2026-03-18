import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Login({setSession}) {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
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

    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      alert(error.message);
      return;
    }
    console.log(data)
    setSession(data) 
    navigate('/')
  }

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate= useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   const {data, error} = await supabase.auth.signInWithPassword({
  //     email: email,
  //     password: password,
  //   })

  //   if(error){
  //     alert(error.message)
  //   }else{
  //     alert("Logged in!")
  //     navigate("/")
  //   }
  // }

  return (
    <div>
      <div className="cotainer">
        <div className="row">
          <div className="login">
            <div className="login__container">
              <div className="login__intro">
                <h2 className="login__title">Login</h2>
                {/* <p className="login__para">Create an account</p> */}
              </div>
              <form className="login__form" onSubmit={handleSubmit}>
                <ul className="login__credentials--wrapper">
                  <li className="login__credentials">
                    <label htmlFor="email" className="credential__label">
                      Username:{" "}
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
                  Sign in
                </button>
              </form>
              <div className="signup__section">
                <p className="signup__label">Don't have an account?</p>
                <Link to="/signup">
                  <span className="signup__link">Sign up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
