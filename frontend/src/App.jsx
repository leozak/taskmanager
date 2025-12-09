import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import Schedule from "./components/Schedule/Schedule";
import SideBar from "./components/Sidebar/Sidebar";

import api from "./api.js";

const nowDate = new Date();

function App() {
  const [month, setMonth] = useState(nowDate.getUTCMonth());
  const [year, setYear] = useState(nowDate.getUTCFullYear());
  const [day, setDay] = useState(nowDate.getUTCDate());

  const [todos, setTodos] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTodos(api("/todos"));
  }, []);

  return (
    <>
      <div className="flex h-screen">
        {/* Login */}
        {!isLoggedIn ? (
          <Login setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <>
            <SideBar
              nowMonth={month}
              nowYear={year}
              nowDay={day}
              setMonth={setMonth}
              setYear={setYear}
              setDay={setDay}
            />

            <Schedule
              nowMonth={month}
              nowYear={year}
              nowDay={day}
              setMonth={setMonth}
              setYear={setYear}
              setDay={setDay}
              todos={todos}
              setTodos={setTodos}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
