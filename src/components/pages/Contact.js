import React from 'react';
import { ContactForm } from '../ContactForm';
import BookingModal from '../BookingModal';

export const Contact = () => {
  return (
    <div className='contact-page'>
      <div className='contact-container'>
        <h1>Kostenfreies Kennenlerngespräch</h1>
        <p>Ich lade Sie herzlich zu einem kostenlosen, telefonischen Kennenlerngespräch ein. In 20 Minuten haben wir die Möglichkeit, uns ganz entspannt auszutauschen. Sie können mir Ihr Anliegen schildern, erste Fragen stellen und ein Gefühl dafür bekommen, ob die Chemie zwischen uns stimmt. Dieses Gespräch ist völlig unverbindlich – es geht darum, einen ersten Eindruck voneinander zu gewinnen und gemeinsam zu schauen, wie ich Sie am besten unterstützen kann.<br />
        Ich freue mich darauf, Sie kennenzulernen! 💛</p>
        <BookingModal />
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact
