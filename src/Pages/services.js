import React from "react";
import { GoArrowUpRight } from 'react-icons/go';
import './service.css';

const servicesData = [
    { id: 1, title: "Comprehensive Healthcare Services", text: "GSK (GlaxoSmithKline) offers a wide range of services focused on pharmaceuticals, vaccines, and consumer healthcare." },
    { id: 2, title: "Diverse Product Portfolio", text: "Their product portfolio includes general medicines, specialty drugs, and an extensive selection of vaccines targeting diseases like flu, hepatitis, and shingles." },
    { id: 3, title: "Health Resources for Specific Conditions", text: "GSK’s initiatives also include health resources for specific conditions like asthma and HIV, aiming to support both patients and healthcare providers." },
    { id: 4, title: "Patient Assistance Programs", text: "The company operates programs to help patients access medications through financial assistance and support for eligible individuals." },
    { id: 5, title: "Resources for Healthcare Professionals", text: "For healthcare professionals, GSK provides comprehensive resources through platforms like GSKPro, where they can access detailed product information and request samples, especially for specialty medications in areas like oncology." },
];

const Service = () => {
    return (
        <section className="services-section" id="services-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title wow fadeInUp">Services</h2>
                    <p className="wow fadeInUp" data-wow-delay=".4s">
                    GlaxoSmithKline (GSK) is a leading global healthcare company dedicated to improving the quality of human life by enabling people to do more, feel better, and live longer. With a strong focus on pharmaceuticals, vaccines, and consumer healthcare, GSK aims to address the diverse health needs of patients and healthcare providers worldwide. Below are some key highlights of GSK's services and initiatives:
                    </p>
                </div>
                <div className="services-widget position-relative">
                    {servicesData.map((item) => (
                        <div className="service-item flexSB" key={item.id}>
                            <i className="service-icon">
                                <GoArrowUpRight size={40} />
                            </i>
                            <div className="left-box">
                                <span className="number">0{item.id}</span>
                                <h3 className="service-title">{item.title}</h3>
                            </div>
                            <div className="right-box">
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
