import React from 'react'
import "./Quiz.css";
import { useNavigate } from 'react-router-dom';
const Quiz = ({data}) => {
    const router = useNavigate();
  return (
    <div className="Post" key = {data.id} onClick={() =>router(`/quizzes/${data.id}`)}>
        <div className="post_title">{data.title}</div>
        <div className="post_number">{data.quiz_number} вопросов</div>
        <div className="post_creator">{data.quiz_owner}</div>
    </div>
  )
}

export default Quiz