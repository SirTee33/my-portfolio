import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import './Contact.css';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/mdi/github';
import linkedinIcon from '@iconify-icons/mdi/linkedin';
import twitterX from '@iconify-icons/ri/twitter-x-line';
import emailIcon from '@iconify-icons/mdi/email-outline';
import phoneIcon from '@iconify-icons/mdi/phone';
import locationIcon from '@iconify-icons/mdi/map-marker';


const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_cr3udxn',      // Replace with your EmailJS service ID
      'template_2fpcca2',     // Replace with your template ID
      form.current,
      'O9AgY8rHQprhFvx1Q'       // Replace with your public key
    )
      .then(() => {
        setLoading(false);
        toast.success('✅ Message sent successfully!');
        form.current.reset();
      })
      .catch(() => {
        setLoading(false);
        toast.error('❌ Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="contact-header">
      <section className="contact-container">
        <h1>Have a project in mind? Let's talk</h1>
        <p>Feel free to reach out via the form below or through any of my contact channels.</p>
        <h2>Get in Touch</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form" /*onSubmit={(e) => e.preventDefault()}*/>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="user_name" id="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" id="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="6" placeholder="Type your message..." required></textarea>
          </div>

          <button type="submit" disabled={loading} className="send-btn">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <div className="find-me">
          <h2>Find Me</h2>
          <div className="social-icons">
            <a href="https://github.com/SirTee33" target="_blank" rel="noreferrer">
              <Icon icon={githubIcon} />
            </a>
            <a href="https://x.com/@TwinTeey" target="_blank" rel="noreferrer">
              <Icon icon={twitterX} />
            </a>
            <a href="https://www.linkedin.com/in/taiwo-ojo-9488a7255" target="_blank" rel="noreferrer">
              <Icon icon={linkedinIcon} />
            </a>
          </div>

          <div className="contact-details">
            <p>
              <Icon icon={emailIcon} className="contact-icon" />
              <span><strong>Email:</strong> ojotaye33@gmail.com</span>
            </p>
            <p>
              <Icon icon={phoneIcon} className="contact-icon" />
              <span><strong>Phone:</strong> +2348136190222</span>
            </p>
            <p>
              <Icon icon={locationIcon} className="contact-icon" />
              <span><strong>Location:</strong>Lagos, Nigeria</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
