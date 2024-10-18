import { FC } from 'react';

import './MyCourses.css';

interface Course {
  id: number;
  title: string;
  image: string;
  level: string;
}

interface MyCoursesProps {
  savedCourses: Course[];
}

const MyCourses: FC<MyCoursesProps> = ({ savedCourses }) => {
  return (
    <div>
      <div className='mycorses-container'>
            <div>
                <h2 className='mycourses-content'>Study well, pookie</h2>
                <p className='mycourses-phrase'>
                    <i className="mycourses-icon fa-solid fa-quote-left"></i> 
                    Learning is never done without error,<br/> and defeat
                    <i className="mycourses-icon fa-solid fa-quote-right"></i>
                    – Vladimir Lenin 
                </p>
            </div>
            <div className='mycourses-cute-star'></div>
        </div>
        
        <div className='mycourses-section'>
            <div className="saved-courses-grid">
                {savedCourses.length === 0 ? (
                    <p className='mycourses-p-txt'>you haven't saved anything yet</p>
                ) : (
                    savedCourses.map((course) => (
                    <div key={course.id} className="course-card">
                        <img className="course-image" src={course.image} alt={course.title} />
                        <h3 className="courses-section-title">{course.title}</h3>
                        <div className="courses-section-box">
                        <p className="course-level">{course.level}</p>
                        <button className="get-started-btn">Get Started</button>
                        </div>
                    </div>
                    ))
                )}
            </div>
        </div>
    </div>
  );
};

export default MyCourses;