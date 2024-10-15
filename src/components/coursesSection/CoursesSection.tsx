import { FC } from 'react';

import './CoursesSection.css';

import Pic1 from '../../assets/homePagePics/pic1.png';
import Pic2 from '../../assets/homePagePics/pic2.png';
import Pic3 from '../../assets/homePagePics/pic3.png';
import Pic4 from '../../assets/homePagePics/pic4.png';
import Pic5 from '../../assets/homePagePics/pic5.png';
import Pic6 from '../../assets/homePagePics/pic6.png';

interface Course {
  id: number;
  title: string;
  level: string;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Become Proficient in WebXR: Create XR Experiences Using A-Frame',
    level: 'Beginner',
    image: Pic1,
  },
  {
    id: 2,
    title: 'Introduction to Logic: Basics of Mathematical Reasoning',
    level: 'Beginner',
    image: Pic2,
  },
  {
    id: 3,
    title: 'Learn Java from Scratch',
    level: 'Beginner',
    image: Pic3,
  },
  {
    id: 4,
    title: 'Learn SQL from Scratch',
    level: 'Beginner',
    image: Pic4,
  },
  {
    id: 5,
    title: 'Data Science Handbook',
    level: 'Beginner',
    image: Pic5,
  },
  {
    id: 6,
    title: 'Machine Learning Handbook',
    level: 'Beginner',
    image: Pic6,
  },
];

const CoursesSection: FC = () => {
  return (
    <section className="courses-section">
      <h2 className='courses-section-heading2'>Get started with our free courses</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img className="course-image" src={course.image} alt={course.title} />
            <h3 className='courses-section-title'>{course.title}</h3>
            <div className='courses-section-icon-box'>
              <i className="courses-section-icon fa-regular fa-calendar"></i>
              <i className="courses-section-icon fa-regular fa-bookmark"></i>
            </div>
            <div className='courses-section-box'>
              <p className="course-level">{course.level}</p>
              <button className="get-started-btn">Get Started</button>
            </div>
          </div>
        ))}
      </div>
      <button className="courses-section-show-more-btn">
        Show More <span className='courses-section-show-btn-arrow'>&#8595;</span>
      </button>
      <div>
        
      </div>
    </section>
  );
};

export default CoursesSection;