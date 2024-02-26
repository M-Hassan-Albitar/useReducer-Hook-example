import { useReducer } from "react";
import { reducer, initialValue } from "./UserReducer";

function Users() {
  const [users, dispatch] = useReducer(reducer, initialValue);

  const usersMap = users.data.map((dt) => {
    return (
      <div key={dt.id}>
        <h3> {dt.name} </h3>
        <button
          onClick={() => {
            dispatch({ type: "remove", payload: dt.id });
          }}
        >
          remove
        </button>
      </div>
    );
  });

  return (
    <div>
      <h2>Users List</h2>
      <hr />
      <div>{usersMap}</div>
      <br />
      <hr />
      <button
        onClick={() => {
          dispatch({ type: users.data.length > 0 ? "clear" : "reset" });
        }}
      >
        {users.data.length > 0 ? "Clear all" : "Reset"}
      </button>
    </div>
  );
}

export default Users;
