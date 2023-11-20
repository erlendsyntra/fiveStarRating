import { useState } from "react";
import clsx from "clsx";
import "./style.scss";
const FiveStarRating = ({ staramount = 5, value = 0, disabled = false }) => {
  const [currentStars, setCurrentStars] = useState(+value);
  const [hover, setHover] = useState(null);
  const classes = [...Array(staramount)].map((star, index) => {
    const myclass = clsx({
      star: true,
      "star--full": index + 1 <= currentStars || index + 1 <= hover,
      "star--disabled": disabled,
    });
    return myclass;
  });
  const register = (e) => {
    if (e.target.nodeName === "SPAN" && !disabled) {
      setCurrentStars(e.target.dataset.starnr);
    }
  };
  return (
    <div onClick={register}>
      {[...Array(staramount)].map((star, index) => {
        const starValue = index + 1;
        return (
          <div className="outside">
            <span
              key={starValue}
              data-starnr={starValue}
              className={classes[index]}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(null)}
            ></span>
          </div>
        );
      })}
      <p>Your rating is {currentStars} stars.</p>
    </div>
  );
};
export default FiveStarRating;
