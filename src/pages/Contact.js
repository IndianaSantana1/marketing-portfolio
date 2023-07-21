import React from "react";
import "./styles/Contact.css";
import { Button, Container } from "react-bootstrap";
import Footer from "../components/Footer";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Contact Portfolio", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
  return (
    <div id="contact" className="section contact-section">
      <Container>
        <h1>Let’s work together, I’m just a message away.</h1>
        <div className="contact-form-wrapper">
          <form
            netlify
            name="Contact Portfolio"
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <div className="form-item">
              <label htmlFor="name" className="text-black">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-item">
              <label htmlFor="email" className="text-black">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-item">
              <label htmlFor="message" className="text-black">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Start typing your message here..."
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button className="cta-button contact-btn" type="submit">
              Send Message
            </Button>
          </form>
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default Contact;
