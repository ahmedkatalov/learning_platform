import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../fireBase/fireStore';

import './Courses.css';

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  video: string;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const querySnapshot = await getDocs(collection(db, 'courses'));
      
      const coursesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Omit<Course, 'id'>
      }));
      setCourses(coursesData as Course[]);
    };

    fetchCourses();
  }, []);

  const handleGetStarted = (id: string) => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className='added-courses-container'>
      {courses.map((course, index) => (
        <div className='added-courses-content' key={index}>
          <img className='added-courses-img' src={course.image} alt={course.title} />
          <h2 className='added-courses-title'>{course.title}</h2>
          <div className="courses-section-icon-box">
              <i className="courses-section-icon fa-regular fa-calendar"></i>
              <i
                className="courses-section-icon fa-regular fa-bookmark"></i>
          </div>
          <div className="courses-section-box">
              <p className="course-level">not for beginners</p>
              <button className="get-started-btn" onClick={() => handleGetStarted(course.id)}>Get Started</button>
          </div>
       </div>
      ))}
    </div>
  );
};

export default Courses;