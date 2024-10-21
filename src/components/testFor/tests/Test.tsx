import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/store";
import { deleteQuestion } from "../../../redux/test/testSlise"; // Правильный импорт deleteQuestion
import "./Test.css";

const Test: FC = () => {
  const questions = useSelector((state: RootState) => state.questions.questions);
  const role = useSelector((state: RootState) => state.role.role);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [isTestFinished, setIsTestFinished] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Функция для выбора ответа
  const handleAnswerSelection = (answerIndex: number) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(updatedAnswers);
  };

  const handleBack = () => {
    navigate("/choose");
  };

  // Пропустить вопрос
  const handleSkipQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
  };

  // Перейти к следующему вопросу или завершить тест
  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setIsTestFinished(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Вернуться к предыдущему вопросу
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Подсчет результата
  const calculateResult = () => {
    let correctAnswers = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  // Функция удаления теста
  const removeTest = (id: number) => {
    dispatch(deleteQuestion(id));
  };

  // Рестарт теста (сброс всех состояний)
  const handleRestartTest = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(questions.length).fill(-1));
    setIsTestFinished(false);
  };

  return (
    <div className="test-container">
      {/* Если вопросов нет */}
      {questions.length === 0 ? (
        <div className="test-content">
            <h2 className="test-heading-h2">The spanking is empty here..</h2> 
        </div>
      ) : !isTestFinished ? (
        <div className="test-content">
          <h2 className="test-heading-h2">{questions[currentQuestionIndex].question}</h2>
          <ul className="test-options-ul">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li
                key={index}
                className={`test-options ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}`}
                onClick={() => handleAnswerSelection(index)}
              >
                {option}
              </li>
            ))}
          </ul>
          <div className="test-btns-box">
            <button
              className="test-btn"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0} 
            >
              Previous Question
            </button>
            <button className="test-btn" onClick={handleSkipQuestion}>
              Skip
            </button>
            <button className="test-btn" onClick={handleNextQuestion}>
              Next Question
            </button>
            {role === "teacher" && (
              <div className="buttons-for-teacher">
                <button className="test-btn" onClick={handleBack}>
                  Go back
                </button>
                <button
                  className="test-btn"
                  onClick={() => removeTest(questions[currentQuestionIndex].id)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Если тест завершен, показываем результаты и кнопку рестарта */
        <div className="test-result-box">
          <h2 className="test-result-text">
            Your Results: {calculateResult()} / {questions.length}
          </h2>
          <div className="test-cute-star4"></div>
          <button className="test-btn" onClick={handleRestartTest}>
            Restart Test
          </button>
        </div>
      )}
    </div>
  );
};

export default Test;
