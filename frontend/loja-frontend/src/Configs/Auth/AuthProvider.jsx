import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem("email")) || null
  );
  const [role, setRole] = useState(
    JSON.parse(localStorage.getItem("role")) || null
  );

  const login = (newToken, user, email, role) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("role", JSON.stringify(role));
    setToken(newToken);
    setUser(user);
    setEmail(email);
    setRole(role);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    setToken(null);
    setUser(null);
    setEmail(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, email, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
