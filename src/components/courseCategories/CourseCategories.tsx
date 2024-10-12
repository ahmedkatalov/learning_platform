import React from 'react';

import './CourseCategories.css';

import Icon1 from '../../assets/introPageIcons/icon1.png';
import Icon2 from '../../assets/introPageIcons/icon2.png';
import Icon3 from '../../assets/introPageIcons/icon3.png';
import Icon4 from '../../assets/introPageIcons/icon4.png';
import Icon5 from '../../assets/introPageIcons/icon5.png';
import Icon6 from '../../assets/introPageIcons/icon6.png';
import Icon7 from '../../assets/introPageIcons/icon7.png';
import Icon8 from '../../assets/introPageIcons/icon8.png';

interface CourseCategory {
  id: number;
  title: string;
  courseCount: string;
  icon: string;
}

const courseCategories: CourseCategory[] = [
  { id: 1, title: '3D + Animation', courseCount: '205+ Courses', icon: Icon1},
  { id: 2, title: 'Development', courseCount: '269+ Courses', icon: Icon2},
  { id: 3, title: 'Technology', courseCount: '202+ Courses', icon: Icon3},
  { id: 4, title: 'Marketing & SEO', courseCount: '269+ Courses', icon: Icon4},
  { id: 5, title: 'Health & Fitness', courseCount: '269+ Courses', icon: Icon5},
  { id: 6, title: 'UI/UX Design', courseCount: '202+ Courses', icon: Icon6},
  { id: 7, title: 'Data Science', courseCount: '202+ Courses', icon: Icon7},
  { id: 8, title: 'Art & Craft', courseCount: '205+ Courses', icon: Icon8},
];

const CourseCategories: React.FC = () => {
  return (
    <section className='course-categories'>
      <h2 className='category-h2-heading'>Explore Courses by Categories</h2>
      <div className='categories-grid'>
        {courseCategories.map(category => (
          <div key={category.id} className='category-card'>
            <img src={category.icon} alt={category.title} className='category-icon'/>
            <div className='category-box-for-txt'>
              <h3 className='category-h3-heading'>{category.title}</h3>
              <p className='category-p-text'>{category.courseCount}</p>
            </div>
          </div>
        ))}
      </div>
      <button className='view-all-btn'>View All</button>
    </section>
  );
};

export default CourseCategories;