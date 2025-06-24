import {Children, createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [taLogado, settalogado] = useState(false);

    const login = () => settalogado(true);
    const logout = () => settalogado(false);

    return (
        <AuthContext.Provider value={{ taLogado, login, logout}}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
