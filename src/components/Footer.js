import React from 'react';
import './Footer.css';
import { Footer as FlowbiteFooter } from "flowbite-react";

function Footer() {
  return (
    <FlowbiteFooter>
      <div className='footer-container'>
        <FlowbiteFooter.Brand
          href=""
          src="./images/navbarlogo.png"
          alt="ReEnergize Logo"
        />

        <FlowbiteFooter.LinkGroup className='footer-link-group'>
          <FlowbiteFooter.Link href="/impressum-und-datenschutz">Impressum & Datenschutz</FlowbiteFooter.Link>
          <FlowbiteFooter.Link href="#">Kontakt</FlowbiteFooter.Link>
        </FlowbiteFooter.LinkGroup>
      </div>
    </FlowbiteFooter>
  )
}

export default Footer;
