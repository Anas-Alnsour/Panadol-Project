import React, { useState } from "react";

const FormContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [department, setDepartment] = useState("");
    const [message, setMessage] = useState("");
    
    const [showNameError, setShowNameError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showPhoneError, setShowPhoneError] = useState(false);
    const [showDepartmentError, setShowDepartmentError] = useState(false);
    const [showMessageError, setShowMessageError] = useState(false);

    const FormHandler = (event) => {
        event.preventDefault();
        
        let isValid = true;

        if (name.trim() === "") {
            setShowNameError(true);
            isValid = false;
        } else {
            setShowNameError(false);
        }

        if (email.trim() === "") {
            setShowEmailError(true);
            isValid = false;
        } else {
            setShowEmailError(false);
        }

        if (phone.trim() === "") {
            setShowPhoneError(true);
            isValid = false;
        } else {
            setShowPhoneError(false);
        }

        if (department === "") {
            setShowDepartmentError(true);
            isValid = false;
        } else {
            setShowDepartmentError(false);
        }

        if (message.trim() === "") {
            setShowMessageError(true);
            isValid = false;
        } else {
            setShowMessageError(false);
        }

        if (!isValid) return;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Department:", department);
        console.log("Message:", message);
    };

    return (
        <form onSubmit={FormHandler}>
            <div className="form-control">
                <input 
                    placeholder="Your Name" 
                    onChange={(e) => setName(e.target.value)} 
                    value={name} 
                />
                {showNameError && <p>Name cannot be empty</p>}
            </div>
            <div className="form-control">
                <input 
                    placeholder="Your Email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                />
                {showEmailError && <p>Email cannot be empty</p>}
            </div>
            <div className="form-control">
                <input 
                    placeholder="Phone Numbers" 
                    onChange={(e) => setPhone(e.target.value)} 
                    value={phone} 
                />
                {showPhoneError && <p>Phone number cannot be empty</p>}
            </div>
            <div className="form-control">
                <select 
                    onChange={(e) => setDepartment(e.target.value)} 
                    value={department}
                >
                    <option value="">Select Department</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                </select>
                {showDepartmentError && <p>Department must be selected</p>}
            </div>
            <div className="form-control">
                <textarea 
                    placeholder="Text Message" 
                    onChange={(e) => setMessage(e.target.value)} 
                    value={message}
                />
                {showMessageError && <p>Message cannot be empty</p>}
            </div>
            <button>Submit</button>
        </form>
    );
};

export default FormContact;