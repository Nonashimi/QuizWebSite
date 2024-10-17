import axios from "axios";
export default class QuizService{
    static async getQuizQuestionById(id){
         const response = await axios.get(`http://localhost:8762/quizapp/question/quiz/${id}`);
        
        return response;
    }  
    
    static async getAllQuiz(){
        const response = await axios.get("http://localhost:8762/quizapp/quizzes/getAll");
        return response;
    }

}