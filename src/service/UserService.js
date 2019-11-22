import ApiConfig from '../config/ApiConfig';
import FetchService from './FetchService';

class UserService extends FetchService{

    register = (user, success, error)=>{
        this.post(ApiConfig.register, user, success, error);
    }

    getById = (id, success, error)=>{
        console.log("USer Servie get " + ApiConfig.userById + id);
        this.get(ApiConfig.userById + id, success, error);
    }
}

export default UserService;