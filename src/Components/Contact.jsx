import Logo from "./Logo";
import Footer from "./Footer";
import React, { useState } from "react";

import CurrentDate from "./CurrentDate";
import Navbar from "./Navbar";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully! Thank you for reaching out.");
        setFormData({ name: "", email: "", message: "" });
    };
    return (
        <div>
            <div className="d-flex justify-content-between">
                <CurrentDate />
                <p className="text-dark fw-bolder pt-3 pe-4 pb-0">
                    <i class="bi bi-1-circle"></i>
                </p>
            </div>

            <Logo />
            <Navbar />


            <div className="container my-5">
                <h4 className=" text-center mb-4">Contact Us</h4>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-dark px-4">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Logo />
            <Footer />



        </div>
    );
}

export default Contact;