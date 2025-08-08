import React from "react";
import s1 from '../assets/w1.png';
import s2 from '../assets/w2.png';
import s3 from '../assets/w3.png';
import s4 from '../assets/w4.png';


function r92() {
    return (
        <>
            <div id="allsectioninit">
                <section>
                    <h1 id="onlyoneid">Welcome to 92R – Your Ultimate Online Gaming </h1>
                    <p id="allpara">92R is one of Pakistan’s leading online gaming platforms, offering a thrilling mix of casino-style games, sports betting, and interactive entertainment. Designed for players who love excitement and real rewards, it provides a secure and user-friendly environment where you can play anytime, anywhere.
                    </p>
                </section>
                 <section className="slider">
                      <div className="slide-track">
                        <img src={s1} alt="" className="slide-img" />
                        <img src={s2} alt="" className="slide-img" />
                        <img src={s3} alt="" className="slide-img" />
                        <img src={s4} alt="" className="slide-img" />
                        {/* Duplicate for infinite loop */}
                      </div>
                    </section>
                <section>
                    <section>
                        <h2 id="onlyoneid">Play Now</h2>
                        <section id="btndown">
                            <button id="btniner"><a id="linkcolor" href="https://www.92r.app/#/register?invitationCode=56725105366">R92 Game</a></button>
                </section>
                    </section>
                    <h2 id="onlyoneid">Games You Can Play</h2>
                    <p id="allpara"> 92R offers a wide variety of games to suit every taste: <br />
                        1- Slots – Spin and win with engaging themes and big jackpots. <br />
                        2- Poker – Challenge your skills against other players. <br />
                        3- Sports Betting – Bet on cricket, football, and other live events. <br />
                        4- Lottery Games – Participate in quick-result lotteries like Wingo, K3, and 5D for big wins. <br />
                        5- Fishing Games – Relax and earn rewards by catching virtual fish. <br />
                    </p>
                </section>
                <section>
                    <h2 id="onlyoneid">Why Players Love 92R</h2>
                    <p id="allpara"> 1- Real earning opportunities with quick withdrawals. <br />
                        2- Daily bonuses and promotions to boost your play. <br />
                        3- User-friendly design with support in both Urdu and English. <br />
                        4-Secure transactions through popular payment methods like JazzCash, EasyPaisa, and bank transfer. <br />
                    </p>
                </section>
                <section>
                    <h2 id="onlyoneid">How to Get Started</h2>
                    <p id="allpara"> Simply download the app, sign up with your details, and start playing. New players are welcomed with attractive bonuses and easy navigation to help them jump right into the action.</p>

                </section>
                <section>
                    <h2 id="onlyoneid">Security and Fair Play</h2>
                    <p id="allpara">92R values its players' trust by using advanced security measures and fair play systems to ensure transparent gaming experiences.
                        92R is more than just a gaming app – it’s your gateway to fun, excitement, and potential earnings, all in one safe and accessible platform.
                    </p>
                </section>
            </div>
        </>
    );
}
export default r92;