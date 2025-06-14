import fetchUtil from '../../utils/fetchUtil';
import { API_ENDPOINTS } from '../../config/config';
import type { RegisterDetailsType } from '@/types/Types';



export const register = async (userData: RegisterDetailsType) => {
    try {
        const data = await fetchUtil(API_ENDPOINTS.REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // for cookie/session-based auth
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