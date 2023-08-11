import "./Rating.css";
import Star from "../assets/icon-star.svg";
import { useState } from "react";

function Rating({ rating, setRating, SetShowThankYouPage }) {
  const [currentRating, setCurrentRating] = useState({
    numone: false,
    numtwo: false,
    numthree: false,
    numfour: false,
    numfive: false,
  });

  const handleSubmit = () => {
    if (!rating) return;

    SetShowThankYouPage(true);
  };

  return (
    <div>
      <div className="Main-layout">
        <div className="circle">
          <img src={Star} alt="" />
        </div>
        <h1>How did we do?</h1>
        <p>
          Please let us know we did with your support request. All feedback is
          appreciated to help us improve our offering!
        </p>
        <div className="buttons">
          <div
            className={currentRating.numone ? "button1.active" : "button1"}
            onClick={() => {
              setCurrentRating({
                numone: true,
                numtwo: false,
                numthree: false,
                numfour: false,
                numfive: false,
              });
              setRating(1);
            }}
          >
            1
          </div>
          <div
            className={currentRating.numtwo ? "button2.active" : "button2"}
            onClick={() => {
              setCurrentRating({
                numone: false,
                numtwo: true,
                numthree: false,
                numfour: false,
                numfive: false,
              });
              setRating(2);
            }}
          >
            2
          </div>
          <div
            className={currentRating.numthree ? "button3.active" : "button3"}
            onClick={() => {
              setCurrentRating({
                numone: false,
                numtwo: false,
                numthree: true,
                numfour: false,
                numfive: false,
              });
              setRating(3);
            }}
          >
            3
          </div>
          <div
            className={currentRating.numfour ? "button4.active" : "button4"}
            onClick={() => {
              setCurrentRating({
                numone: false,
                numtwo: false,
                numthree: false,
                numfour: true,
                numfive: false,
              });
              setRating(4);
            }}
          >
            4
          </div>
          <div
            className={currentRating.numfive ? "button5.active" : "button5"}
            onClick={() => {
              setCurrentRating({
                numone: false,
                numtwo: false,
                numthree: false,
                numfour: false,
                numfive: true,
              });
              setRating(5);
            }}
          >
            5
          </div>
        </div>
        <button className="button-layout" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Rating;
