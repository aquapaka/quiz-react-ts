import React, {useState} from 'react';
import {Difficulty, fetchQuizQuestions} from "./API";
// Components

const TOTAL_QUESTION = 10;

const App = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(fetchQuizQuestions(TOTAL_QUESTION, Difficulty.MEDIUM))

    const startTrivia = async () => {

    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    const nextQuestion = () => {

    }

    return (
        <div className="App">
            <h1>REACT QUIZ</h1>
            <button className="start" onClick={startTrivia}>
                Start
            </button>
            <p className="score">Score:</p>
            <p>Loading Question ...</p>
            {/*<QuestionCard*/}
            {/*    questionNumber={number + 1}*/}
            {/*    totalQuestions={TOTAL_QUESTION}*/}
            {/*    question={questions[number].question}*/}
            {/*    answers={questions[number].answers}*/}
            {/*    userAnswer={userAnswers ? userAnswers[number] : undefined}*/}
            {/*    callback={checkAnswer}*/}
            {/*/>*/}
            <button className="next" onClick={nextQuestion}>
                Next Question
            </button>
        </div>
    );
}

export default App;
