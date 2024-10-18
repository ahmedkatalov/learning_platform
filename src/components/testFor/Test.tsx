import { FC, useState } from 'react';

import './Test.css';

interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
}

const questions: Question[] = [
    {
        id: 1,
        question: 'Какой из вариантов получения этого элемента со страницы будет правильным? <div id="hi">Hello</div>',
        options: ["document.querySelector('#hi')", "document.querySelectorAll('#hi')", "document.getElementByAttribute(id, 'hi')", "document.getElementById('#hi')"],
        correctAnswer: 0,
    },
    {
        id: 2,
        question: 'Какой из методов безопаснее всего использовать, если мы четко хотим получить от пользователя текст и использовать его дальше?',
        options: ['insertAdjacentHTML', 'innerHTML', 'placeText()', 'textContent'],
        correctAnswer: 3,
    },
    {
        id: 3,
        question: 'Что выведет этот код: let y = 1; let x = y = 2; alert(x);',
        options: ['2', 'Будет ошибка', 'х', '1'],
        correctAnswer: 0,
    },
    {
        id: 4,
        question: 'При получении псевдомассива элементов через метод querySelectorAll у него доступен такой метод как...',
        options: ['push()', 'remove()', 'forEach()', 'map()'],
        correctAnswer: 2,
    },
    {
        id: 5,
        question: 'Как отменить стандартное поведение браузера при работе с ссылками, формами и тп?',
        options: ['event.stopPropagation()', 'event.preventDefault()', 'event.stop()', 'event.target=false'],
        correctAnswer: 1,
    },
    {
        id: 6,
        question: 'Какие методы возвращают новый массив в результате своей работы?',
        options: ['map, filter, some', 'forEach, map, pop', 'filter, push, sort', 'filter, map, slice'],
        correctAnswer: 3,
    },{
        id: 7,
        question: 'Event loop - это...',
        options: ['Механизм контроля обработчиков событий на DOM-элементах', 'Механизм, определяющий в какой момент времени происходит визуальный рендер', 'Механизм контроля очереди вызова асинхронных операций', 'Механизм контроля событий, связанных с отправкой запросов на сервер и получения ответов'],
        correctAnswer: 2,
    },
    {
        id: 8,
        question: 'Какой командой можно удалить элемент со страницы?',
        options: ['delete(div)', 'div.delete()', 'remove(div)', 'div.remove()'],
        correctAnswer: 3,
    },{
        id: 9,
        question: 'Правда ли что a == b ? a = [1, 2, 3]; b = [1, 2, 3];',
        options: ['Да, так как у массивов одинаоковое содержимое', 'Нет, это два разных массива с одинаковым содержимым', 'Мне плоха', 'Да, так как масиивы передаются в переменные по значению'],
        correctAnswer: 1,
    },
    {
        id: 10,
        question: 'Сколько аргументов может быть у функции?',
        options: ['Не более 10', 'Сколько угодно', '365', 'Зависит от способа объявления функции'],
        correctAnswer: 1,
    },{
        id: 11,
        question: 'Какого метода не существует у свойства ClassList?',
        options: ['.contains()', '.toggle()', '.includes()', '.remove()'],
        correctAnswer: 2,
    },
    {
        id: 12,
        question: 'Как называется прием из кода ниже? const user = { name: "Alex", age: 25}; const {name, age} = user;',
        options: ['Интерполяция', 'Деструктуризация', 'Делегирование', 'Динамическая типизация'],
        correctAnswer: 1,
    },{
        id: 13,
        question: 'В чем ключевая разница между методами call и apply?',
        options: ['call принимает в себя дополнительные аргументы ввиде строки, а apply - ввиде массива', 'apply принимает в себя дополнительные аргументы ввиде строки, а call - ввиде массива', 'У этих методов нет отличий', 'call - это звонить, а apply - принимать'],
        correctAnswer: 0,
    },
    {
        id: 14,
        question: 'Как правильно задать наследование одного класса от другого?',
        options: ['class Slider from Element', 'class Slider proto Elemnt', 'class Slider exteds Element', 'class Slider child of Element'],
        correctAnswer: 2,
    },{
        id: 15,
        question: 'Делегирование событий - это прием, который позволяет...',
        options: ['Уменьшить количество обработчиков событий', 'Проще взаимодействовать с DOM-деревом, легко работать с неограниченным количеством элементов в родителе', 'не обращать внимания на всплытие событий', 'все выше перечисленное, кроме пункта №3'],
        correctAnswer: 3,
    },
];

const Test: FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<number[]>(Array(questions.length).fill(-1));
    const [isTestFinished, setIsTestFinished] = useState(false);

    const handleAnswerSelection = (answerIndex: number) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestionIndex] = answerIndex;
        setUserAnswers(updatedAnswers);
    };

    const handleSkipQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex === questions.length - 1) {
            setIsTestFinished(true);
        } else {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    };

    const calculateResult = () => {
        let correctAnswers = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === questions[index].correctAnswer) {
                correctAnswers++;
            }
        });
        return correctAnswers;
    };

    return (
        <div className='test-container'>
            {!isTestFinished ? (
                <div className='test-content'>
                    <h2 className='test-heading-h2'>
                        {questions[currentQuestionIndex].question}
                    </h2>
                    <ul className='test-options-ul'>
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <li key={index} 
                                className='test-options'
                                onClick={() => handleAnswerSelection(index)}>
                                
                                {option}
                            </li>
                        ))}
                    </ul>
                    <div className='test-btns-box'>
                        <button className='test-btn' onClick={handleSkipQuestion}>Skip</button>
                        <button className='test-btn' onClick={handleNextQuestion}>Next Question</button>
                    </div>
                </div>
            ) : (
                <div className='test-result-box'>
                    <h2 className='test-result-text'>
                        Your Results: {calculateResult()} / {questions.length}
                    </h2>
                    <div className='test-cute-star4'></div>
                </div>
            )}
        </div>
    );
};

export default Test;