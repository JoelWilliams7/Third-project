import "./App.css";
import Rating from "./components/Rating";
import Thankyou from "./components/Thankyou";
import { useState } from "react";

function App() {
  const [showThankTouPage, setShowThankYouPage] = useState(false);
  const [rating, setRating] = useState(null);
  return (
    <>
      {showThankTouPage ? (
        <Thankyou rating={rating} />
      ) : (
        <Rating
          rating={rating}
          setRating={setRating}
          setShowThankYouPage={setShowThankYouPage}
        />
      )}
    </>
  );
}

export default App;
