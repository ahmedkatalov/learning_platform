import CoursesSection from '../components/coursesSection/CoursesSection';
import Greeting from '../components/greeting/Greeting';

interface Course {
  id: number;
  title: string;
  image: string;
  level: string;
}

interface HomeProps {
  savedCourses: Course[];
  onSaveCourse: (course: Course) => void;
}

function Home({ savedCourses, onSaveCourse }: HomeProps) {
  return (
    <div className='home-container'>
      <Greeting />
      <CoursesSection 
        savedCourses={savedCourses}
        onSaveCourse={onSaveCourse} />
    </div>
  );
}

export default Home;