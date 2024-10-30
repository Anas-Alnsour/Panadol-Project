import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import headerimg from '../img/gsk logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
const Home = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                "GlaxoSmithKline (GSK) is a global healthcare company committed to improving the quality of human life."
            ],
            typeSpeed: 50,
            backSpeed: 25,
            showCursor: true,
            cursorChar: '|',
        };

        typedRef.current = new Typed('.typed-text', options);

        return () => {
            typedRef.current.destroy();
        };
    }, []);

    return (
        <header>
            <div className="container" id="Home">
                <div className="row">
                    <div className="col-md-6">
                        <h5>GSK, a leader in pharmaceuticals,<br /> manufactures the well-known pain reliever Panadol.</h5>
                        <h2 className="typed-text"></h2>
                        <h5>GSK, the company responsible for bringing Panadol to markets worldwide.</h5>
                        <button><a href="https://www.gsk.com/en-gb/">Read More</a></button>
                    </div>
                    <div className="col-md-6">
                        <div className="header-box">
                            <img src={headerimg} alt="GSK Header" />
                            <FontAwesomeIcon icon={faSquare} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Home;

