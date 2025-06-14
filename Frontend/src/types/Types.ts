import type { Dispatch, ReactNode, SetStateAction } from "react";
import type toast from "react-hot-toast";
import type { useNavigate } from "react-router-dom";

export type Response = {
    success: boolean;
    message: string;
    data?: {
        token: string;
        user: {
            name: string;
            email: string;
        };
    };
}

export type AppContextType = {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    SearchQuary: Record<string, string>;
    setSearchQuary: Dispatch<SetStateAction<Record<string, string>>>;
    navigate: ReturnType<typeof useNavigate>;
    toast: typeof toast;
};

export type details = Record<string, object>;

export type AuthContextType = {
    role: string;
    setRole: Dispatch<SetStateAction<string>>;
    details: details;
    setDetails: Dispatch<SetStateAction<details>>;
};

export type children = {
    children: ReactNode;
};

export type LoginDetailsType = {
    email: string,
    password: string
}

export type RegisterDetailsType = {
    username: string,
    email: string,
    password: string
}

export type LinkItemType = {
    title: string;
    url: string;
    icon: React.ElementType;
    roles: string[];
};