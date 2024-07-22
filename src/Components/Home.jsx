import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ModalJoin from './ModalJoin';

const useDocumentTitle = title => {
    useEffect(() => {
      document.title = title;
    }, [title]);
};

const Home = () => {
    useDocumentTitle("Book Chasers");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isThankYouMessage, setIsThankYouMessage] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const testimonials = [
        { id: 1, text: "This book club has changed my reading habits for the better!", author: "Jane Doe" },
        { id: 2, text: "I've discovered so many amazing books through this club.", author: "John Smith" },
        { id: 3, text: "The community is incredibly supportive and insightful.", author: "Alice Johnson" },
        { id: 4, text: "I love the diverse selection of books we cover.", author: "Bob Brown" },
        { id: 5, text: "Every meeting is a new adventure in literature.", author: "Carol White" },
        { id: 6, text: "Joining was the best decision I've made this year!", author: "Dave Wilson" }
    ];

    const handleOpenModal = () => {
        setIsModalOpen(true);
        setIsThankYouMessage(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setFormData({
            name: '',
            email: '',
            phone: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsThankYouMessage(true);
    };

    return (
        <>
            <Navbar />
            <div className="homepage">
                <div className="intro-section">
                    <img src={require('../assets/pplmeeting.png')} alt="Intro" className="intro-image" />
                    <div className="intro-text">
                        <h2>Welcome to Book Chasers</h2>
                        <p>Join our community of passionate readers to explore diverse genres, share discussions, and enjoy the joy of reading together. We're excited to have you with us.
                            Happy reading!</p>
                        <p className='important-p'>Every last Wednesday of the month! <br />
                            at 5:00 PM in Ottawa public library 2nd floor.
                        </p>
                        <button className="join-button" onClick={handleOpenModal}>Join Us</button>
                    </div>
                </div>
                <div className="sndiv">
                    <section className="book-of-the-month-section">
                        <h2 className='up'>Book of the Month</h2>
                        <div className="book-of-the-month-content">
                            <img src={require('../assets/atomic.jpg')} alt="Book of the Month" className="book-image" />
                            <div className="book-description">
                                <p>"Explore 'Atomic Habits' by James Clear with us this month—a guide on how tiny changes can dramatically improve your life. Join our discussion to learn how small habits can lead to big successes.
                                    Don't miss this opportunity to transform your daily routines and achieve lasting growth!"</p>
                            </div>
                        </div>
                    </section>
                    <section className='upcomingg-events'>
                        <h2 className='up'>Upcoming Events:</h2>
                        <div className='upcoming-events-content'>
                            <h3>July Book Discussion</h3>
                            <p>
                                Date: July 15, 2024 <br />
                                Book: "How to Read a Book" by Mortimer J. Adler & Charles van Doran <br />
                                Description: A comprehensive guide to improving reading skills and understanding literature deeply. This classic work offers practical advice on becoming a more thoughtful and analytical reader.
                            </p>
                        </div>
                    </section>
                </div>
                <section className="how-to-join">
                    <h2 className='up'>How to Join</h2>
                    <h3>1. Sign up:</h3>
                    <p> - Click the "Join Now" button below to fill out our quick membership form.</p>
                    <h3>2. Join Discussion:</h3>
                    <p> - Receive a welcome email with details on upcoming events and book discussions.</p>
                    <h3>3. Stay updated:</h3>
                    <p>- Follow us on social media and subscribe to our newsletter for the latest update and book recommendations.</p>
                    <button onClick={handleOpenModal}>Join Us</button>
                </section>
                <h2 className='up'>Testimonials</h2>
                <div className="testimonials">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial">
                            <p className="testimonial-text">{testimonial.text}</p>
                            <p className="testimonial-author">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
            <ModalJoin show={isModalOpen} onClose={handleCloseModal}>
                {!isThankYouMessage ? (
                    <form className="modal-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name *"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email *"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone Number *"
                            required
                        />
                        <button type="submit">Join</button>
                    </form>
                ) : (
                    <div className="thank-you-message">
                        <h2>Thank You!</h2>
                        <p>Thank you for joining us. We will send you an email for more details.</p>
                    </div>
                )}
            </ModalJoin>
        </>
    );
};

export default Home;
