import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveDataStorage = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.error('Failed to save data:', error);
    }
};
