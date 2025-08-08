import React from "react";
import s4 from '../assets/q1.png';
import s2 from '../assets/q2.png';
import s3 from '../assets/q3.png';
import s1 from '../assets/q4.png';

function pkr92() {
    return (
        <>
            <div id="allsectioninit">
                <section>
                    <h1 id="onlyoneid">92 PKR- Login</h1>


                </section>
                <section>
                    <h2 id="onlyoneid">92 PKR Apk Details</h2>
                    <section className="slider">
                        <div className="slide-track">
                            <img src={s1} alt="" className="slide-img" />
                            <img src={s2} alt="" className="slide-img" />
                            <img src={s3} alt="" className="slide-img" />
                            <img src={s4} alt="" className="slide-img" />
                            {/* Duplicate for infinite loop */}
                        </div>
                    </section>

                </section>
                <h2 id="onlyoneid">Download Now</h2>
                <section id="btndown">
                    <button id="btniner">92 PKR</button>
                </section>
                <section>
                    <h2 id="onlyoneid">Step-by-Step 92 PKR Login Process:</h2>
                    <p id="allpara">1- Download the 92PKR app using the button above and install it on your device. <br />
                        2- Open the 92 PKR Game and go to the login screen. <br />
                        3- Enter your registered username and password in the required fields, then tap the Login button to access your account. <br />
                        4- Once you’re signed in, you can explore the wide variety of games available and start playing right away. <br />

                    </p >
                </section>
                <section>
                    <h2 id="onlyoneid">For new users, follow these steps to sign up:</h2>
                    <p id="allpara">1- Open the app and tap on the Sign Up option. <br />
                        2- Enter your basic details, including your name, email, and a secure password. <br />
                        3- Complete the registration process, and your account will be ready in minutes. <br />
                        4- With this quick and simple process, you can instantly dive into the fun and excitement of the 92 PKR Game. Download it now and register using the link above to start playing today. <br />

                    </p>

                </section>
            </div>
        </>
    );
}
export default pkr92;