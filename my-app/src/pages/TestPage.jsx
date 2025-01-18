import React, { useContext, useState } from 'react'
import CardPageTop from '../UI/CardPageTop/CardPageTop';
import TestCards from '../UI/TestCard/TestCards';
import CardsStatistic from '../UI/CardsStatistic/CardsStatistic';
import DataContext from '../UI/context/DataContext';
import TestCheckButton from '../UI/TestCard/TestCheckButton';

const TestPage = () => {
  const arr = [
    {
      id: 1,
      question: "What is the capital of France?",
      clicked: false,
      options: [
        { option: "Berlin", choosed: false },
        { option: "London", choosed: false },
        { option: "Paris", choosed: false },
        { option: "Madrid", choosed: false }
      ],
      correctAnswer: "Paris"
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      clicked: false,
      options: [
        { option: "Earth", choosed: false },
        { option: "Mars", choosed: false },
        { option: "Jupiter", choosed: false },
        { option: "Venus", choosed: false }
      ],
      correctAnswer: "Mars"
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      clicked: false,
      options: [
        { option: "Indian", choosed: false },
        { option: "Pacific", choosed: false },
        { option: "Atlantic", choosed: false },
        { option: "Arctic", choosed: false }
      ],
      correctAnswer: "Pacific"
    },
    {
      id: 4,
      question: "Who wrote 'Romeo and Juliet'?",
      clicked: false,
      options: [
        { option: "Charles Dickens", choosed: false },
        { option: "Mark Twain", choosed: false },
        { option: "William Shakespeare", choosed: false },
        { option: "Leo Tolstoy", choosed: false }
      ],
      correctAnswer: "William Shakespeare"
    },
    {
      id: 5,
      question: "Which element has the chemical symbol 'O'?",
      clicked: false,
      options: [
        { option: "Oxygen", choosed: false },
        { option: "Gold", choosed: false },
        { option: "Silver", choosed: false },
        { option: "Iron", choosed: false }
      ],
      correctAnswer: "Oxygen"
    },
    {
      id: 6,
      question: "What is the tallest mountain in the world?",
      clicked: false,
      options: [
        { option: "K2", choosed: false },
        { option: "Mount Everest", choosed: false },
        { option: "Kilimanjaro", choosed: false },
        { option: "Denali", choosed: false }
      ],
      correctAnswer: "Mount Everest"
    },
    {
      id: 7,
      question: "Who is known as the father of computers?",
      clicked: false,
      options: [
        { option: "Charles Babbage", choosed: false },
        { option: "Alan Turing", choosed: false },
        { option: "Thomas Edison", choosed: false },
        { option: "Nikola Tesla", choosed: false }
      ],
      correctAnswer: "Charles Babbage"
    },
    {
      id: 8,
      question: "Which country hosted the 2016 Summer Olympics?",
      clicked: false,
      options: [
        { option: "China", choosed: false },
        { option: "Brazil", choosed: false },
        { option: "Greece", choosed: false },
        { option: "Japan", choosed: false }
      ],
      correctAnswer: "Brazil"
    },
    {
      id: 9,
      question: "What is the hardest natural substance on Earth?",
      clicked: false,
      options: [
        { option: "Iron", choosed: false },
        { option: "Diamond", choosed: false },
        { option: "Graphite", choosed: false },
        { option: "Gold", choosed: false }
      ],
      correctAnswer: "Diamond"
    },
    {
      id: 10,
      question: "Which is the smallest planet in our solar system?",
      clicked: false,
      options: [
        { option: "Mercury", choosed: false },
        { option: "Mars", choosed: false },
        { option: "Venus", choosed: false },
        { option: "Neptune", choosed: false }
      ],
      correctAnswer: "Mercury"
    }
  ];
  const [cartPage, setCartPage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [questionsArray, setQuestionArray] = useState(arr);
  const [tryAgain, setTryAgain] = useState([]);
  const [correct, setCorrect] = useState([]);

  const changeQuestionArray = (updatedArray) => {
    setQuestionArray(updatedArray);
    const clickedCount = updatedArray.filter(q => q.clicked).length;
    setCartPage(clickedCount);
  };

  const clickComplete = () => {
    const correctAnswers = [];
    const retryQuestions = [];

    questionsArray.forEach(q => {
      const isCorrect = q.options.some(option => option.choosed && option.option === q.correctAnswer);
      if (isCorrect) {
        correctAnswers.push(q.id);
      } else {
        retryQuestions.push(q.id);
      }
    });

    setCorrect(correctAnswers);
    setTryAgain(retryQuestions);
    setIsComplete(true);
  };

  const toLearnAgain = () => {
    setCartPage(0);
    setQuestionArray(findTryAgainElements());
    setTryAgain([]);
    setCorrect([]);
    setIsComplete(false);
  };
  const findTryAgainElements = () => {
    return arr.filter(q => tryAgain.includes(q.id));
  };

  const toRestart = () => {
    setCartPage(0);
    setQuestionArray(arr);
    setTryAgain([]);
    setCorrect([]);
    setIsComplete(false);
  };
  return (
    <DataContext.Provider value={{isComplete, setIsComplete}}>
    <div style={{paddingBottom: "20px 0"}}>
        <CardPageTop cartPage = {cartPage} totalPage = {questionsArray.length}/>
        {isComplete ? 
        <div className="" style={{display: "flex", flexDirection: "column", gap: "60px"}}>
          <CardsStatistic toLearnAgain={ toLearnAgain } toRestart={toRestart} type = {"test"} tr = {tryAgain.length} cor = {correct.length}/>
          <TestCards isComplete = {isComplete} setIsComplete = {setIsComplete} questionsArray={questionsArray} changeQuestionArray={changeQuestionArray}/>
          </div>
        :
        <div className="">
            <TestCards isComplete = {isComplete} setIsComplete = {setIsComplete} questionsArray={questionsArray} changeQuestionArray={changeQuestionArray}/>
            <TestCheckButton clickIsComplete = {clickComplete}/>
        </div>
        }
    </div>
    </DataContext.Provider>
  )
}

export default TestPage