import ApiConfig from '../config/ApiConfig';
import FetchService from './FetchService';

class UserService extends FetchService{

    register = (user, success, error)=>{
        this.post(ApiConfig.register, user, success, error);
    }
}

export default UserService;