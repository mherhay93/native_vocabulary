import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveDataStorage = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.error('Failed to save data:', error);
    }
};

export const getDataStorage = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        if (jsonValue !== null) {
            return JSON.parse(jsonValue);
        } else {
            console.log('No data');
        }
    } catch (error) {
        console.error('Error reading data:', error);
    }
};
