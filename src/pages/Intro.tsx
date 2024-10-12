import IntroAdd from '../components/introAdd/IntroAdd';
import BestServices from '../components/bestService/BestService';
import NewsLetter from '../components/newsletter/NewsLetter';
import CourseCategories from '../components/courseCategories/CourseCategories';
// import MemoryGame from '../components/memoryGame/MemoryGame';

function Intro() {

    return (
      <div className='mainContainer'>
        {/* <MemoryGame/> */}
        <IntroAdd/>
        <BestServices/>
        <CourseCategories/>
        <NewsLetter/>
      </div>
    )
  }
  
  export default Intro;