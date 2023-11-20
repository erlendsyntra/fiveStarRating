import { useState } from "react";
import { FaArrowsRotate } from "react-icons/fa6";
import clsx from "clsx";
import "./style.scss";
const FiveStarRating = ({
  staramount = 5,
  value = 0,
  disabled = false,
  size = 70,
}) => {
  // const sizePX = `{size}px`
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
  const reset = () => {
    if (!disabled) {
      setCurrentStars(0);
    }
  };
  return (
    <>
      <div onClick={register} key={99}>
        {[...Array(staramount)].map((star, index) => {
          const starValue = index + 1;
          return (
            <div
              className="outside"
              style={{ width: `${size}px`, height: `${size}px` }}
            >
              <span
                key={starValue}
                data-starnr={starValue}
                className={classes[index]}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(null)}
                style={{ width: `${size - 4}px`, height: `${size - 4}px` }}
              ></span>
            </div>
          );
        })}
        <FaArrowsRotate
          onClick={reset}
          className={disabled ? "reset--hidden" : "reset"}
        />
        <p>
          Your rating is {currentStars}
          {currentStars == 1 ? " star" : " stars"}.
        </p>
      </div>
    </>
  );
};
export default FiveStarRating;
