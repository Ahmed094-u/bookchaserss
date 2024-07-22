import React, { useState, useEffect } from 'react';
import './Explore.css';
import Navbar from './Navbar';
import Footer from './Footer';
import bookOfTheMonthImage from '../assets/atomic.jpg'; // Adjust path as necessary
import img1984 from '../assets/1984.jpg';
import imgToKillAMockingbird from '../assets/mockingbird.jpg';
import imgPrideAndPrejudice from '../assets/pride.jpg';
import imgCatcherInTheRye from '../assets/rye.jpg';
import imgMidnightLibrary from '../assets/midnight.jpg';
import imgWhereTheCrawdadsSing from '../assets/crawdads.jpg';
const useDocumentTitle = title => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const Explore = () => {
  useDocumentTitle("Explore");

  const [currentCategory, setCurrentCategory] = useState(0);

  const categories = [
    {
      name: "Staff Picks",
      books: [
        {
          title: "1984",
          author: "George Orwell",
          summary: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
          imageUrl: img1984,
          link: "https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934"
        },
        {
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          summary: "A novel about the serious issues of rape and racial inequality, narrated by the young Scout Finch.",
          imageUrl: imgToKillAMockingbird,
          link: "https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0061120081"
        }
      ]
    },
    {
      name: "Member Favorites",
      books: [
        {
          title: "Pride and Prejudice",
          author: "Jane Austen",
          summary: "A romantic novel of manners that charts the emotional development of the protagonist Elizabeth Bennet.",
          imageUrl: imgPrideAndPrejudice,
          link: "https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/1503290565"
        },
        {
          title: "The Catcher in the Rye",
          author: "J.D. Salinger",
          summary: "A story about teenage alienation and angst, narrated by the iconic character Holden Caulfield.",
          imageUrl:imgCatcherInTheRye,
          link: "https://www.amazon.com/Catcher-Rye-J-D-Salinger/dp/0316769487"
        }
      ]
    },
    {
      name: "New Releases",
      books: [
        {
          title: "The Midnight Library",
          author: "Matt Haig",
          summary: "A novel about regrets, the choices that go into a life well lived, and the possibility of an infinite number of parallel lives.",
          imageUrl: imgMidnightLibrary,
          link: "https://www.amazon.com/Midnight-Library-Novel-Matt-Haig/dp/0525559477"
        },
        {
          title: "Where the Crawdads Sing",
          author: "Delia Owens",
          summary: "A murder mystery, a coming-of-age narrative and a celebration of nature.",
          imageUrl: imgWhereTheCrawdadsSing,
          link: "https://www.amazon.com/Where-Crawdads-Sing-Delia-Owens/dp/0735219109"
        }
      ]
    }
  ];

  const handleNext = () => {
    setCurrentCategory((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentCategory((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <>
      <Navbar />
      <div className="explore-page">
        <section className="book-of-the-month">
          <h2>Book of the Month</h2>
          <img src={bookOfTheMonthImage} alt="Atomic Habits" />
          <div className="botm-text">
            <h3>Atomic Habits by James Clear</h3>
            <p>Explore 'Atomic Habits' by James Clear with us this month—a guide on how tiny changes can dramatically improve your life. Join our discussion to learn how small habits can lead to big successes. Don't miss this opportunity to transform your daily routines and achieve lasting growth!</p>
            <ul>
              <li>The #1 New York Times bestseller.</li>
            </ul>
            <a href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299" target="_blank" rel="noopener noreferrer">
              <button className="btn">Buy on Amazon</button>
            </a>
          </div>
        </section>
        <section className="book-recommendations">
          <h2>Book Recommendations</h2>
          <div className="carousel-container">
            <button className="carousel-button" onClick={handlePrev}>&lt;</button>
            <div className="carousel">
              <h3>{categories[currentCategory].name}</h3>
              <div className="book-list">
                {categories[currentCategory].books.map((book, index) => (
                  <div className="book-item" key={index}>
                    <img src={book.imageUrl} alt={book.title} className="book-image" />
                    <div className="book-summary">
                      <p>{book.summary}</p>
                      <a href={book.link} target="_blank" rel="noopener noreferrer">
                        <button className="buy-button">Buy on Amazon</button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-button" onClick={handleNext}>&gt;</button>
          </div>
        </section>
        <section className="book-reviews">
          <h2>Book Reviews</h2>
          <div className="review-list">
            <div className="review">
              <h4>"The Great Gatsby" - Reviewed by Emily</h4>
              <p>A poignant exploration of love, wealth and social change in Jazz Age America. Truly a masterpiece!</p>
            </div>
            <div className="review">
              <h4>"1984" - Reviewed by John</h4>
              <p>Orwell's dystopian vision is chillingly relevant today, highlighting the dangers of totalitarianism and surveillance.</p>
            </div>
          </div>
        </section>
        <div className='btnR'>
        <section className="interactive-elements">
          <h2>Interactive Elements</h2>
          <div className="interactions">
            <div className="quiz">
              <h3>Monthly Book Quiz</h3>
              <p>Test your knowledge on this month's book !</p>
              <a href="https://forms.gle/1bnWph9jsXzgyLga7" target="_blank" rel="noopener noreferrer">
            <button className="quiz-button">Start Quiz</button>
                </a>
             </div>
            <div className="poll">
              <h3>Vote for Next Month's Book</h3>
              <p>Have your say in our next reading selection!</p>
              <button>Vote Now</button>
            </div>
          </div>
        </section>
       
        <section className="reading-challenges">
          <h2>Reading Challenges</h2>
          <p>Join our 2024 Reading Challenge - Read 50 books this year and get featured on our leader board!</p>
          <button>Join the Challenge</button>
        </section>
        <section className="upcoming-events">
          <h2>Upcoming Events & Meetups</h2>
          <div className="event">
            <h3>Live Author Q&A with George R.R. Martin</h3>
            <p>Date: September 15th | Time: 7 PM EST | Location: Zoom</p>
            <button>RSVP Now</button>
          </div>
        </section>
        <section className="resources-for-readers">
          <h2>Resources for Readers</h2>
          <ul>
          <li><a href="./assets/Analyze.pdf" target="_blank" >How to Analyze Books</a></li>
          <li><a href="/understanding_poetry.pdf">Understanding Poetry</a></li>
          </ul>
        </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Explore;
