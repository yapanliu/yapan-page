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
        <h2>Yapan &apos;Liu</h2>
        <p><a href="mailto:michael.l.dangelo@gmail.com">yapanliu@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hello, my name is Yapan Liu, I&apos;m a Ph.D. candidate from <a href="http://bestlab.syr.edu/">BEST Lab</a> at Syracuse University .
      </p>
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">Learn More</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">Copyright &copy; Yapan Liu <Link to="/">yapan.page</Link>.</p>
      <p className="acknowledgements">Built on MICHAEL D&apos;ANGELO&apos;s work <Link to="/">mldangelo.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
