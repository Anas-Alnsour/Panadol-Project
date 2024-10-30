import React from "react";
import "./buy.css";
import luluLogo from '../img/luluLogo.png';
import carrefourLogo from '../img/carrefourLogo.png';
import asterLogo from '../img/asterLogo.png';
import binsinaLogo from '../img/binsinaLogo.png';
import lifeLogo from '../img/lifeLogo.png';

const WhereToBuy = () => {
  return (
    <div className="where-to-buy-container">
      <h1 className="title1">Where to Buy Panadol</h1>
      <p className="description">
        When pain puts your life on hold, there's no need to tough it out. As one of the world’s leading paracetamol-based pain relievers, Panadol products are stocked at a number of national retailers – giving you a range of pain relief options to help you feel like you again.
      </p>
      <p className="sub-description">
        Simply choose from the retailers below to buy online and find your nearest store, or use our search tool to find the right Panadol product to meet your pain relief needs.
      </p>
      <p className="disclaimer">
        By clicking on the national retailers links you will be leaving the Panadol.com site and moving to an external website independently operated and not managed by Haleon. Haleon assumes no responsibility for the site.
      </p>
      <h2 className="retailer-title">Find a Retailer</h2>
      <div className="retailers">
        <div className="retailer">
          <img src={luluLogo} alt="Lulu Store" className="retailer-logo"/>

        </div>
        <div className="retailer">
          <img src={carrefourLogo} alt="Carrefour Store" className="retailer-logo"/>

        </div>
        <div className="retailer">
          <img src={asterLogo} alt="Aster Store" className="retailer-logo"/>

        </div>
        <div className="retailer">
          <img src={binsinaLogo} alt="BinSina Store" className="retailer-logo"/>

        </div>
        <div className="retailer">
          <img src={lifeLogo} alt="Life Pharmacy" className="retailer-logo"/>

        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
