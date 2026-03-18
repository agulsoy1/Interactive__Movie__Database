import React from "react";
import Nav from "./Nav";

export default function ContactForm({
  formData,
  handleChange,
  handleSubmit,
  submitted,
  submitMessage,
}) {
  return (
    <div>
      <h1 className="section__title">Contact</h1>
      <div className="contact__section">
        <div className="contact__intro">
          <h2 className="contact__intro--title">A little about me</h2>
          <p className="contact__intro--para">
            My name is Alexandre T Gulsoy and I am a frontend web developer. I
            have experience in HTML, CSS, JavaScript, React, NextJS.
          </p>
          <div className="symbols__wrapper">
            <figure className="symbol__wrapper">
              <img
                src="/images/icons/html_icon.png"
                alt="html symbol"
                className="symbol"
              />
              <p className="symbol__name">HTML</p>
            </figure>
            <figure className="symbol__wrapper">
              <img
                src="/images/icons/css_icon.png"
                alt="css symbol"
                className="symbol"
              />
              <p className="symbol__name">CSS</p>
            </figure>
            <figure className="symbol__wrapper">
              <img
                src="/images/icons/js_icon.png"
                alt="javascript symbol"
                className="symbol"
              />
              <p className="symbol__name">JavaScript</p>
            </figure>
            <figure className="symbol__wrapper">
              <img
                src="/images/icons/react_icon.png"
                alt="react symbol"
                className="symbol"
              />
              <p className="symbol__name">React</p>
            </figure>
            <figure className="symbol__wrapper">
              <img
                src="/images/icons/nextjs_icon.png"
                alt="NextJS symbol"
                className="symbol"
              />
              <p className="symbol__name">NextJS</p>
            </figure>
          </div>
        </div>
        <div className="contact__form--wrapper">
          <h2 className="contact__form--title">Let's get in touch</h2>
          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              name="first_name"
              className="contact__input"
              value={formData.first_name}
              onChange={handleChange}
              type="text"
              placeholder="First Name"
              required
            />

            <input
              name="last_name"
              className="contact__input"
              value={formData.last_name}
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
              required
            />
            <input
              name="email"
              className="contact__input"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="email"
              required
            />
            <input
              name="phone_number"
              className="contact__input"
              value={formData.phone_number}
              onChange={handleChange}
              type="tel"
              placeholder="phone number"
              required
            />
            <textarea
              name="message"
              className="contact__input"
              value={formData.message}
              onChange={handleChange}
              placeholder="I would like to find out more about you"
            />
            <button className="form__submit">Submit</button>
          </form>
        </div>

        {submitted && (
          <div className="success__page">
            <p className="success__message">{submitMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
