import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import type { AppContextType, children } from "@/types/Types";
// import { updatecart } from "../Services/Others/UpdateCart";



//eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext<AppContextType | undefined>(undefined);



export const AppContextProvider: React.FC<children> = ({ children }) => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [SearchQuary, setSearchQuary] = useState<Record<string, string>>({});

    const values: AppContextType = {
        loading,
        setLoading,
        SearchQuary,
        setSearchQuary,
        navigate,
        toast
    };


    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    );
};

//eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
};