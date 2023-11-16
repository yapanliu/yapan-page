import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/CV/Education';
import Experience from '../components/CV/Experience';
import Service from '../components/CV/Service';
import Skills from '../components/CV/Skills';
import Courses from '../components/CV/Courses';
// import BackToTopBtn from '../components/BackToTopBtn';

import courses from '../data/cv/courses';
import degrees from '../data/cv/degrees';
import positions from '../data/cv/positions';
import servicePositions from '../data/cv/servicePositions';
import { skills, categories } from '../data/cv/skills';

const sections = [
  'Education',
  'Experience',
  'Service',
  'Skills',
  'Courses',
];

const cvPath = '../../files/CV-Yapan_Liu-WebsiteVersion-11132023.pdf';

const Resume = () => (
  <Main
    title="CV"
    description="Yapan Liu's CV."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="cv">Curriculum Vitae</Link>  <a href={cvPath} target="_blank" rel="noopener noreferrer">(PDF)</a></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Service data={servicePositions} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />

    </article>
  </Main>
);

export default Resume;
