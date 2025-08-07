import React, { useState, useEffect } from "react";
import '../BodyCSS/home.css';
import img1 from '../assets/Professter.png';
import pkr92 from '../assets/92pkr.jpeg'
import dadu92 from '../assets/92dadu.jpeg'
import Caco92 from '../assets/92coco.jpeg'
import Go92 from '../assets/92go.jpeg'
import glory92 from '../assets/92glory.jpeg'
import f1 from '../assets/1.jpeg';
import f2 from '../assets/2.jpeg';
import f3 from '../assets/3.jpeg';
import f4 from '../assets/4.jpeg';
import f5 from '../assets/5.jpeg';
import f6 from '../assets/6.jpeg';
import f7 from '../assets/7.jpeg';
import f8 from '../assets/8.jpeg';
import f9 from '../assets/9.jpeg';
import mix from '../assets/mix.png';

function Counter({ start = 0, end = 100, speed = 50 }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < end) {
          return prevCount + 1;
        } else {
          clearInterval(timer); // Stop the counter
          return prevCount;
        }
      });
    }, speed); // speed in ms

    return () => clearInterval(timer); // Cleanup
  }, [end, speed]);

  return (
    <div id="changenumber1" style={{ fontSize: '40px', fontWeight: 'bold' }}>
      {count}
    </div>
  );
}

function Home() {
  return (
    <>
      <div>
        <img id="frstimage" src={img1} alt="Images" />
      </div>

      <section id="changepostionontop">
        <Counter  start={1000000000} end={1000000087} speed={50} /><span id="hoja">$</span>
      </section>
      <section>
        <h2 id="changestyle">*Proffeser.official* پاکستان کی ایک بہترین گیم ویب سائٹ ہے جہاں آپ مختلف کمائی والی گیمز ایک ہی جگہ پر کھیل سکتے ہیں۔ یہ پلیٹ فارم آپ کو مہارت اور قسمت کے ذریعے انعام جیتنے کا شاندار موقع فراہم کرتا ہے۔</h2>
      </section>
      
      <section>
        <h2 id="changestyle"> Best online games in Pakistan</h2>
      </section>
      <section id="firstsection2">
        <a href="https://www.fantasygems17.com/#/register?invitationCode=67717105959"><img src={f6} alt="PKR" /></a>
        <a href="https://www.92lotto.biz/#/register?invitationCode=11516112103"><img src={f7} alt="PKR" /></a>
        <a href="https://www.pakgames.bet/#/register?invitationCode=26666218661"><img src={f8} alt="PKR" /></a>
      </section>
      <section>
        <h2 id="changestyle">Online Earning Games</h2>
      </section>
      <section id="firstsection">
        <a href="https://www.92dadu88.com/#/register?invitationCode=67581100607"><img src={f4} alt="PKR" /></a>
        <a href="https://www.92pkrz.com/#/register?invitationCode=28742968539"><img src={f5} alt="PKR" /></a>
        <a href="https://92go11.com//#/register?invitationCode=45327106952"><img src={f9} alt="PKR" /></a>
      </section>
      <section>
        <h2 id="changestyle">Earning game in Pakistan</h2>
      </section>
      <section id="firstsection1">
        <a href="https://www.92glory.win/#/register?invitationCode=42152741996"><img src={f1} alt="PKR" /></a>
        <a href="https://www.92r.app/#/register?invitationCode=56725105366"><img src={f2} alt="PKR" /></a>
        <a href="https://www.92coco99.com/#/register?invitationCode=76366800595"><img src={f3} alt="PKR" /></a>
      </section>
      {/* form section */}
      <section>
        <div ><h2 id="conpro"> Contact Professor</h2></div>
      </section>
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




      <section className="marquee-container">
        <marquee behavior="alternate" direction="left" scrollamount="5">
          <div className="marquee">
            <a href="https://www.92pkrz.com/#/register?invitationCode=28742968539"><img src={pkr92} alt="PKR" /></a>
            <a href="https://www.92dadu88.com/#/register?invitationCode=67581100607"><img src={dadu92} alt="Dadu" /></a>
            <a href="https://www.92coco99.com/#/register?invitationCode=76366800595"><img src={Caco92} alt="Caco" /></a>
            <a href="https://92go11.com//#/register?invitationCode=45327106952"><img src={Go92} alt="Go" /></a>
            <a href="https://www.92glory.win/#/register?invitationCode=42152741996"><img src={glory92} alt="Glory" /></a>
          </div>
        </marquee>

      </section>



    </>
  );
}

export default Home;
