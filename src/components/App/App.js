import { useEffect, useState } from "react";
import json from "../../data/users.json";
import Card from "../Card/Card";
import s from "./App.module.css";

const arrayOfUsers = json.map((item) => ({ ...item, isActive: false }));

function App() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || arrayOfUsers
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <ul className={s.list}>
      {users.map((item) => (
        <Card key={item.id} item={item} setUsers={setUsers} users={users} />
      ))}
    </ul>
  );
}

export default App;
