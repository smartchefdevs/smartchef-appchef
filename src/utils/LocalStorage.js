import AsyncStorage from '@react-native-community/async-storage';

class LocalStorage{
    
    USER_ID = 'ID';
    USER = 'USER';
    TOKEN = 'TOKEN';

    saveData = async (key, value)=>{
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getData = async (key)=>{
        try {
            const data = await AsyncStorage.getItem(key);
            return JSON.parse(data);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    removeItem = async (key)=>{
        try {
            await AsyncStorage.removeItem(key);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    removeAll = async ()=>{
        try {
            await AsyncStorage.clear();
            return true;
        } catch (error) {
            return false;
        }
    }

}

export default LocalStorage;