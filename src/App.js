import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUsersAge, changeUsersName } from "./redux/actions/userAction";

function App() {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeUsersName(name));
    dispatch(changeUsersAge(age));
  }

  return (
    <div className="App">
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Change name" />
        <input type="number" onChange={(e) => setAge(e.target.value)} placeholder="Change age" />
        <input type="submit" value="Change user details" />
      </form>
    </div>
  );
}

export default App;
