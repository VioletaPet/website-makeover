import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log("Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
console.log("Public Key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);


    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h1>Kontaktformular</h1>
      <h3>Bei Fragen, Buchungsanfragen oder sonstigem Mitteilungswunsch dürfen Sie mich gerne mithilfe des Kontaktformulars oder direkt per Email an info@re-energize.de kontaktieren</h3>

      <label>Name</label>
      <input type="text" name="user_name" />

      <label>Telefonnummer</label>
      <input type="text" name="user_phone_number" />

      <label>Email-Adresse</label>
      <input type="email" name="user_email" />

      <label htmlFor='subject'>Betreff</label>
      <select id="subject" name="subject" defaultValue="default">
        <option value="default">Bitte wählen</option>
        <option value="Lösungsfokussiertes Coaching">Lösungsfokussiertes Coaching</option>
        <option value="Psychologische Beratung">Psychologische Beratung</option>
        <option value="Akasha Chronik Lesung">Akasha Chronik Lesung</option>
        <option value="Ernährungsberatung">Ernährungsberatung</option>
        <option value="Yoga">Yoga</option>
      </select>

      <label>Nachricht</label>
      <textarea name="message" />
      <input type="submit" value="Senden" />
    </form>
  );
};
