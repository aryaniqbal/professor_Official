import React from "react";
import s1 from '../assets/a1.png';
import s2 from '../assets/a2.png';
import s3 from '../assets/a3.png';
import s4 from '../assets/a4.png';
import s5 from '../assets/s4.png';

function jeeto92() {
    return (
        <>
            <div id="allsectioninit">
                <section>
                    <h1 id="onlyoneid">92 Jeeto</h1>
                    <p id="allpara">92 Jeeto is an online gaming and earning platform where players can participate in simple yet exciting games and win real cash rewards. It offers a smooth and user-friendly experience, making it easy for both beginners and experienced players to enjoy. With multiple game options, fast results, and secure withdrawal methods, 92 Jeeto has become a go-to choice for people who want to have fun while earning money from home. Many players are attracted to its sign-up bonuses, regular rewards, and the chance to turn free time into real income.
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
                
                <section id="centermakaro">
                    <table style={{ borderCollapse: "collapse", width: "50%", textAlign: "left" }} border="1">
                        <tbody>
                            <tr>
                                <th>Application Name</th>
                                <td id="colorjeeto">92 Jeeto</td>
                            </tr>
                            <tr>
                                <th>Total Users</th>
                                <td id="colorjeeto">1M+</td>
                            </tr>
                            <tr>
                                <th>Download Size</th>
                                <td id="colorjeeto">17 MB</td>
                            </tr>
                        </tbody>
                    </table>

                </section>

                  

                <section id="btndown">
                    <button id="btniner"><a id="linkcolor" href="https://www.92lotto.biz/#/register?invitationCode=11516112103">Download Jeeto92</a></button>
                </section>
                <section>
                    <h2 id="onlyoneid">How Good is 92 Jeeto ?</h2>
                    <p id="allpara">92 Jeeto Game is one of Pakistan’s most popular gaming apps, allowing you to play various games and earn real cash through the 92 Jeeto Download APK. To begin, simply complete the 92 Jeeto Login by creating an account with your basic details. Once registered, you can choose from top-rated games, play, and win to start earning money on the 92 Jeeto platform.
                        Also, don’t forget to explore our other exciting games like Pakgames, Basant Club, and Fantasy Gems!
                    </p>
                </section>
                <section>
                    <h2 id="onlyoneid">Welcome Bonuses and Free Credits</h2>
                    <p id="allpara">New players who join through 92 Jeeto Login are welcomed with exciting bonuses, including deposit matches and free credits to help start their gaming journey. These rewards give you a great chance to explore the platform and boost your chances of winning right from the beginning.</p>

                </section>
                <section>
                    <h2 id="onlyoneid">Secure and Reliable Transactions</h2>
                    <p id="allpara">At 92 Jeeto Login, security comes first. The platform uses advanced encryption technology and secure payment gateways to keep user data and financial transactions safe. This ensures that players can deposit and withdraw funds with complete confidence, knowing their information is fully protected.</p>
                </section>
            </div>
        </>
    );
}
export default jeeto92;