import FiveStarRating from "./components/FiveStarRating";

const App = () => {
  return (
    <div>
      <FiveStarRating size={50} staramount={10} />
      <FiveStarRating size={100} value={2} />
      <FiveStarRating value={5} />
      <FiveStarRating value={3} disabled />
      <FiveStarRating disabled />
    </div>
  );
};
export default App;
