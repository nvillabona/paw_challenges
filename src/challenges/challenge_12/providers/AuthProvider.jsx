import React, { useState } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [authValues, setAuthValues] = useState({
        isAuthenticated: false,
        user: ''
    });

    return (
        <AuthContext.Provider value={{ authValues, setAuthValues }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
