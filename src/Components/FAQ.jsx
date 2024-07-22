import React, { useState } from 'react';
import './FAQ.css'; // Create this CSS file for FAQ-specific styles

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is Book Chasers?",
            answer: "Book Chasers is a community of book lovers who come together to discuss books, share recommendations, and explore new genres."
        },
        {
            question: "How can I join the book club?",
            answer: "You can join the book club by filling out the membership form on our website. We'll get back to you with more details."
        },
        {
            question: "What kind of events do you organize?",
            answer: "We organize a variety of events including book discussions, author meet-and-greets, and reading challenges."
        },
        {
            question: "How can I suggest a book?",
            answer: "You can suggest a book by selecting the 'Book suggestion' option in the contact form and providing the details of the book."
        },
        {
            question: "Who can I contact for more information?",
            answer: "For more information, you can fill out the contact form on this page or email us at info@bookchasers.com."
        },
        { question: "When is the book discussion takes place?",
            answer: "The book discussion takes place every last wednesday of the month, at 5 PM in Ottawa public library 2nd floor."
        }
    ];

    return (
        <div className="faq-section">
            
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <h3 onClick={() => toggleAccordion(index)} className="faq-question">
                        {faq.question} <span className={`arrow ${activeIndex === index ? 'active' : ''}`}>&#9660;</span>
                    </h3>
                    <p className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                        {faq.answer}
                    </p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default FAQ;
