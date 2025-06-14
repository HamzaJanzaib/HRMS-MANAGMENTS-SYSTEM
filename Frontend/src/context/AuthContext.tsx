import type { AuthContextType, children, details } from "@/types/Types";
import { createContext, useContext, useState } from "react";

// Define the shape of your context
// You can replace 'any' with a more specific type if you know the structure



export const AuthContext = createContext<AuthContextType | undefined>(undefined);



export const AuthContextProvider: React.FC<children> = ({ children }) => {
    const [role, setRole] = useState<string>('admin');
    const [details, setDetails] = useState<details>({});

    const Values: AuthContextType = {
        role,
        setRole,
        details,
        setDetails,
    };

    return (
        <AuthContext.Provider value={Values}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AppContextProvider");
    }
    return context;
};