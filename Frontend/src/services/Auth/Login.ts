import fetchUtil from '../../utils/fetchUtil';
import { API_ENDPOINTS } from '../../config/config';
import type { LoginDetailsType } from '@/types/Types';



export const login = async (userData: LoginDetailsType) => {
    try {
        const data = await fetchUtil(API_ENDPOINTS.LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', 
            body: JSON.stringify(userData),
        });

        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Fetch error:", error.message);
        } else {
            console.error("An unknown error occurred:", error);
        }
        throw error;

    }
};