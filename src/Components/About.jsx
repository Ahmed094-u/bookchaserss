import React from 'react';
import './About.css'; // Ensure you create a corresponding CSS file
import mainImage from '../assets/main-image.png'; // Path to your images
import benefitImage1 from '../assets/benefit1.jpg';
import benefitImage2 from '../assets/benefit2.png';
import benefitImage3 from '../assets/benefit3.png';
import teamMember1 from '../assets/team1.png';
import teamMember2 from '../assets/team2.png';
import teamMember3 from '../assets/team3.png';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';

const useDocumentTitle = title => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
const About = () => {
  useDocumentTitle('About');
  return (

    <><>
    <Navbar/>
    </>
    <div className="about-page">
      <section className="about-main">
         <h1>About Book Chasers</h1>
      </section>

      <section className="about-mission">
        <p>Book Chasers aims to create a vibrant community of readers who explore diverse literary worlds. Our mission is to foster a love of reading and promote continuous learning and discussion.</p>
      </section>

      <section className="about-benefits">
        <div className="benefit bfimg">
          <img src={benefitImage1} alt="Benefit 1" />

          <p> Gain access to exclusive book discussions and member-only events that enhance your reading experience.</p>
        </div>
        <div className="benefit reverse">
          <img src={benefitImage2} alt="Benefit 2" />
          <p>Develop deeper understanding and new perspectives with every book you explore with us.</p>
        </div>
        <div className="benefit">
          <img src={benefitImage3} alt="Benefit 3" />
          <p>Connect with fellow book lovers and authors in an engaging, supportive community.</p>
        </div>
      </section>

      <section className="about-team">
    <h2>Our Team</h2>
    <div className="team-members">
        <div className="member m1">
            <img src={teamMember1} alt="John Doe, Founder" />
            <h3>John Doe - Founder</h3>
            <p className="member-description">
                With over 15 years of experience in the literary world, John has spearheaded several successful reading initiatives. His deep passion for literature and community engagement makes him a trustworthy leader in curating exceptional book discussions.
            </p>
        </div>
        <div className="member m2">
            <img src={teamMember2} alt="Jane Smith, Co-Founder" />
            <h3>Jane Smith - Co-Founder</h3>
            <p className="member-description">
                Jane, co-founder of Book Chasers, brings a wealth of expertise in organizing large-scale literary events. Her commitment to fostering a supportive reading community ensures that members receive exclusive access to enriching literary events.
            </p>
        </div>
        <div className="member m3">
            <img src={teamMember3} alt="Alice Johnson, Events Coordinator" />
            <h3>Alice Johnson - Events Coordinator</h3>
            <p className="member-description">
                Alice excels in orchestrating engaging and inclusive book club meetings and special events. Her organizational skills and keen eye for detail ensure that every event is memorable and enhances the reading experience for all members.
            </p>
        </div>
    </div>
</section>

    </div>
    <Footer /> </>
  );
};

export default About;
