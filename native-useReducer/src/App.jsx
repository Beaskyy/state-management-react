import { useReducer } from "react";

const UserForm = () => {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      first: "",
      last: "",
    }
  );
  return (
    <div>
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      <div>First: {state.first}</div>
      <div>Last: {state.last}</div>
    </div>
  );
};

const NameList = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return {
            ...state,
            name: action.payload,
          };
        case "ADD_NAME":
          return {
            ...state,
            names: [...state.names, state.name],
            name: "",
          };
      }
    },
    {
      names: [],
      name: "",
    }
  );
  return (
    <div>
      <p>
        {state.names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </p>
      <input
        type="text"
        value={state.name}
        onChange={(e) => {
          dispatch({ type: "SET_NAME", payload: e.target.value });
        }}
      />

      <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>
    </div>
  );
};

const App = () => {
  return (
    <>
      <UserForm />
      <NameList />
    </>
  );
};

export default App;
