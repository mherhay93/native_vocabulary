import {useState} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const useGetDataStorage = (key: string) => {
    const [result, setResult] = useState<string | null>(null);
    try {
        const jsonValue = AsyncStorage.getItem(key);
        if (jsonValue !== null) {
            jsonValue.then(res => setResult(res))
        } else {
            console.log('No data');
        }
    } catch (error) {
        console.error('Error reading data:', error);
    }

    return result
};