import { useReducer } from "react";
import Button from "./Button";
import Panel from "./panel";

const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const SET_VALUE_TO_ADD = "change-value_to_add";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }
  //Whatever gets returned will be the new state .
  /* if (action.type === INCREMENT_COUNT) {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === DECREMENT_COUNT) {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  if (action.type === SET_VALUE_TO_ADD) {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }
  return state;*/
};

function Counter({ initialCounter }) {
  //const [count, setCount] = useState(initialCounter); // Use array destructuring
  //const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCounter,
    valueToAdd: 0,
  });
  const increment = () => {
    //setCount(count + 1);
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    //setCount(count - 1);
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    //setValueToAdd(value);
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
    //setCount(count + valueToAdd);
    //setValueToAdd(0);
  };
  console.log(state);
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot </label>
        <input
          value={state.valueToAdd || ""}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          type="number"
          onChange={handleChange}
          placeholder="Enter a number "
        ></input>
        <Button>Add It !</Button>
      </form>
    </Panel>
  );
}

export default Counter;
