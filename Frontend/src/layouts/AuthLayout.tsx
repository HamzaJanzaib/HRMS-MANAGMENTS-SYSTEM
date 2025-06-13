import { BannerLight } from "@/assets/assest";
import type React from "react";

interface ChildrenProps {
    children: React.ReactNode;
}

const Banner = () => {
    return (
        <div className="w-full h-full overflow-hidden bg-[#f8f7fc] rounded-2xl flex items-center justify-end">
            <img
                src={BannerLight}
                alt="Project"
                className="w-2/3 max-w-lg rounded-l-xl shadow-lg object-contain"
            />
        </div>
    );
};

const AuthLayout: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <div className="h-screen w-full flex items-center">
            <div className="w-[50vw] hidden md:flex px-15 py-10 h-full items-center justify-center">
                <Banner />
            </div>
            <div className="w-[90vw] md:w-[40%] mx-auto">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
