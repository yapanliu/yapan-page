import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yapan Liu</h2>
        <p>Ph.D. | Project Engineer | Building Energy Researcher
          | Data Scientist
        </p>
        {/* <ContactIcons /> */}
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hello, my name is Yapan Liu. I&apos;m a Ph.D. in the Mechnical & Aerospace Engineering at Syracuse University. I work with <a href="https://ecs.syracuse.edu/faculty-staff/bing-dong" target="_blank" rel="noopener noreferrer"> Dr. Bing Dong</a> in the Built Environment Science & Technology<a href="http://bestlab.syr.edu/" target="_blank" rel="noopener noreferrer"> (BEST) Lab</a>.
      </p>
      <ul className="actions">
        <li>
          <Link to="/cv" className="button">Learn More</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        <a href="https://www.biblegateway.com/passage/?search=John+8%3A32&version=NKJV" target="_blank" rel="noopener noreferrer">
          And you shall know the truth,
          <br /> and the truth shall make you free.
          <br /> John 8:32 NKJV
        </a>
        <br /> <br /> COPYRIGHT &copy;2023 BY YAPAN LIU <br />
        Credit to <a href="https://github.com/mldangelo/personal-site" target="_blank" rel="noopener noreferrer">MICHAEL D&apos;ANGELO.</a>

      </p>
    </section>
  </section>
);

export default SideBar;
