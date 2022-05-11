import store from "./store";
import { useSelector } from "react-redux";

function actionCreator(type) {
  store.dispatch({ type });
}

function App() {
  const { count } = useSelector((state) => ({
    count: state.count,
  }));

  return (
    <>
      <div className="counter-display">{count}</div>
      <button
        className="increment-button"
        onClick={() => actionCreator("INCREMENT")}
      >
        +
      </button>
      <button
        className="decrement-button"
        onClick={() => actionCreator("DECREMENT")}
      >
        -
      </button>
    </>
  );
}

export default App;
