/* eslint-disable react/no-unescaped-entities */
import "./Thankyou.css";
import illustration from "../assets/illustration-thank-you.svg";

function Thankyou({ rating }) {
  return (
    <div className="detail-layout">
      <img src={illustration} alt="" />
      <div className="selection">You selected {rating} out of 5</div>
      <h1 className="TY">Thank you!</h1>
      <p className="p-layout">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

export default Thankyou;
