import React, { useState, useEffect } from 'react';
import './Contact.css'; // Make sure to create this CSS file
import Navbar from './Navbar'; // Adjust path as necessary
import Footer from './Footer'; // Adjust path as necessary
import FAQ from './FAQ'; // Import the FAQ component
import Modal from './Modal'; 

const useDocumentTitle = title => {
    useEffect(() => {
      document.title = title;
    }, [title]);
};

const Contact = () => {
    useDocumentTitle('Contact Us');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement what happens when the form is submitted
        console.log(formData);
        setIsModalOpen(true); // Open the modal
    };
    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
        // Clear the form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            phone: '',
            message: ''
        });
    };

    return (
        <>
            <Navbar />
            <div className="contact-header">
                <h2>Frequently asked questions</h2>
            </div>
            <FAQ /> {/* Include the FAQ section here */}
            <h1 className='h1'>Contact us</h1>
            <p className='p'>Need to get in touch with us? 
                If your question isn't covered in our FAQs, use the below form for customer support. Please provide as much detail about your issue as you can. 
                We'll be in touch as soon as possible.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                />
                <br />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                />
                <br />
                <select name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="">Please select a subject</option>
                    <option value="query">Query</option>
                    <option value="feedback">Feedback</option>
                    <option value="book-sug">Book suggestion</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    required
                />
                <br />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message ..."
                    required
                ></textarea>
                <br />
                <button type="submit">Send Message</button>
            </form>
            <Modal show={isModalOpen} onClose={handleCloseModal}>
                <h2>Thank You!</h2>
                <p>Your message has been sent successfully. We will get back to you shortly.</p>
            </Modal>
            <Footer />
            
        </>
    );
};

export default Contact;
