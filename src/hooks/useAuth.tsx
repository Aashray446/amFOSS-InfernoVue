import { createContext, useContext, useMemo } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";
import { IUser } from "../types/user";

interface AuthContextType {
  user: IUser | null;
  login: (data: IUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useLocalStorage<IUser | null>("user", null);
  const navigate: NavigateFunction = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: IUser) => {
    setUser(data);
    navigate("/profile");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContext;
};
