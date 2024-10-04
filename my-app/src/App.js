import { useEffect } from 'react';
import './style/App.css';
import AppRouter from './UI/AppRouter/AppRouter';
import axios from "axios";
function App() {
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8762/quizapp/quizzes/getAll");
    console.log(response.data);
  }
  // const func = {
  //   quizId: 1,
  //   question: "Who is a dad of Bakdaulet?",
  //   category: "Dalban",
  //   level: "HARD"
  // };


  // const addQuestion = async() =>{
  //   const {data} = await axios.post("http://localhost:8071/quizapp/question/", func);

  //   console.log(data);
    
  // }
  useEffect(() =>{
    fetchData();
  });

  return (
      <div>
        <AppRouter></AppRouter>
      </div>
  );
}

export default App;
