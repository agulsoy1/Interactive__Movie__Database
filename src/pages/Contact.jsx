import { useState } from "react";
import ContactForm from "../components/ContactForm";
import emailjs from "@emailjs/browser";

//service_id: service_fpiv3ag
//template_id: template_lme27sr
//user_id: hLNZf5QitvobwJaQW

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    emailjs
      .send(
        "service_fpiv3ag",
        "template_lme27sr",
        formData,
        "hLNZf5QitvobwJaQW",
      )
      .then(() => {
        setSubmitted(true);
        setSubmitMessage("You have successfully submitted the form");

        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitted(false);
          setSubmitMessage("");
        }, 3000);
      });
  }

  return (
    <div>
      <ContactForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        submitted={submitted}
        submitMessage={submitMessage}
      />
    </div>
  );
}
