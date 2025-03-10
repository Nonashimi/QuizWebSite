import React from 'react';
import "./author.css";
import { useNavigate } from 'react-router-dom';

const Author = () => {
  const router = useNavigate();
  return (
    <div className="Author" onClick ={() => router("/my_profile")}>
        <div className="author_section">
          <div className="author_img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGCUJgMuxvdYN1Vg2EOXX89f9-o8_uu5IZA&s" alt="" />
          </div>
          <div className="author_text">
            <div className="author_type">
              Автор
            </div>
            <div className="author_name">
              Olzhas Yergali
            </div>
            <div className="author_date">
              создано 5 месяцов назад
            </div>
          </div>
        </div>
      </div>
  )
}

export default Author