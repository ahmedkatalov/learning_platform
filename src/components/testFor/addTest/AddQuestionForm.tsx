import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "../../../redux/test/testSlise";
import { useNavigate } from "react-router-dom";

import './Form.css';

export const QuestionForm: FC = () => {
    const navigate = useNavigate()
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState<string[]>(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const dispatch = useDispatch();

  const handleOptionChange = (index: number, value: string) => {
    const updateOptions = [...options];
    updateOptions[index] = value;
    setOptions(updateOptions);
  };

    const handleBack = () => {
        navigate("/choose")
    }

  const handleSubmit = () => {
    const newQuestion = {
      id: Date.now(),
      question: questionText,
      options: options.filter((option) => option !== ""),
      correctAnswer,
    };

    dispatch(addQuestion(newQuestion));
    setQuestionText("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer(0);
  };

  return (
    <div className="question-form">
      <h2>Add a new question</h2>
      <input
        type="text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        placeholder="Enter the question"
      />
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          value={option}
          onChange={(e) => handleOptionChange(index, e.target.value)}
          placeholder={`Option ${index + 1}`}
        />
      ))}
      <select
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(Number(e.target.value))}
      >
        {options.map((_, index) => (
          <option key={index} value={index}>
            Correct Answer {index + 1}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Add Question</button>
      <button onClick={handleBack}>Go back</button>
    </div>
  );
};

export default QuestionForm;