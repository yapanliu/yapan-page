import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/CV/Education';
import Experience from '../components/CV/Experience';
import Skills from '../components/CV/Skills';
import Courses from '../components/CV/Courses';

import courses from '../data/cv/courses';
import degrees from '../data/cv/degrees';
import positions from '../data/cv/positions';
import { skills, categories } from '../data/cv/skills';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
];

const Resume = () => (
  <Main
    title="Curriculum Vitae"
    description="Yapan Liu's CV."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="cv">Curriculum Vitae</Link></h2>
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
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />

    </article>
  </Main>
);

export default Resume;
