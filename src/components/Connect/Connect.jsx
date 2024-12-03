import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Connect.scss";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Clear error message on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim inputs to remove leading/trailing spaces
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    // Validation: Check if all fields are filled
    if (!name || !email || !message) {
      setError("All fields are required. Please fill them out.");
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_a39926s", // Replace with your EmailJS service ID
        "template_7ih5lb7", // Replace with your EmailJS template ID
        {
          from_name: name,
          from_email: email,
          message,
        },
        "sc8Qa01_KbI8a39hf" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setIsSubmitted(true); // Show success message
          setError(""); // Clear error
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        () => {
          setError("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <section className="connect">
      <h2 className="connect__title">Let's Connect!</h2>
      <p className="connect__invite">
        Feel free to drop me a message. I'd love to hear from you!
      </p>
      {isSubmitted ? (
        <p className="connect__success">Thank you! Your message has been sent.</p>
      ) : (
        <form className="connect__form" onSubmit={handleSubmit}>
          {error && <p className="connect__error">{error}</p>}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="connect__input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="connect__input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="connect__textarea"
          ></textarea>
          <button type="submit" className="connect__button">
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Connect;
