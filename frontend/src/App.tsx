import { useEffect, useState } from "react";

import { useTheme } from "./contexts/ThemeContext";

import ServerGuard from "./components/ServerGuard/ServerGuard";

import { api } from "./services/api";

import Login from "./features/Auth/Login";

function App() {
  const { theme } = useTheme();
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");

    if (access_token) {
      const verifyToken = async () => {
        try {
          const data = await api.get("/users/verify-token");
          return data;
        } catch (error) {
          console.log("error:", error);
          localStorage.removeItem("access_token");
          // localStorage.removeItem("refresh_token");
        }
      };
      console.log("verifyToken:", verifyToken());
      setIsLogged(true);
    }
  });

  return (
    <>
      <div
        className={`
          bg-white dark:bg-zinc-900
          ${theme === "dark" ? "dark" : ""}
        `}
      >
        <ServerGuard>
          {!isLogged ? (
            <Login />
          ) : (
            <h1 className="font-bold text-2xl">Bem vindo</h1>
          )}
        </ServerGuard>
      </div>
    </>
  );
}

export default App;
