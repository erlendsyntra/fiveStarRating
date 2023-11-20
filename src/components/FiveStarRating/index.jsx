import { useState } from "react";
import clsx from "clsx";
import "./style.scss";
const FiveStarRating = ({ staramount = 5, value = 0, disabled = false }) => {
  const [currentStars, setCurrentStars] = useState(+value);
  const classes = [...Array(staramount)].map((star, index) => {
    const myclass = clsx({
      star: true,
      "star--full": index + 1 <= currentStars,
      "star--disabled": disabled,
    });
    return myclass;
  });
  const logMe = (e) => {
    if (e.target.nodeName === "SPAN" && !disabled) {
      setCurrentStars(e.target.dataset.starnr);
    }
  };
  return (
    <div onClick={logMe}>
      {[...Array(staramount)].map((star, index) => {
        return (
          <span
            key={index + 1}
            data-starnr={index + 1}
            className={classes[index]}
          ></span>
        );
      })}
      <p>Your rating is {currentStars} stars.</p>
    </div>
  );
};
export default FiveStarRating;
