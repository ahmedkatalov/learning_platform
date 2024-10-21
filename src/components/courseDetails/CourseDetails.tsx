import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../fireBase/fireStore';

import'./CourseDetails.css';

interface Course {
  title: string;
  description: string;
  image: string;
  price: number;
  video: string;
}

const CourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      if (id) {
        const courseDoc = await getDoc(doc(db, 'courses', id));
        if (courseDoc.exists()) {
          setCourse(courseDoc.data() as Course);
        }
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-details-container">
        <div className="course-details-content">
            <img className="course-details-img" src={course.image} alt={course.title} />
            <h2 className="course-details-title">{course.title}</h2>
            <p className="course-details-descr">Description: {course.description}</p>
            <div className="course-details-box-p-btn"> 
                <p className="course-details-price">Price: {course.price} RUB</p>
                <button className='course-details-btn'>Buy Course</button>
            </div>
            <video className="course-details-video" controls src={course.video}></video>
        </div>
    </div>
  );
};

export default CourseDetails;