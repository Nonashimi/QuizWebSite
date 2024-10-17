import React from 'react'
import "../style/MyProfile.css"
import Quiz from '../components/MyQuizzes/Quiz'
import Quiz_list from '../components/MyQuizzes/Quiz_list';
const MyProfile = () => {
    const arr = [
        {
          title: "The Great Gatsby",
          quiz_number: 180,
          quiz_owner: "Olzhas Yergali",
          id: 1,
          level: "easy"
        },
        {
          title: "Cruel prince",
          quiz_number: 170,
          quiz_owner: "Olzhas Yergali",
          id: 2,
          level: "hard"
        },
        {
          title: "English for B1",
          quiz_number: 100,
          quiz_owner: "Olzhas Yergali",
          id: 3,
          level: "medium"
        },
        {
          title: "Disney Princess",
          quiz_number: 30,
          quiz_owner: "Olzhas Yergali",
          id: 4,
          level: "easy"
        }
      ];
  return (
    <div className='profile'>
        <div className="profile_header">
            <img className='profile_img' src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/Jujutsu-Kaisen-0-Yuta-Rika.jpg" alt="" /> 
            <div className="profile_data">
                <div className="profile_name">Olzhas Yergali</div>
                <div className="profile_text"><strong>100</strong> модулей</div>
            </div>
        </div>
        <Quiz_list arr = {arr}></Quiz_list>

    </div>
  )
}

export default MyProfile