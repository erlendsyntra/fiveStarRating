import FiveStarRating from "./components/FiveStarRating";

const App = () => {
  return (
    <div>
      <FiveStarRating staramount={10} />
      <FiveStarRating value={2} />
      <FiveStarRating value={5} />
      <FiveStarRating value={3} disabled />
      <FiveStarRating disabled />
    </div>
  );
};
export default App;
