import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../fireBase/fireStore';

interface Course {
  title: string;
  description: string;
  image: string;
  price: number;
  video: string;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const querySnapshot = await getDocs(collection(db, 'courses'));
      
      const coursesData = querySnapshot.docs.map(doc => doc.data() as Course);
      setCourses(coursesData);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      {courses.map((course, index) => (
        <div key={index}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <img src={course.image} alt={course.title} />
          <p>price: {course.price}</p>
          <video controls src={course.video}></video>
        </div>
      ))}
    </div>
  );
};

export default Courses;