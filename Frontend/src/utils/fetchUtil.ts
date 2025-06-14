// src/utils/fetchUtil.ts
import { BASE_URL } from "../config/config";

type FetchUtilOptions = RequestInit;

const fetchUtil = <T>(url: string, options: FetchUtilOptions = {}): Promise<T> => {
    const fullUrl = `${BASE_URL}${url}`;

    return new Promise<T>((resolve, reject) => {
        fetch(fullUrl, options)
            .then(async (response) => {
                let data;
                try {
                    data = await response.json();
                } catch {
                    data = null;
                }

                if (!response.ok) {
                    reject(new Error(data?.message || "Request failed"));
                } else {
                    resolve(data as T);
                }
            })
            .catch((error) => {
                reject(new Error(error?.message || "Network error"));
            });
    });
};

export default fetchUtil;