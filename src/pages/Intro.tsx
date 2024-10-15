import IntroAdd from '../components/introAdd/IntroAdd';
import BestServices from '../components/bestService/BestService';
import NewsLetter from '../components/newsletter/NewsLetter';
import CourseCategories from '../components/courseCategories/CourseCategories';

import './style.css';

function Intro() {

    return (
      <div className='introContainer'>
        <IntroAdd/>
        <BestServices/>
        <CourseCategories/>
        <NewsLetter/>
      </div>
    )
  }
  
  export default Intro;