import React from "react";
import Banner from "../Components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faMap } from "@fortawesome/free-solid-svg-icons";
import './Contact.css';
import SocialLinks from "../Components/Footer/SocialLinks";
import FormContact from "./FormContact";

const Contact = () => {
    return (
        <>
            <Banner title="Contact us" smtitle="Contact us" />
            <section className="contact-us">
                <div className="container" style={{ display: "flex" }}>
                    <div className="col-lg-6 col-md-6">
                        <FormContact/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="side">
                            <div className="overlay">
                                <h3>Contact Us For Any Informations</h3>
                                <li><FontAwesomeIcon icon={faMap} />Location</li>
                                <hr />
                                <p>79 New Oxford Street ,London ,United Kingdom ,WC1A 1DG</p>
                                <li><FontAwesomeIcon icon={faEnvelope} />Email & Phone</li>
                                <hr />
                                <p>Lyndsay.m.meyer@gsk.com <br/>
                                Mobile: +1 202-302-4595 </p>
                                <li><FontAwesomeIcon icon={faGlobe} />Info</li>
                                <p>
                                This page provides contact information for US media. The GSK media team only responds to calls and emails from professional journalists.</p>
                                <hr />
                                <SocialLinks/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
