import React, {useState} from 'react';

// Types
import {Difficulty, fetchQuizQuestions, QuestionState} from "./API";

// Components
import QuestionCard from "./components/QuestionCard";

// Styles
import {GlobalStyle, Wrapper} from "./App.styles";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const TOTAL_QUESTION = 10;

const App = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTION,
            Difficulty.MEDIUM
        );

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            // Get answer when user click
            const answer = e.currentTarget.value;
            // Check if answer is correct
            const correct = questions[number].correct_answer === answer;
            // Add score if correct
            if(correct) setScore(prevState => prevState + 1);
            // Save answer in the array for user answers
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer
            };
            setUserAnswers((prevState) => [...prevState, answerObject]);
        }
    }

    const nextQuestion = () => {
        const nextQuestion = number + 1;

        if(nextQuestion === TOTAL_QUESTION) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
    }

    return (
        <>
            <GlobalStyle/>
            <Wrapper>
                <h1>REACT QUIZ</h1>
                {gameOver || userAnswers.length === TOTAL_QUESTION ? (
                    <button className="start" onClick={startTrivia}>
                        Start
                    </button>
                ) : null}
                {!gameOver ? <p className="score">Score: {score}</p> : null}
                {loading ? <p>Loading Question ...</p> : null}
                {!loading && !gameOver ? (
                    <QuestionCard
                        questionNumber={number + 1}
                        totalQuestions={TOTAL_QUESTION}
                        question={questions[number].question}
                        answers={questions[number].answers}
                        userAnswer={userAnswers ? userAnswers[number] : undefined}
                        callback={checkAnswer}
                    />
                ) : null}
                {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTION - 1 ? (
                    <button className="next" onClick={nextQuestion}>
                        Next Question
                    </button>
                ) : null}
            </Wrapper>
        </>
    );
}

export default App;
