import React from 'react';
import './contact.css'
import Header from "../home/header";
import Footer from "../home/footer";

class Contact extends React.Component {
    render() {
        return (
            <div className="home">
               <Header menu3="selected"/>
                <div className="contact">
                    <div className="contact-item">
                       <h3>Address</h3>
                        <p className="contact-item-1">Buttonwood, California.</p>
                        <p className="contact-item-2">Rosemead, CA 91770</p>
                    </div>

                    <div className="contact-item">
                        <h3>Phone</h3>
                        <p className="contact-item-1">+1 253 565 2365</p>
                        <p className="contact-item-2">Mon to Fri 9am to 6pm</p>
                    </div>

                    <div className="contact-item">
                        <h3>Email</h3>
                        <p className="contact-item-1">support@colorlib.com</p>
                        <p className="contact-item-2">Send us your query anytime!</p>
                    </div>
                </div>

                <Footer/>

            </div>
        );
    }
}

export default Contact;