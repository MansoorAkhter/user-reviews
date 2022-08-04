import React, { useState } from "react";
import people from "./data";
import { FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  return (
    <div className="main">
      <section className="container">
        <div className="title">
          <h1>our reviews</h1>
          <div className="underline"></div>

          <article className="review">
            <div className="img-container">
              <img src={image} alt={name} className="person-img" />
              <span className="quote-icon">
                <FaQuoteRight />
              </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="text">{text}</p>
          </article>
          
        </div>
      </section>
    </div>
  );
};

export default Review;
