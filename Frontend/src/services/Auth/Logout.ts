import fetchUtil from '../../utils/fetchUtil';
import { API_ENDPOINTS } from '../../config/config';

export const logoutUser = async () => {
    try {
        const data = await fetchUtil(API_ENDPOINTS.LOGOUT, {
            method: 'GET',
            credentials: 'include',
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