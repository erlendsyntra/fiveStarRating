import { useState } from "react";
import clsx from "clsx";
import "./style.scss";
const FiveStarRating = ({ value, disabled = false }) => {
  const [currentStars, setCurrentStars] = useState(+value);
  //   const classes = clsx({
  //     star: true,
  //     "star-full": true,
  //   });
  const logMe = (e) => {
    if (e.target.nodeName === "SPAN" && !disabled) {
      setCurrentStars(e.target.dataset.starnr);
    }
  };
  return (
    <div onClick={logMe}>
      {[...Array(5)].map((star, index) => {
        return (
          <span
            key={index + 1}
            data-starnr={index + 1}
            className={index + 1 <= currentStars ? "star star--full" : "star"}
          ></span>
        );
      })}
    </div>
  );
};
export default FiveStarRating;
