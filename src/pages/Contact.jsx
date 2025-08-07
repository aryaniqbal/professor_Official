import React from "react";
import mix from '../assets/mix.png';

export default function About() {
  return (
    <>
     <div>
          <h1 id="Aboutuspage">Contact Us</h1>
        </div>
        <section>
                <section id="contactform">
                  <div id="leftside">
                    <img src={mix} alt="Contact Us" />
                  </div>
                  <div id="rightside">
                    <form>
                      <h2 id="dropme">Drop Your Message</h2>
                      <label htmlFor="name">Name:</label>
                      <input type="text" id="name" name="name" placeholder="Your Name" required />
          
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" name="email" placeholder="Your Email" required />
          
                      <label htmlFor="message">Message:</label>
                      <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          
                      <button type="submit">Send Message</button>
                    </form>
                  </div>
                </section>
        </section>
    </>
  );
}
