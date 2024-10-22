import {useNavigate } from "react-router-dom";

import './ChooseForm.css';

const ChooseForTest = () => {
  const navigate = useNavigate();

  const handleTakeTest = () => {
    navigate("/test");
  };

  const handleAddTest = () => {
    navigate("/addTest");
  };

  return (
    <div className="choose-container">


      <div className="button-container">
        <button onClick={handleTakeTest} className="t-btn">
          Start Test
        </button>
        <button onClick={handleAddTest} className="t-btn">
          Add New Test
        </button>
      </div>
    </div>
  );
};

export default ChooseForTest;